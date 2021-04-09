/// <style path="./index.css"/>
import * as React from 'react';

export interface I{{capitalCaseName}}Email {
  [key: string]: any;
}

export default class {{capitalCaseName}}Email extends React.Component<I{{capitalCaseName}}Email, I{{capitalCaseName}}Email> {
  constructor(props: I{{capitalCaseName}}Email) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div>
        <h1>{{titleCaseName}} Email</h1>
      </div>
    );
  }
}
