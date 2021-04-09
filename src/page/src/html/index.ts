import { Component, template } from '@elements/application';
import Template from './template';

export interface I{{capitalCaseName}}Page {
  [key: string]: any;
}

@template(Template)
export default class {{capitalCaseName}}Page extends Component {
}
