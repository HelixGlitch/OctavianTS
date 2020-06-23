import { token, owners } from "./Config";
import { generosity } from "./system/SystemConfig";
import BotClient from "./client/BotClient";
import System from "./system/System";

const client: BotClient = new BotClient({ token, owners });
client.start();
const timestamp: Number = new Date().getTime();
const system: System = new System({ timestamp, generosity });
