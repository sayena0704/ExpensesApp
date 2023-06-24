import React, { useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    const [EnteredTitle , setEnteredTitle] = useState('');
    const [EnteredAmount , setEnteredAmount] = useState('');
    const [Entereddate , setEntereddate] = useState('');

    //array or object
//    const [userInput, setUserInput] = useState({
//         EnterdTitle: '',
//         EnteredAmount: '',
//         Entereddate: ''
//     });

    const titleChangeHandler = (event) =>{
     setEnteredTitle(event.target.value);

    // isme prev state  mai result in an incorrect state snapshot

    // setUserInput({
    //     ...userInput,
    //     EnterdTitle: EventTarget.target.value,
    // });


    // latest state snapshot using prevState
        // setUserInput((prevState)=>{
        //   return { ...prevState, EnterdTitle: event.target.value};
        // });
    };

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     EnteredAmount: EventTarget.target.value,
        // });

        // setUserInput((prevState)=>{
        //     return { ...prevState, EnteredAmount: event.target.value};
        //   });
    };

    const dateChangeHandler = (event) =>{
        setEntereddate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     Entereddate: EventTarget.target.value,
        // });

        // setUserInput((prevState)=>{
        //     return { ...prevState, Entereddate: event.target.value};
        //   });
    };

    const submitHandler = (event) =>{
       event.preventDefault();  //we can prevent the default when this request is sent

       const expenseData = {
        title: EnteredTitle,
        amount: +EnteredAmount,
        date: new Date(Entereddate)
       };

       props.onSaveExpenseData(expenseData);
    //    ek baar enter karne k baad form ma jaise hi add expense karenge firse normal khali form aa jayega (TWO WAY BINDING)
       setEnteredTitle('');
       setEnteredAmount('');
       setEntereddate('');
    };
  return(
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
     <div className="new-expense__control">
        <label>Title</label>
      {/* value prop is added as EnteredTitle,EnteredAmount Entereddate  */}
        <input type ='text' value={EnteredTitle} onChange={titleChangeHandler}/>
     </div>
     <div className="new-expense__control">
        <label>Amount</label>
        <input type ='number' min="0.01" step="0.01" value={EnteredAmount} onChange={amountChangeHandler}/>    
     </div>
     <div className="new-expense__control">
        <label>Date</label>
        <input type ='date' min="2019-01-01" max="2022-12-31" value={Entereddate} onChange={dateChangeHandler}/>
     </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
  </form>
  );
};

export default ExpenseForm;