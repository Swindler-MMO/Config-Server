import { Injectable, NotFoundException } from "@nestjs/common";
import { DB } from '../mongodb';
import { UpdateConfigDto } from './dto/update-config.dto';

@Injectable()
export class ConfigsService {

	async get(env: string, name: string): Promise<any> {

		const cfg = await DB.getConfig(env, name);

		if(!cfg)
			throw new NotFoundException("Config not found");

		delete cfg._id;

		return cfg;
	}

	async list() {
		const raw = await DB.listConfigs();

		const response = {};

		for (const d of raw) {
			const split = d._id.split("-");

			if(!response[split[0]])
				response[split[0]] = [];

			response[split[0]].push(split[1])
		}

		return response;
	}

	async update(dto: UpdateConfigDto): Promise<any> {
		return  DB.setConfig(dto.env, dto.name, dto.config)
	}

	async delete(env: string, name: string) {
		return (await DB.deleteConfig(env, name)).deletedCount > 0;
	}

}
