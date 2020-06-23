import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class SayCommand extends Command {
    public constructor() {
        super("say", {
            aliases: ["say"],
            category: "Public",
            description: {
                content: "Commands Octavian to repeat whatever you desire. Octavian is exempt from chat rules, you are not.",
                usage: "#say [something]",
                examples: [
                    "#say Hello World!"
                ]
            },
            ratelimit: 5
        });
    }

    public exec(message: Message): Promise<Message> {
        const msg: string = message.content.substring(4);
        // We do not have to worry about messages consisting entirely of spaces,
        // since Discord automatically removes leading spaces (Spaces before the 
        // first actual character of a message)
        if(msg.length === 0) {
            return message.util.send("I cannot repeat an empty message.");
        }
        return message.util.send(msg);
    }
}