import { useState } from "react"

export default function App(){
  const [step,setStep]=useState(1);
  const [count,setCount]=useState(0);

  const currentDate=new Date();
  currentDate.setDate(currentDate.getDate()+count);


  return (
    <div className="container">
      <div className="step">
        <button onClick={()=>step>1 && setStep(step=>step-1)}>-</button>
        <span> Steps : {step} </span>
        <button onClick={()=>setStep(step=>step+1)}>+</button>
      </div>

      <div className="count">
        <button onClick={()=>setCount(count=>count-step)}>-</button>
        <span> Count : {count} </span>
        <button onClick={()=>setCount(count=>count+step)}>+</button>
      </div>

      <div className="text-box">
        <p>{count===0?`Today is `:count>0?`${count} days from today is `:`${Math.abs(count)} days ago was `}{currentDate.toDateString()}</p>
      </div>
    </div>
  )
}