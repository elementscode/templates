/// <style path="./index.css"/>
import * as React from 'react';

export interface I{{capitalCaseName}} {
  [key: string]: any;
}

export class {{capitalCaseName}} extends React.Component<I{{capitalCaseName}}, I{{capitalCaseName}}> {
  constructor(props: I{{capitalCaseName}}) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="{{dashCaseName}}">
        {this.props.children}
      </div>
    );
  }
}
