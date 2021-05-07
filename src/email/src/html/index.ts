/// <style path="./index.css" />

import { Component, template } from '@elements/application';
import Template from './template';

export interface I<%= capitalCaseName %>Email {
  [key: string]: any;
}

@template(Template)
export default class <%= capitalCaseName %>Email extends Component {
}
