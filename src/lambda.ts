import { AppModule } from './app.module';
import { bootstrapServer } from './utils/bootstrap-server';

exports.handler = async (event, context) => {
  return await bootstrapServer(AppModule, event, context);
};
