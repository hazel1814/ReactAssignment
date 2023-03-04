import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28)
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 295
    const LocationOfExpenditure = 'Bangalore'

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle } { LocationOfExpenditure}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>

    )
}
export default ExpenseItem