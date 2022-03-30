import * as React from "react";
import Component from "./components/Component";
import Counter from "./util/counter";

const counterObj = Counter.getInstance();

const App = () => {
    const { count } = counterObj;
    const [key, setKey] = React.useState();

    const updateCounter = () => setKey(Math.random().toString());

    const increaseCounter = () => () => {
        counterObj.setCount = counterObj.count + 1;
        updateCounter();
    };

    const decreaseCounter = () => () => {
        counterObj.setCount = counterObj.count - 1;
        updateCounter();
    };

    return (
        <div>
            <div className="center">
                <h2>App</h2>
                <div>
                    <h3>Counter State</h3>
                    <p key={key}>Count : {count}</p>
                </div>
            </div>
            <div className="container">
                <Component
                    {...{
                        title: "Component A",
                        increaseCounter,
                        decreaseCounter,
                    }}
                />
                <Component
                    {...{
                        title: "Component B",
                        increaseCounter,
                        decreaseCounter,
                    }}
                />
            </div>
        </div>
    );
};

export default App;
