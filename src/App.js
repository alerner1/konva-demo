import { Stage, Layer, Line } from 'react-konva';

function App() {
  return (
    <div style={{paddingLeft: '30px', paddingTop: '30px'}}>
    <Stage width={100} height={100}>
      <Layer>
        <Line closed points={[0, 100, 100, 100, 0, 0]} fill="red" stroke="black" strokeWidth={1} />
      </Layer>
    </Stage>
    </div>
  );
}

export default App;
