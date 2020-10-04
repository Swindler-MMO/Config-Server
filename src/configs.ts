import { readFileSync } from "fs";
import { join } from "path";

const environements = ["prod", "dev", "local"] as const;
const configTypes = ["client", "server"] as const;

type Environments = typeof environements[number];
type ConfigTypes = typeof configTypes[number];

export class Configs {

	static cache = new Map<string, any>();

	static loadConfigs() {
		for(const env of environements)
			for(const type of configTypes)
				this.loadJson(env, type);

	}

	static getConfig(env: Environments, type: ConfigTypes) {
		return this.cache.get(env)[type];
	}

	private static loadJson(env: Environments | string, type: ConfigTypes | string) {
		const json = JSON.parse(readFileSync(join(__dirname, `../data/${env}/${type}.json`), "utf-8"));

		if(this.cache.has(env)) {
			this.cache.get(env)[type] = json;
			return;
		}

		this.cache.set(env, {[type]: json});

	}

}