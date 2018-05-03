import * as React from "react";
import PixiContext from "./PixiContext";
import { IContextProps } from "./PixiContext";

function WithPixi<P>(
  Klass: React.ComponentType<P & IContextProps>
): React.ComponentType<P> {
  return (props: P) => (
    <PixiContext.Consumer>
      {(ctx: IContextProps) => <Klass {...props} parent={ctx.parent} />}
    </PixiContext.Consumer>
  );
}

export default WithPixi;
