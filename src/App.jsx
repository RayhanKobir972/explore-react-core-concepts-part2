import './App.css'
import Friends from './Friends';
import Team from './Team';
import Users from './Users';
import Counter from './counter';

function App() {

  function handleClick(){
    alert('Button Clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
    return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => {alert("Button Two Clicked")}}>Click 2</button>
      <button onClick={() => addToFive(3)}>sum</button>
    </>
  )
}

export default App
