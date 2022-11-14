"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const nest_events_1 = require("@squareboat/nest-events");
const userSignedUp_1 = require("../events/userSignedUp");
const constants_1 = require("../constants");
let UserService = class UserService {
    constructor(users) {
        this.users = users;
    }
    async get() {
        return this.users.firstWhere({});
    }
    userSignedUp(event) {
        console.log('EVENT RECEIVED ===>', event);
        return;
    }
};
__decorate([
    (0, nest_events_1.ListensTo)('USER_SIGNED_UP'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userSignedUp_1.UserSignedUp]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "userSignedUp", null);
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.UserModuleConstants.userRepo)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.js.map