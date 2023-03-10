import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense";
import { useState } from "react";

function App() {

  const [expense_list, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    // const result=[...expense_list]
    // result.push(expense)
    // setExpenses(result)
    setExpenses(prevExpenses =>{
      
      return [expense,...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses setExpenses={setExpenses} expense_list={expense_list}/>
    </div>
  );
}

export default App;
