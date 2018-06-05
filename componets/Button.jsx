import React from 'react';

class Button extends React.Component {
  constructor() {
    super();

    this.state = { disabled: false };
    this.handClick = this.handClick.bind(this);
  }

  handClick() {
    if (this.state.disabled) { return }
    if (this.props.onClick) { this.props.onClick() }
    this.setState({ disabled: true });
    setTimeout(() => {this.setState({ disabled: false })}, 200);
  }

  render() {
    return (
      <button className="my-button" onClick={this.handClick}>{this.props.children}</button>
    );
  }
};

export default Button;