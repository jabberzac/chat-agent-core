import { Client } from "discord.js";
import { EnvironmentDef } from "../lib/config.d";
import BaseComponent from "../lib/BaseComponent";

export default class BaseEnvironment extends BaseComponent {
    type: string = "env";
    async init(config: EnvironmentDef) {

    }
}
