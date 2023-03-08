import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense";

function App() {
const addExpenseHandler=(expense)=>{
  console.log(expense)
}
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses />
    </div>
  );
}

export default App;
