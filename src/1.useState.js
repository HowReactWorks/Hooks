import React, { useState } from 'react';


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick = (count) => {
      this.setState({ count })
  }

  render() {
    return (
      <>
        <div>You clicked {this.state.count} times</div>
        <button onClick={() => this.handleClick(this.state.count + 1)}>Click Me!</button>
      </>
    )
  }
}

// ----------------------------------------------------------------

// export default function App () {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// export default function App () {
//   const countState = useState(0);

//   console.log(countState)

//   return (
//     <div>
//       <p>You clicked {countState[0]} times</p>
//       <button onClick={() => countState[1](countState[0] + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// let value = null

// const customUseState = (initialValue) => {
//   if (value === null) value = initialValue;

//   return [
//     initialValue, (val) => {
//       initialValue = val;
//     }
//   ]
// }

// export default function App () {
//   const [count, setCount] = customUseState(0);
//   const [update, setUpdate] = useState(0)

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => {
//         setCount(count + 1)
//         setUpdate(update + 1)
//         }}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// export default function App () {
//   const [update, setUpdate] = useState(0)
//   let count = 0

//   console.log(update, count)

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => {
//         count = count + 1;
//         setUpdate(update + 1)
//       }}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// export default function App () {
//   const [update, setUpdate] = useState(0)
  
//   return (
//     <Child setUpdate={() => setUpdate(update + 1)}/>
//   )
// }

// const Child = (props) => {
//   let count = 0;
  
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => {
//         count = count + 1;
//         props.setUpdate()
//       }}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// let count = 0
// export default function App () {
//   const [update, setUpdate] = useState(0)

//   console.log(update, count)

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => {
//         count = count + 1;
//         setUpdate(update + 1)
//       }}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// export default function App () {
//   if (true) {
//     const [count, setCount] = useState(0);
//   }

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// export default function App () {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1)
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={handleClick}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// export default function App () {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount((curCount) => curCount + 1)
//     setCount((curCount) => curCount + 1)
//   }

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={handleClick}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// const getInitialValue = () => {
//   console.log('Render')
//   return Math.round(Math.random() * 5)
// }

// export default function App () {
//   const [count, setCount] = useState(getInitialValue());

//   const handleClick = () => {
//     setCount((curCount) => curCount + 1)
//     setCount((curCount) => curCount + 1)
//   }

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={handleClick}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// const getInitialValue = (value = 5) => {
//   console.log('Render')
//   return Math.round(Math.random() * value)
// }

// export default function App () {
//   const [count, setCount] = useState(() => getInitialValue());
//   // const [count, setCount] = useState(getInitialValue);
//   // const [count, setCount] = useState(() => getInitialValue(10));

//   const handleClick = () => {
//     setCount((curCount) => curCount + 1)
//     setCount((curCount) => curCount + 1)
//     setCount((curCount) => curCount + 1)
//   }

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={handleClick}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// export default function App () {
//   const [state, setState] = useState({
//     test: 'test',
//     count: 1
//   });

//   console.log(state)

//   const handleClick = () => {
//     setState({ age: state + 1 })
//   }

//   return (
//     <div>
//       <p>You clicked {state.count} times</p>
//       <button onClick={handleClick}>
//         Click me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// export default function App () {
//   const [state, setState] = useState({
//     test: 'test',
//     count: 1
//   });

//   console.log(state)

//   const handleClick = () => {
//     setState({ ...state, count: state.count + 1 })
//     // setState((currentState) => ({ ...currentState, count: currentState.count + 1 }))
//   }

//   return (
//     <div>
//       <p>You clicked {state.count} times</p>
//       <button onClick={handleClick}>
//         Click me
//       </button>
//     </div>
//   );
// }