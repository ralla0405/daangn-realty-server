import { RealtyType } from "../../../domain/RealtyType";
import { TransactionType } from "../../../domain/TransactionType";

export class SearchRealtyRequest {
    realtyType: RealtyType;
    transactionType: TransactionType;
    deposit: number;
    monthlyRent: number;
};