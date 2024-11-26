import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { User } from '../../entity/User';
import { getRepository } from 'typeorm';

@Resolver()
export class UserResolver {
    private userRepository = getRepository(User);

    @Query(() => [User])
    async users() {
        return this.userRepository.find();
    }

    @Mutation(() => User)
    async createUser(@Arg('name') name: string, @Arg('email') email: string) {
        const user = this.userRepository.create({ name, email });
        return this.userRepository.save(user);
    }
}