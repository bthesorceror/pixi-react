import * as PIXI from "pixi.js";
import * as React from "react";
import PixiComponent from "./PixiComponent";
import PixiContext from "./PixiContext";
import WithPixi from "./WithPixi";

interface IProps {
  x: number;
  y: number;
  rotation: number;
}

class Container extends PixiComponent<IProps> {
  private container = new PIXI.Container();

  public componentDidMount() {
    const { parent, x, y, rotation } = this.props;

    this.container.x = x;
    this.container.y = y;
    this.container.pivot.set(0.5, 0.5);
    this.container.rotation = rotation;

    if (parent) {
      parent.addChild(this.container);
    }
  }

  public componentWillUnmount() {
    const { parent } = this.props;

    if (parent) {
      parent.removeChild(this.container);
    }
  }

  public render() {
    const result = (
      <PixiContext.Provider value={{ parent: this.container }}>
        {this.props.children}
      </PixiContext.Provider>
    );

    return result;
  }
}

export default WithPixi<IProps>(Container);
