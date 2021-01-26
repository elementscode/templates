import { Router, IRequest } from '@elements/application';

let router = new Router();
export default router;

router.page('/', async function(this: IRequest) {
  /**
   * Example:
   *
   *  this.title('Home');
   *  this.description('A fast web dev toolkit.');
   *  this.meta({ name: 'descrition', content: '...' });
   *  this.render('app/pages/home', { data });
   */
});
