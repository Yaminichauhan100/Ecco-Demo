"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const nest_events_1 = require("@squareboat/nest-events");
const user_1 = require("./user");
const boat_1 = require("../libs/boat/src");
const nest_console_1 = require("@squareboat/nest-console");
const nestjs_objection_1 = require("@squareboat/nestjs-objection");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_objection_1.ObjectionModule.registerAsync({
                isGlobal: true,
                imports: [config_1.ConfigModule],
                useFactory: (config) => config.get('db'),
                inject: [config_1.ConfigService],
            }),
            boat_1.BoatModule,
            user_1.UserModule,
            nest_events_1.EventModule,
            nest_console_1.ConsoleModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.js.map