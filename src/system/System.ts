import * as _items from "./item/Items.json";
export let items = _items;

interface ConfigOptions {
    timestamp: Number;
    generosity: Number;
}


export default class System {
    public config: ConfigOptions;
    public timestamp: Number = new Date().getTime();
    public items = _items;
    public constructor(config: ConfigOptions) {
        this.config = config;
    }
}