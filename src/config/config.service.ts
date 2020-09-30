import { Injectable } from "@nestjs/common";
import client from "./configs/client";
import server from "./configs/server";

@Injectable()
export class ConfigService {
	client() {
		return client;
	}

	server() {
		return server;
	}
}
