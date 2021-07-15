import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { MercuriusModule } from "nestjs-mercurius";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatResolver } from "./cat.resolver";

@Module({
  imports: [
    MercuriusModule.forRoot({
      autoSchemaFile: true,
      graphiql: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CatResolver],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply((req, res, next) => {
        console.log('huh');

        next();
      })
      .forRoutes('*');
  }
}
