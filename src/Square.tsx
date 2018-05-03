import * as PIXI from "pixi.js";
import PixiComponent from "./PixiComponent";
import WithPixi from "./WithPixi";

interface IProps {
  x: number;
  y: number;
}

class Square extends PixiComponent<IProps, {}> {
  private graphics: PIXI.Graphics = new PIXI.Graphics();

  public componentDidMount() {
    const { parent, x, y } = this.props;

    this.graphics.clear();
    this.graphics.lineStyle(2, 0xffffff, 1);
    this.graphics.beginFill(0xff700b, 1);
    this.graphics.drawRect(-25, -25, 50, 50);
    this.graphics.x = x;
    this.graphics.y = y;

    parent.addChild(this.graphics);
  }

  public componentWillUnmount() {
    const { parent } = this.props;

    parent.removeChild(this.graphics);
  }
}

export default WithPixi<IProps>(Square);
