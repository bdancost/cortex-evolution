import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentsService } from './appointments.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AppointmentsService', () => {
  let service: AppointmentsService;
  let prisma: PrismaService;

  const mockPrisma = {
    appointment: {
      create: jest.fn(),
      findMany: jest.fn(),
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
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should create an appointment', async () => {
    const userId = 'user-1';
    const date = new Date();

    mockPrisma.appointment.create.mockResolvedValue({
      id: 'appt-1',
      userId,
      date,
      createdAt: new Date(),
    });

    const result = await service.create(userId, date);

    expect(prisma.appointment.create).toHaveBeenCalledWith({
      data: {
        userId,
        date,
      },
    });

    expect(result).toHaveProperty('id');
    expect(result.userId).toBe(userId);
  });

  it('should return all appointments with users', async () => {
    const mockData = [
      {
        id: 'appt-1',
        date: new Date(),
        user: {
          id: 'user-1',
          email: 'test@email.com',
        },
      },
    ];

    mockPrisma.appointment.findMany.mockResolvedValue(mockData);

    const result = await service.findAll();

    expect(prisma.appointment.findMany).toHaveBeenCalledWith({
      include: {
        user: true,
      },
    });

    expect(result).toEqual(mockData);
  });
});
