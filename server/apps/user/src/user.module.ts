/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { UsersResolver } from './user.resolver';
// import { UsersResolver } from './user.resolver';
// import { EmailModule } from './email/email.module';
// import { UsersService } from './user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    // EmailModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    ConfigService,
    JwtService,
    PrismaService,
    UsersResolver,
  ],
})
export class UserModule { }