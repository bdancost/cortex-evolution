/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Auth & Protected Routes (E2E)', () => {
  let app: INestApplication<unknown>;
  let http: ReturnType<typeof request>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // ✅ cast controlado e único ponto de "any"
    http = request(app.getHttpServer() as any);
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
  });

  afterAll(async () => {
    await app.close();
  });

  it('should not allow access without token', async () => {
    await request(app.getHttpServer() as any)
      .post('/appointments')
      .send({
        barberId: 'fake-id',
        date: new Date().toISOString(),
      })
      .expect(401);
  });
});
