import BaseBotComponent from "../lib/BaseBotComponent";

export default class BaseOutput extends BaseBotComponent {
    async send(message: string, originator: any) {
        throw new Error("Send not implemented");
    }
}