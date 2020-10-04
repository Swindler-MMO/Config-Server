import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Configs } from './configs';

async function bootstrap() {

	Configs.loadConfigs();

	const app = await NestFactory.create(AppModule);
	await app.listen(3000);
}
bootstrap();
