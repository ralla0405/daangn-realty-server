import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Realty } from '../../domain/Realty';
import { AppDataSource } from '../../../data-source';
import { Like } from "typeorm"
import { SearchRealtyRequest } from '../dto/request/SearchRealtyRequest';

@Resolver()
export class RealtyResolver {

    private realtyRepository = AppDataSource.getRepository(Realty);

    @Query(() => Promise<[Realty]>)
    async realties(condition: SearchRealtyRequest) {
        return this.realtyRepository.find({
            where: {
                realtyType: condition.realtyType,
                transactionType: condition.transactionType,
                deposit: condition.deposit,
                monthlyRent: condition.monthlyRent
            }
        });
    }

    @Query(() => Realty)
    async realty(id: number) {
        return this.realtyRepository.findOneBy({
            id: id
        });
    }

    // @Mutation(() => Realty)
    // async createRealty(@Arg('name') name: string, @Arg('email') email: string) {
    //     const user = this.realtyRepository.create({ name, email });
    //     return this.realtyRepository.save(user);
    // }
}