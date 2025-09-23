import React, { useState } from 'react'

export default function BlocQuestion({...props}) {

    const question = props.question;
    const goodAnswer = props.reponse_correcte;
    const array = Object.entries(props.propositions);
    const [answer, setAnswer] = useState("");
    const [answered, setAnswered] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(answer);
    setAnswered(true);
  
    
  };



  return (
    <>
        <div>{question}</div>
        <form onSubmit={handleSubmit}>
            {array.map((clé,id) => (
               <p key={id} className='flex gap-2'>
                    <label >
                        <input type="radio" name='reponse' value={clé[0]} onChange={e => setAnswer(e.target.value)}/>
                        {clé[1]}
                    </label>
                </p>
            ))}
             <button className="border border-solid border-black px-4 py-2 mt-4">
              Valider
            </button>
          </form>
          <div className={`${ answered ? 'mt-2 d-none block' : 'hidden'}`}> 
            <strong>Explication :</strong> {props.explication}
          </div>
         
    </>
  )
}
