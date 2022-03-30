const Component = ({ title, increaseCounter, decreaseCounter }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className="container">
                <button onClick={decreaseCounter()}>-</button>
                <button onClick={increaseCounter()}>+</button>
            </div>
        </div>
    );
};

export default Component;
