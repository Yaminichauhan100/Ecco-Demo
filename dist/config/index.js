"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./database"));
const settings_1 = __importDefault(require("./settings"));
const services_1 = __importDefault(require("./services"));
exports.default = [app_1.default, database_1.default, settings_1.default, services_1.default];
//# sourceMappingURL=index.js.map