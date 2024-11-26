import { Entity, PrimaryGeneratedColumn, Column, Index, Long, Int32 } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { AuthorType } from './AuthorType'; 
import { RealtyType } from './RealtyType';
import { TransactionType } from './TransactionType';

@ObjectType()
@Entity("realties")
export class Realty {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id?: number;

    @Field(() => AuthorType)
    @Column({
        type: "enum",
        enum: AuthorType,
        nullable: false
    })
    authorType: AuthorType;

    @Field(() => RealtyType)
    @Column({
        type: "enum",
        enum: RealtyType,
        nullable: false
    })
    realtyType: RealtyType;

    @Field()
    @Column({
        nullable: true
    })
    realtyOtherName: String;

    @Field()
    @Column()
    adderss: string;

    @Field()
    @Column({length: 30, nullable: true})
    locationDescription: String;

    @Field(() => TransactionType)
    @Column({
        type: "enum",
        enum: TransactionType,
        nullable: false
    })
    transactionType: TransactionType;

    @Field()
    @Column()
    deposit: Long;

    @Field()
    @Column()
    monthlyRent: Long;

    @Field()
    @Column()
    exclusiveArea: number;

    constructor(authorType: AuthorType, realtyType: RealtyType, realtyOtherName: string) {
        this.authorType = authorType;
        this.realtyType = realtyType;
        this.realtyOtherName = realtyOtherName;
    }
}