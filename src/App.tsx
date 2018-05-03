import * as React from "react";

import Circle from "./Circle";
import Container from "./Container";
import Square from "./Square";
import Stage from "./Stage";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Stage width={800} height={600}>
          <Container x={500} y={400} rotation={Math.PI / 2 + 10}>
            <Circle x={-50} y={0} />
            <Circle x={50} y={0} />
          </Container>
          <Square x={100} y={100} />
          <Square x={200} y={100} />
          <Square x={100} y={200} />
        </Stage>
      </div>
    );
  }
}

export default App;
