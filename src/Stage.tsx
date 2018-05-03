import * as PIXI from "pixi.js";
import { Component } from "react";
import * as React from "react";
import PixiContext from "./PixiContext";

interface IProps {
  width: number;
  height: number;
}

class Stage extends Component<IProps> {
  private application: PIXI.Application;

  constructor(props: IProps) {
    super(props);

    const { width, height } = this.props;

    this.application = new PIXI.Application({ width, height, antialias: true });
  }

  public render() {
    return (
      <PixiContext.Provider value={this.pixiContext}>
        <div ref={this.onRef} />
        {this.props.children}
      </PixiContext.Provider>
    );
  }

  private get pixiContext() {
    return {
      parent: this.application.stage
    };
  }

  private onRef = (ref: HTMLDivElement) => {
    ref.appendChild(this.application.view);
  };
}

export default Stage;
