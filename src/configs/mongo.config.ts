import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService) =>
  'mongodb+srv://' +
  configService.get('MONGO_LOGIN') +
  ':' +
  configService.get('MONGO_PASSWORD') +
  '@cluster0.rgy53d7.mongodb.net/?retryWrites=true&w=majority';

const getMongoOptions = () => ({
  useNewUrlParser: true,
  //   useCreateIndex: true,
  useUnifiedTopology: true,
});

// mongodb+srv://Admin:<password>@cluster0.rgy53d7.mongodb.net/?retryWrites=true&w=majority

// 'mongodb://' +
//   configService.get('MONGO_LOGIN') +
//   ':' +
//   configService.get('MONGO_PASSWORD') +
//   '@' +
//   configService.get('MONGO_HOST') +
//   ':' +
//   configService.get('MONGO_PORT') +
//   '/' +
//   configService.get('MONGO_AUTH_DATABASE')
