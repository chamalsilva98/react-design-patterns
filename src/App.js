import * as React from "react";
import "./App.css";

function App() {
  const [style, setStyle] = React.useState({});

  const handleChange = () => {
    const randomHeight = (Math.random() * 10000) % (window.innerHeight - 60);
    const randomWidth = (Math.random() * 10000) % (window.innerWidth - 300);
    setStyle({
      transform: `translate(${randomWidth}px,${randomHeight}px)`,
    });
  };

  return (
    <React.Fragment>
      <div className="days-react" style={style} onMouseEnter={handleChange}>
        30 Days of React
      </div>
    </React.Fragment>
  );
}

export default App;
