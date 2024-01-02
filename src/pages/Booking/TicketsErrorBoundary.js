import React, { Component } from "react";

class TicketsErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          Something went wrong in the Tickets component. Please try again later.
        </div>
      );
    }

    return this.props.children;
  }
}

export default TicketsErrorBoundary;
