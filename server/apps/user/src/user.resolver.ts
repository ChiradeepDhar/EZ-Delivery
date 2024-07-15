/* eslint-disable prettier/prettier */

// import {UseFilters} from "@nestjs/common";
import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { RegisterResponse } from "./types/user.types";
import { RegisterDto } from "./dto/user.dto";
import { Response } from 'express';
import { BadRequestException } from "@nestjs/common";

@Resolver('User')
// @useFilters
export class UsersResolver {
    constructor(
        private readonly userService: UserService
    ) { }

    @Mutation(() => RegisterResponse)
    async register(
        @Args('registerInput') registerDto: RegisterDto,
        @Context() context: { res: Response },
    ): Promise<RegisterResponse> {
        if (!RegisterDto.name || registerDto.email || !registerDto.password) {
            throw new BadRequestException('Please fill all the fields');
        }


    }
}