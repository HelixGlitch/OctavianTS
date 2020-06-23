import { Listener } from "discord-akairo";

export default class CooldownListener extends Listener {
    public constructor() {
        super("cooldown", {
            emitter: "client",
            event: "cooldown",
            category: "client"
        });
    }

    public exec(time: Number): void {
        console.log(time);
    }
}