import React from 'react';

export class MyContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      importantValue: "Loading Important Data..."
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ importantValue: "The important data is loaded!" });
    }, 2000);
  }

  render() {
    return this.props.children({ foo: this.props.foo, importantValue: this.state.importantValue });
  }
}