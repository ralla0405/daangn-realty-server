import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import { ObjectType, Field, ID, registerEnumType } from 'type-graphql';
import { AuthorType } from './AuthorType'; 
import { RealtyType } from './RealtyType';
import { TransactionType } from './TransactionType';
import { AvailableType } from './AvailableType';
import { BaseTimeEntity } from '../../common/entity/BaseTimeEntity';

@ObjectType()
@Entity("realties")
@Index("IDX_REALTY_TYPE_TX_TYPE_DEPOSIT_RENT", ["realtyType", "transactionType", "deposit", "monthlyRent"])
export class Realty extends BaseTimeEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

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
    realtyOtherName?: string;

    @Field()
    @Index()
    @Column({nullable: false})
    adderss: string;

    @Field()
    @Column({length: 30, nullable: true})
    locationDescription?: string;

    @Field(() => TransactionType)
    @Column({
        type: "enum",
        enum: TransactionType,
        nullable: false
    })
    transactionType: TransactionType;

    @Field()
    @Column({nullable: false})
    deposit: number;

    @Field()
    @Column({nullable: true})
    monthlyRent?: number;

    @Field()
    @Column({nullable: false})
    exclusiveArea: number;

    @Field()
    @Column({nullable: true})
    supllyArea?: number;

    @Field()
    @Column({nullable: true})
    numberOfRooms?: number;

    @Field()
    @Column({nullable: true})
    numberOfBathrooms?: number;

    @Field()
    @Column({nullable: true})
    totalFloors?: number;

    @Field()
    @Column({nullable: true})
    currentFloor?: number;

    @Field()
    @Column({nullable: false})
    maintenanceFee: number;

    @Field(() => AvailableType)
    @Column({
        type: "enum",
        enum: AvailableType,
        nullable: false
    })
    loanAvailable: AvailableType;

    @Field(() => AvailableType)
    @Column({
        type: "enum",
        enum: AvailableType,
        nullable: false
    })
    petsAvailable: AvailableType;

    @Field(() => AvailableType)
    @Column({
        type: "enum",
        enum: AvailableType,
        nullable: false
    })
    parkingAvailable: AvailableType;

    @Field()
    @Column({nullable: true})
    moveInDate?: Date;

    @Field()
    @Column({
        length: 1000,
        nullable: true
    })
    realtyDescription?: string;
}


registerEnumType(AuthorType, {
    name: "AuthorType",
    description: "The type of author",
});

registerEnumType(RealtyType, {
    name: "RealtyType",
    description: "The type of realty",
});

registerEnumType(TransactionType, {
    name: "TransactionType",
    description: "The type of transaction",
});

registerEnumType(AvailableType, {
    name: "AvailableType",
    description: "The type of available",
});