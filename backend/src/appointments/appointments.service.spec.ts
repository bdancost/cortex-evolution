import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentsService } from './appointments.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AppointmentsService', () => {
  let service: AppointmentsService;

  // 1. ATUALIZE O MOCK: Adicione o findFirst aqui
  const mockPrisma = {
    appointment: {
      create: jest.fn(),
      findMany: jest.fn(),
      findFirst: jest.fn(), // Essencial para a validação de conflito
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppointmentsService,
        {
          provide: PrismaService,
          useValue: mockPrisma,
        },
      ],
    }).compile();

    service = module.get<AppointmentsService>(AppointmentsService);
  });

  it('should create an appointment', async () => {
    const userId = 'user-1';
    const barberId = 'barber-1';

    // CORREÇÃO: Criar uma data no FUTURO (ex: Amanhã às 10h)
    const date = new Date();
    date.setDate(date.getDate() + 1); // Amanhã
    date.setHours(10, 0, 0, 0); // 10:00:00

    mockPrisma.appointment.findFirst.mockResolvedValue(null);

    mockPrisma.appointment.create.mockResolvedValue({
      id: 'appt-1',
      userId,
      barberId,
      date,
      createdAt: new Date(),
    });

    const result = await service.create(userId, barberId, date);

    expect(result).toHaveProperty('id');
    expect(result.date).toEqual(date);
  });

  it('should throw an error if appointment at same time exists', async () => {
    const userId = 'user-1';
    const barberId = 'barber-1';
    const date = new Date();

    // Simula que JÁ EXISTE um agendamento (conflito)
    mockPrisma.appointment.findFirst.mockResolvedValue({ id: 'existing-id' });

    // O teste deve esperar que a Promise seja rejeitada
    await expect(service.create(userId, barberId, date)).rejects.toThrow();
  });
});
