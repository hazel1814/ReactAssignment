import ExpenseItem from "./Components/ExpenseItem";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: 'Bangalore',
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), LocationOfExpenditure: 'Delhi', },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: 'Chennai',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: 'Mumbai',
    },
  ];
  return (
    <div>
      {/* <ExpenseItem title={expenses[0].title} 
      amount={expenses[0].amount} 
      date={expenses[0].date}
      location={expenses[0].LocationOfExpenditure}>
      </ExpenseItem> */}

      {expenses.map(expense => (
        <ExpenseItem title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.LocationOfExpenditure}>
        </ExpenseItem>
      ))}

    </div>
  );
}

export default App;
