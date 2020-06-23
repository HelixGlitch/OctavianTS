"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super("ping", {
            aliases: ["ping"],
            category: "Public",
            description: {
                content: "Pings the bot, which will check latency to Discord API.",
                usage: "ping",
                examples: [
                    "ping"
                ]
            },
            ratelimit: 1
        });
    }
    exec(message) {
        return message.util.send(`Pong! \`${this.client.ws.ping}ms\``);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9QdWJsaWMvUGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUd6QyxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDNUM7UUFDSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUseURBQXlEO2dCQUNsRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUU7b0JBQ04sTUFBTTtpQkFDVDthQUNKO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQWdCO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FDSjtBQW5CRCw4QkFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGluZ0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcInBpbmdcIiwge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbXCJwaW5nXCJdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJQdWJsaWNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUGluZ3MgdGhlIGJvdCwgd2hpY2ggd2lsbCBjaGVjayBsYXRlbmN5IHRvIERpc2NvcmQgQVBJLlwiLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2U6IFwicGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcInBpbmdcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKGBQb25nISBcXGAke3RoaXMuY2xpZW50LndzLnBpbmd9bXNcXGBgKTtcclxuICAgIH0gXHJcbn0iXX0=