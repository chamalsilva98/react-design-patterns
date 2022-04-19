const Counter = (() => {
    let instance;

    class Counter {
        #countVal;

        constructor() {
            this.#countVal = 0;
        }

        get count() {
            return this.#countVal;
        }

        set setCount(countVal) {
            this.#countVal = countVal;
        }

        increaseByOne() {
            this.#countVal += 1;
        }

        decreaseByOne() {
            this.#countVal -= 1;
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = new Counter();
                Object.preventExtensions(instance);
            }
            return instance;
        },
    };
})();

export default Counter;
