import { DataSource } from 'typeorm';
import { Realty } from './realty/domain/Realty';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: "root",
    password: "daangnrealty",
    database: "daangn_realty",
    synchronize: true,
    logging: false,
    dropSchema: true,
    entities: [Realty],
    migrations: [],
    subscribers: [],
    namingStrategy: new SnakeNamingStrategy()
});