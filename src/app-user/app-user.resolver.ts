import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AppUserService } from './app-user.service';
import { AppUser } from './entities/app-user.entity';
import { CreateAppUserDto } from './dto/create-app-user-dto';

@Resolver(() => AppUser)
export class AppUserResolver {
  constructor(private readonly appUserService: AppUserService) {}

  @Mutation(() => AppUser)
  async registerUser(@Args('input') input: CreateAppUserDto): Promise<AppUser> {
    return this.appUserService.create(input);
  }

  @Query(() => String)
  healthCheck(): string {
    return 'GraphQL is up and running!';
  }
}
