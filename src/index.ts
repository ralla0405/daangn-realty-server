import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from "./data-source"
import { RealtyResolver } from "./realty/application/resolver/RealtyResolver"
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';

AppDataSource.initialize()
    .then(async () => {
        console.log("database connected")
    }).catch(error => console.log(error))

// Create express server
async function bootstrap() {    
    const schema = await buildSchema({
        resolvers: [RealtyResolver],
    });

    const app = express();

    app.use(
        '/graphql',
        graphqlHTTP({
            schema,
            graphiql: true,
        }),
    );

    app.listen(4000, () => {
        console.log('Server is running on http://localhost:4000/graphql');
    });
}

bootstrap();