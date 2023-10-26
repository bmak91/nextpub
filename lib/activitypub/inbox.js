"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inbox = void 0;
const server_1 = require("next/server");
function inbox() {
    return new server_1.NextResponse(JSON.stringify({}), {
        headers: {
            "Content-Type": "application/jrd+json",
        },
    });
}
exports.inbox = inbox;
//# sourceMappingURL=inbox.js.map