import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateAppUserDto } from './dto/create-app-user-dto';
import { AppUser } from './entities/app-user.entity';

@Injectable()
export class AppUserService {
  constructor(
    @InjectRepository(AppUser)
    private readonly userRepo: Repository<AppUser>,
  ) {}

  async create(input: CreateAppUserDto): Promise<AppUser> {
    const existing = await this.userRepo.findOne({
      where: [{ username: input.username }, { email: input.email }],
    });

    if (existing) {
      throw new ConflictException('Username or email already exists');
    }

    const hashedPassword = await bcrypt.hash(input.password, 10);
    const user = this.userRepo.create({
      ...input,
      password: hashedPassword,
    });

    return this.userRepo.save(user);
  }
}
