"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class SayCommand extends discord_akairo_1.Command {
    constructor() {
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
    exec(message) {
        const msg = message.content.substring(4);
        // We do not have to worry about messages consisting entirely of spaces,
        // since Discord automatically removes leading spaces (Spaces before the 
        // first actual character of a message)
        if (msg.length === 0) {
            return message.util.send("I cannot repeat an empty message.");
        }
        return message.util.send(msg);
    }
}
exports.default = SayCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL1B1YmxpYy9TYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFHekMsTUFBcUIsVUFBVyxTQUFRLHdCQUFPO0lBQzNDO1FBQ0ksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNULE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNoQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLG1HQUFtRztnQkFDNUcsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsUUFBUSxFQUFFO29CQUNOLG1CQUFtQjtpQkFDdEI7YUFDSjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQjtRQUN4QixNQUFNLEdBQUcsR0FBVyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCx3RUFBd0U7UUFDeEUseUVBQXlFO1FBQ3pFLHVDQUF1QztRQUN2QyxJQUFHLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQztTQUNqRTtRQUNELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNKO0FBMUJELDZCQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYXlDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJzYXlcIiwge1xyXG4gICAgICAgICAgICBhbGlhc2VzOiBbXCJzYXlcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlB1YmxpY1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJDb21tYW5kcyBPY3RhdmlhbiB0byByZXBlYXQgd2hhdGV2ZXIgeW91IGRlc2lyZS4gT2N0YXZpYW4gaXMgZXhlbXB0IGZyb20gY2hhdCBydWxlcywgeW91IGFyZSBub3QuXCIsXHJcbiAgICAgICAgICAgICAgICB1c2FnZTogXCIjc2F5IFtzb21ldGhpbmddXCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiI3NheSBIZWxsbyBXb3JsZCFcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYXRlbGltaXQ6IDVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlYyhtZXNzYWdlOiBNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICAgICAgY29uc3QgbXNnOiBzdHJpbmcgPSBtZXNzYWdlLmNvbnRlbnQuc3Vic3RyaW5nKDQpO1xyXG4gICAgICAgIC8vIFdlIGRvIG5vdCBoYXZlIHRvIHdvcnJ5IGFib3V0IG1lc3NhZ2VzIGNvbnNpc3RpbmcgZW50aXJlbHkgb2Ygc3BhY2VzLFxyXG4gICAgICAgIC8vIHNpbmNlIERpc2NvcmQgYXV0b21hdGljYWxseSByZW1vdmVzIGxlYWRpbmcgc3BhY2VzIChTcGFjZXMgYmVmb3JlIHRoZSBcclxuICAgICAgICAvLyBmaXJzdCBhY3R1YWwgY2hhcmFjdGVyIG9mIGEgbWVzc2FnZSlcclxuICAgICAgICBpZihtc2cubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLnV0aWwuc2VuZChcIkkgY2Fubm90IHJlcGVhdCBhbiBlbXB0eSBtZXNzYWdlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UudXRpbC5zZW5kKG1zZyk7XHJcbiAgICB9XHJcbn0iXX0=