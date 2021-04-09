/// <style path="./index.css"/>
import * as React from 'react';

export interface I{{capitalCaseName}}Page {
  [key: string]: any;
}

export default class {{capitalCaseName}}Page extends React.Component<I{{capitalCaseName}}Page, I{{capitalCaseName}}Page> {
  constructor(props: I{{capitalCaseName}}Page) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div>
        <h1>{{titleCaseName}}</h1>
      </div>
    );
  }
}
