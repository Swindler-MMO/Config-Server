import { Injectable } from "@nestjs/common";
import client from "../../configs/client";
import server from "../../configs/server";
import { Configs } from '../configs';

@Injectable()
export class ConfigsService {

	client(): any {
		return Configs.getConfig("prod", "client");
	}

	server(): any {
		return Configs.getConfig("prod", "server");
	}

	update(name: string, env: string, value: any): any {
		const config =  this.getConfig(name);
		return config;
	}

	private getConfig(name: string) {
		if(name == "client")
			return client;
		if(name == "server")
		return server;
	}

}
