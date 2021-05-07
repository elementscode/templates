/// <style path="./index.css" />

import { Component, template } from '@elements/application';
import Template from './template';

export interface I<%= capitalCaseName %> {
  [key: string]: any;
}

@template(Template)
export class <%= capitalCaseName %> extends Component {
}
