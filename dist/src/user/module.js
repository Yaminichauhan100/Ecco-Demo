"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
const constants_1 = require("./constants");
const repositories_1 = require("./repositories");
const commands_1 = require("./commands");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [controllers_1.UserController],
        providers: [
            services_1.UserService,
            commands_1.GreetUser,
            { provide: constants_1.UserModuleConstants.userRepo, useClass: repositories_1.UserRepository },
        ],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=module.js.map