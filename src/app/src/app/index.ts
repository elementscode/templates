import { Application, IRequest } from '@elements/application';

// create the elements application
let app = new Application();
export default app;

// server only code goes in ./server.ts
app.server(require('./server'));
