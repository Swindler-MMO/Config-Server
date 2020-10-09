import { Collection, MongoClient } from "mongodb";
import { config } from "dotenv";

config();

const client = new MongoClient(process.env.ATLAS_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

export class DB {

	static configs: Collection<any>;

	static async connect() {
		await client.connect();

		this.configs = client.db("configs").collection("config");
	}

	static async setConfig(env: string, name: string, cfg: any) {
		const _id = `${env}-${name}`;
		//console.log(cfg);
		return (await this.configs.replaceOne({_id}, cfg, {upsert: true})).ops[0];
	}

	static getConfig(env: string, name: string) {
		return this.configs.findOne({_id: `${env}-${name}`});
	}

	static async listConfigs() {
		return this.configs.find({}, {
			projection: {
				_id: 1
			}
		}).toArray();
	}

	static async deleteConfig(env: string, name: string) {
		return this.configs.deleteOne({ _id: `${env}-${name}`});
	}

}
