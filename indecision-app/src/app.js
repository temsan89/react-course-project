
let count = 0;

const addOne = () => {
    count++;
    showCount();
    renderCount();
};

const minusOne = () => {
    count--;
    showCount()
    renderCount();
};

const reset = () => {
    count = 0;
    showCount();
    renderCount();
};

const showCount = () => {
    console.log(`count: ${count}`);
};

const btnOne = document.getElementById('btnOne');


const renderCount = () => {

    const templatebtnOne = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>First button</button>
            <button onClick={minusOne}>Second button</button>
            <button onClick={reset}>Reset button</button>
        </div>
    );

    ReactDOM.render(templatebtnOne, btnOne);

};

renderCount();