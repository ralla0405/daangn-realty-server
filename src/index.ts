import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import { User } from "./entity/User"
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './realty/resolvers/UserResolver';

createConnection().then(async connection => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.name = "test";
    user.email = "test@email.email";
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
}).catch(error => console.log(error));

// Create express server
async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [UserResolver],
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