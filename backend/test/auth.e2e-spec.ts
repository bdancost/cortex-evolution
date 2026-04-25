import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { Server } from 'http';

type LoginResponse = {
  access_token: string;
};

let server: Server;

describe('Auth & Protected Routes (E2E)', () => {
  let app: INestApplication<unknown>;
  let http: ReturnType<typeof request>;
  let token: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    server = app.getHttpServer() as Server;
    http = request(server);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should register and login successfully', async () => {
    const email = `test${Date.now()}@email.com`;
    const password = '123456';

    // 1️⃣ Criar usuário
    await http
      .post('/users')
      .send({ name: 'Test User', email, password })
      .expect(201);

    // 2️⃣ Login
    const response = await http
      .post('/auth/login')
      .send({ email, password })
      .expect(201);

    // 3️⃣ Validar token
    expect(response.body).toHaveProperty('access_token');

    const body = response.body as LoginResponse;

    token = body.access_token;
  });

  it('should not allow access without token', async () => {
    await http
      .post('/appointments')
      .send({
        barberId: 'fake-id',
        date: new Date().toISOString(),
      })
      .expect(401);
  });

  it('should allow access with valid token (but fail with invalid barber)', async () => {
    await http
      .post('/appointments')
      .set('Authorization', `Bearer ${token}`)
      .send({
        barberId: 'fake-id',
        date: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      })
      .expect(400);
  });
});
