import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "./config.service";

@Controller("config")
export class ConfigController {
	constructor(private service: ConfigService) {}

	@Get("/client")
	client() {
		return this.service.client();
	}

	@Get("/server")
	server() {
		return this.service.server();
	}
}
