/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { Server } from 'http';

describe('E2E Tests - Auth & Appointments', () => {
  let app: INestApplication;

  // ✅ ADICIONADO: helper para evitar repetição e bugs
  const createUserAndLogin = async (role?: string) => {
    const email = `test${Date.now()}@email.com`;
    const password = '123456';

    await request(app.getHttpServer() as Server)
      .post('/users')
      .send({ name: 'User Test', email, password, role })
      .expect(201);

    const login = await request(app.getHttpServer() as Server)
      .post('/auth/login')
      .send({ email, password })
      .expect(201);

    return {
      email,
      password,
      token: login.body.access_token as string,
    };
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should register and login successfully', async () => {
    const email = `test${Date.now()}@email.com`;
    const password = '123456';

    await request(app.getHttpServer() as Server)
      .post('/users')
      .send({ name: 'User Test', email, password })
      .expect(201);

    const response = await request(app.getHttpServer() as Server)
      .post('/auth/login')
      .send({ email, password })
      .expect(201);

    expect(response.body).toHaveProperty('access_token');
  });

  it('should not allow access without token', async () => {
    await request(app.getHttpServer() as Server)
      .post('/appointments')
      .send({
        barberId: 'fake-id',
        date: new Date().toISOString(),
      })
      .expect(401);
  });

  it('should allow access with valid token', async () => {
    const { token } = await createUserAndLogin();

    await request(app.getHttpServer() as Server)
      .post('/appointments')
      .set('Authorization', `Bearer ${token}`)
      .send({
        barberId: 'fake-id',
        date: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      })
      .expect((res) => {
        expect([201, 400]).toContain(res.status);
      });
  });

  it('should not allow booking same time slot for same barber', async () => {
    // 🔥 ADICIONADO: cria ADMIN corretamente
    const { token } = await createUserAndLogin('ADMIN');

    const decoded = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString(),
    );

    console.log('JWT PAYLOAD:', decoded);

    // 🔥 ADICIONADO: pequena espera pra evitar race condition
    await new Promise((r) => setTimeout(r, 200));

    const barberResponse = await request(app.getHttpServer() as Server)
      .post('/barbers')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Barber Test', email: 'barber@test.com' });

    if (barberResponse.status !== 201) {
      console.log('BARBER ERROR:', barberResponse.body);
    }

    expect(barberResponse.status).toBe(201);

    const barberId = (barberResponse.body as { data: { id: string } }).data.id;

    const date = new Date(Date.now() + 60 * 60 * 1000).toISOString();

    // Primeiro agendamento
    await request(app.getHttpServer() as Server)
      .post('/appointments')
      .set('Authorization', `Bearer ${token}`)
      .send({ barberId, date })
      .expect(201);

    // Segundo agendamento (mesmo horário)
    await request(app.getHttpServer() as Server)
      .post('/appointments')
      .set('Authorization', `Bearer ${token}`)
      .send({ barberId, date })
      .expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
