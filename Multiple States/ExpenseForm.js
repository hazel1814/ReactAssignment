import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState()
    const [enteredAmount, setEnteredAmount] = useState()
    const [enteredDate, setEnteredDate] = useState()

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    return (

        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>{enteredTitle && enteredTitle !== '' ? enteredTitle : "Title"}</label>
                    <input type='text' onChange={titleChangeHandler} />

                    <label>{enteredAmount && enteredAmount !== '' ? enteredAmount : "Amount"}</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
                    
                    <label>{enteredDate && enteredDate !== '' ? enteredDate : "Date"}</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm