import React, { Component } from "react";

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or perform any other error handling here
    console.error(error);
    console.error(errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render an error message or a fallback UI here
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
