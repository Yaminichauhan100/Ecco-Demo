"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetUser = void 0;
const common_1 = require("@nestjs/common");
const nest_console_1 = require("@squareboat/nest-console");
let GreetUser = class GreetUser {
    async handle(_cli) {
        const name = _cli.argument('name');
        _cli.success(`Hello ${name}, enjoy building cool stuff with this boilerplate! 😁`);
        _cli.table([
            { name: 'User 1', designation: 'Software Engineer L1' },
            { name: 'User 2', designation: 'Software Engineer L1' },
        ]);
        _cli.info('User Greeted');
        return;
    }
};
GreetUser = __decorate([
    (0, common_1.Injectable)(),
    (0, nest_console_1.Command)('user:greet {name}', { desc: 'Command to greet a user' })
], GreetUser);
exports.GreetUser = GreetUser;
//# sourceMappingURL=greetUser.js.map