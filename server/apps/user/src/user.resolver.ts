/* eslint-disable prettier/prettier */

import { Args, Mutation, Resolver, Query, Context } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { RegisterResponse } from "./types/user.types";
import { RegisterDto } from "./dto/user.dto";
import { Response } from 'express';
import { BadRequestException } from "@nestjs/common";
import { User } from "./entities/user.entity";

@Resolver('User')
export class UsersResolver {
    constructor(
        private readonly userService: UserService
    ) { }

    @Mutation(() => RegisterResponse)
    async register(
        @Args('registerInput') registerDto: RegisterDto,
        @Context() context: { res: Response },
    ): Promise<RegisterResponse> {
        if (!registerDto.name || !registerDto.email || !registerDto.password) {
            throw new BadRequestException('Please fill all the fields');
        }

        const user = await this.userService.register(registerDto, context.res);
        return { user };
    }

    @Query(() => [User])
    async getUsers() {
        return this.userService.getUsers();
    }
}
