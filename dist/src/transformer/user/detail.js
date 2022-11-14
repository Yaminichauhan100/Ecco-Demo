"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetailTransformer = void 0;
const boat_1 = require("../../../libs/boat/src");
class UserDetailTransformer extends boat_1.Transformer {
    constructor() {
        super(...arguments);
        this.availableIncludes = ['extra', 'address', 'pin'];
        this.defaultIncludes = ['pin'];
    }
    async transform(user) {
        return {
            id: user.uuid,
            firstName: user.firstName,
            lastName: user.lastName,
        };
    }
    async includeExtra(user) {
        return { username: user.username };
    }
    async includeAddress(user) {
        return { country: 'INDIA', cityName: 'Gurugram' };
    }
    async includePin(user) {
        return { code: '122002' };
    }
}
exports.UserDetailTransformer = UserDetailTransformer;
//# sourceMappingURL=detail.js.map