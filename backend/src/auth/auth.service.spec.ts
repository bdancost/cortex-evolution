import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;

  const mockUsersService = {
    findByEmail: jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should login successfully and return token', async () => {
    const user = {
      id: '1',
      email: 'test@email.com',
      password: await bcrypt.hash('123456', 10),
    };

    mockUsersService.findByEmail.mockResolvedValue(user);
    mockJwtService.sign.mockReturnValue('fake-token');

    const result = await service.login('test@email.com', '123456');

    expect(result).toHaveProperty('access_token');
    expect(mockJwtService.sign).toHaveBeenCalled();
  });

  it('should throw error if user does not exist', async () => {
    mockUsersService.findByEmail.mockResolvedValue(null);

    await expect(service.login('wrong@email.com', '123456')).rejects.toThrow(
      UnauthorizedException,
    );
  });

  it('should throw error if password is invalid', async () => {
    const user = {
      id: '1',
      email: 'test@email.com',
      password: await bcrypt.hash('correct-password', 10),
    };

    mockUsersService.findByEmail.mockResolvedValue(user);

    await expect(
      service.login('test@email.com', 'wrong-password'),
    ).rejects.toThrow(UnauthorizedException);
  });
});
