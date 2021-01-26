import { Config } from '@elements/application';

export default Config.create((config: Config) => {
  // example:
  //   config.set('key.path', 'value');
  //   config.set('db.database', config.is('dev') ? 'dev' : 'prod');
});
