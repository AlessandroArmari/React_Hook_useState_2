import { useState } from "react";

// We could have written instead:  "const App = () => {...}
function App() {
  /*-1-*/ const [counter, setCounter] = useState(0);
  /*-2-*/ const [array, setArray] = useState(["I'm smalllll"]);
  /* 3 */ const [inputValue, setInputValue] = useState();

  const functionToAddArray = () => {
    setArray([...array, " NOW I'M BIGGER "]);
  }; // I will use it later!

  const orderFunction = () => {
    // I will use it later!
    let array = inputValue.split(""); //--->Here I create an array using of all the "numbers" of inputValue! (BUT NOW THEY ARE STRING!)
    array.sort((a, b) => {
      return +a - +b;
    });
    setInputValue(array.join(""));
  };

  return (
    <>
      <h1>Counter</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {/*I could've declared this function above */}
        Click Here!
      </button>
      <div>You've cliccked: {counter} times!</div>
      <br />
      <br />
      <br />
      <h1>Push a new element in an Array</h1>
      <button onClick={functionToAddArray}>Click here to add!</button>
      <div>{array}</div>
      {/* I declared this function above */}
      <br />
      <br />
      <br />
      <h1>Order an element in an Array</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(event) => {
          //---> once I "change" the input this happens!
          setInputValue(event.target.value);
        }}
      />
      <div>{inputValue}</div> {/*the values goes here!*/}
      <button onClick={orderFunction}>Order</button>
    </>
  );
}

export default App;
