import { Controller, Get } from "@nestjs/common";
import { ConfigsService } from "./configs.service";

@Controller("configs")
export class ConfigsController {
	constructor(private service: ConfigsService) {}

	@Get("/client")
	client() {
		return this.service.client();
	}

	@Get("/server")
	server() {
		return this.service.server();
	}
}
