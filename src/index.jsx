import React, { Component } from 'react';
import Test from 'components/test';
export default class App extends Component {
    state = { count: 0 }
    click() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return <div><Test text="12345"/><div className="hello">123</div><s>{this.state.count}</s><b>{this.props.count}</b><button onClick={this.click.bind(this)}>add</button></div>
    }
}