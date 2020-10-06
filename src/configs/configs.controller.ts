import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { ConfigsService } from "./configs.service";
import { QueryConfigDto } from './dto/query-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';

@Controller("configs")
export class ConfigsController {
	constructor(private service: ConfigsService) {}

	@Get("/")
	async list() {
		return this.service.list();
	}

	@Get("/:name")
	async client(@Query() dto: QueryConfigDto, @Param("name") name: string) {
		return {
			config: await this.service.get(dto.env, name)
		}
	}

	@Post("/")
	async update(@Body() dto: UpdateConfigDto) {
		return {
			config: await this.service.update(dto)
		}
	}

	@Delete("/:name")
	async delete(@Query() dto: QueryConfigDto, @Param("name") name: string) {
		return {
			deleted: await this.service.delete(dto.env, name)
		}
	}

}
