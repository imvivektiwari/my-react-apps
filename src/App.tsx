import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { trelloBoardAction } from "./features/trelloBoard.slice";

function App() {
  const trelloBoard = useSelector((state: any) => state.trelloBoard);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => console.log('cleaup');
  }, []);

  return (
    <div className="App">
      <p>{trelloBoard.count}</p>
      <button onClick={() => dispatch(trelloBoardAction.addCount(5))}>Add</button>
      <button onClick={() => dispatch(trelloBoardAction.decCount(5))}>minus</button>
    </div>
  );
}

export default App;
