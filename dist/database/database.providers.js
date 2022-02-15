"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/entitiy/user.entity");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await (0, typeorm_1.createConnection)({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'james',
            password: 'password',
            database: 'test',
            entities: [user_entity_1.User],
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map