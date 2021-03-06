import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class PingCommand extends Command {
    public constructor() {
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

    public exec(message: Message): Promise<Message> {
        return message.util.send(`Pong! \`${this.client.ws.ping}ms\``);
    } 
}