import { Router, IRequest } from '@elements/application';
import { getHelloWorld } from 'app/services';

let router = new Router();
export default router;

router.page('/', async function(this: IRequest) {
  this.title('Home');
  this.description('');
  this.render('app/pages/home', {
    subtitle: await getHelloWorld()
  });
});
