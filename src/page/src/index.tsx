/// <style path="./index.css"/>
import * as React from 'react';
import { I{{capitalCaseName}}Page } from './types';

export default class {{capitalCaseName}}Page extends React.Component<I{{capitalCaseName}}Page, I{{capitalCaseName}}Page> {
  constructor(props: I{{capitalCaseName}}Page) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="{{dashCaseName}}-page">
        <h1>{{titleCaseName}}</h1>
      </div>
    );
  }
}
