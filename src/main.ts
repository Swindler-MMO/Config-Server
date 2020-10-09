import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DB } from './mongodb';

async function bootstrap() {
	await DB.connect();

	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe({ transform: true }));

	await app.listen(3012);
}
bootstrap();
