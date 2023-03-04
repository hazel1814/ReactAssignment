import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './ExpenseItem.css'

function ExpenseItem(props) {
    
    return (
        <div className='expense-item'>
           <ExpenseDate date={props.date} />
            {/* <div className='expense-item__description'>
                <h2>{props.title} {props.location}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div> */}
            <ExpenseDetails amount={props.amount} />
        </div>

    )
}
export default ExpenseItem