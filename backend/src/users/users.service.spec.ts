import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

  const mockPrisma = {
    user: {
      create: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: mockPrisma,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should create a user with hashed password', async () => {
    const userData = {
      name: 'Bruno',
      email: 'bruno@email.com',
      password: '123456',
    };

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    mockPrisma.user.create.mockResolvedValue({
      id: '1',
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    const result = await service.create(userData);

    expect(prisma.user.create).toHaveBeenCalled();

    expect(result).toHaveProperty('id');
    expect(result.email).toBe(userData.email);

    expect(result.password).not.toBe(userData.password);
  });
});
