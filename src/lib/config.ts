import fs from 'fs';
import path from 'path';

import { Config } from './config.d';

export class ConfigProvider {
    static loadConfig(): Config {
        const configPath = path.join(__dirname, '..', '..', 'config.json');
        const data = fs.readFileSync(configPath, 'utf8');
        return JSON.parse(data) as Config;
    }
}