import { Component } from "react";
import { IContextProps } from "./PixiContext";

class PixiComponent<P, S = {}> extends Component<P & IContextProps, S> {
  public render() {
    const { children } = this.props;
    if (children) {
      return children;
    }

    return null;
  }
}

export default PixiComponent;
