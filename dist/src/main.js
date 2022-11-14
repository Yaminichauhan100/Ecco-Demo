"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boat_1 = require("../libs/boat/src");
const app_1 = require("./app");
boat_1.RestServer.make(app_1.AppModule, { addValidationContainer: true });
//# sourceMappingURL=main.js.map