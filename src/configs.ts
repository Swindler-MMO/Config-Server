import { readFileSync } from "fs";
import { join } from "path";

const environements = ["prod", "dev", "local"];
const configTypes = ["client", "server"];

type Environments = typeof environements[number];
type ConfigTypes = typeof configTypes[number];

class Configs {

	static cache = new Map<string, any>();

	static loadConfigs() {
		// for(const env of environements)
		// 	for(const type of configTypes)
		// 		this.loadJson(env, type);

	}

	static getConfig(env: Environments | string, type: ConfigTypes) {
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

export {
	Configs,
	environements,
	configTypes
}