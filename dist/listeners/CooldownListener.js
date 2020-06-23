"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class CooldownListener extends discord_akairo_1.Listener {
    constructor() {
        super("cooldown", {
            emitter: "client",
            event: "cooldown",
            category: "client"
        });
    }
    exec(time) {
        console.log(time);
    }
}
exports.default = CooldownListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29vbGRvd25MaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saXN0ZW5lcnMvQ29vbGRvd25MaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUEwQztBQUUxQyxNQUFxQixnQkFBaUIsU0FBUSx5QkFBUTtJQUNsRDtRQUNJLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDZCxPQUFPLEVBQUUsUUFBUTtZQUNqQixLQUFLLEVBQUUsVUFBVTtZQUNqQixRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sSUFBSSxDQUFDLElBQVk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0o7QUFaRCxtQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyIH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29sZG93bkxpc3RlbmVyIGV4dGVuZHMgTGlzdGVuZXIge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiY29vbGRvd25cIiwge1xyXG4gICAgICAgICAgICBlbWl0dGVyOiBcImNsaWVudFwiLFxyXG4gICAgICAgICAgICBldmVudDogXCJjb29sZG93blwiLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJjbGllbnRcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGVjKHRpbWU6IE51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRpbWUpO1xyXG4gICAgfVxyXG59Il19