import * as PIXI from "pixi.js";
import { createContext } from "react";

export interface IContextProps {
  parent: PIXI.Container;
}

export default createContext<IContextProps>({ parent: new PIXI.Container() });
