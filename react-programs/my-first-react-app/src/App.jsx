/*import { useState } from "react";

function App() {
  const [appleCount, setAppleCount] = useState(0);

  function addApple() {
    setAppleCount(appleCount + 1);
  }

  function removeApple() {
    if (appleCount > 0) {
      setAppleCount(appleCount - 1);
    }
  }

  function resetApple() {
    setAppleCount(0);
  }

  return (
    <>
      <h1>Apples Count: {appleCount}</h1>

      {appleCount === 0 ? (
        <h2>No Apples are left</h2>
      ) : (
        <h2>Apples are Available</h2>
      )}

      <button onClick={addApple}>Add Apple</button>
      <button onClick={removeApple}>Remove Apple</button>
      <button onClick={resetApple}>Reset</button>
    </>
  );
}

export default App;*/


import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState(0);

  function addRuns(run) {
    if (balls < 12) {
      setScore(score + run);
      setBalls(balls + 1);
    }
  }

  function reset() {
    setScore(0);
    setBalls(0);
  }

  return (
    <>
      <h1>Cricket Score: {score}</h1>
      <h2>
        Overs: {Math.floor(balls / 6)}.{balls % 6}
      </h2>

      <button onClick={() => addRuns(1)}>+1</button>
      <button onClick={() => addRuns(2)}>+2</button>
      <button onClick={() => addRuns(3)}>+3</button>
      <button onClick={() => addRuns(4)}>+4</button>
      <button onClick={() => addRuns(5)}>+5</button>
      <button onClick={() => addRuns(6)}>+6</button>
      <button onClick={() => addRuns(7)}>+7</button>

      <br /><br />

      <button onClick={reset}>Reset</button>

      {balls === 12 && <h2>2 Overs Completed</h2>}
    </>
  );
}

export default App;