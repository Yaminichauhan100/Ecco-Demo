"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const nestjs_objection_1 = require("@squareboat/nestjs-objection");
class UserModel extends nestjs_objection_1.BaseModel {
}
exports.UserModel = UserModel;
UserModel.tableName = 'users';
//# sourceMappingURL=user.js.map