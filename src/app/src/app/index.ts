import { Application, IRequest } from '@elements/application';
import ReactRenderEngine from '@elements/application/render/react';

// create the elements application.
let app = new Application();
export default app;

// render react pages.
app.addRenderEngine(new ReactRenderEngine());

// server only code.
app.server(require('./server'));
