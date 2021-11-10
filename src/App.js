import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const {depositMoney, withdrawMonay} = bindActionCreators(actionCreators, dispatch)


  console.log(depositMoney)
  return <div className="App">
    <h1>{account}</h1>
    <button onClick={() => depositMoney(1000)}>Deposit</button>
    <button onClick={() => withdrawMonay(1000)}>Withdraw</button>
  </div>;
}

export default App;
