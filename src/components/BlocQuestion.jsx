import React, { useState } from 'react'

export default function BlocQuestion({...props}) {

    const question = props.question;
    const goodAnswer = props.reponse_correcte;
    const array = Object.entries(props.propositions);
    const [answer, setAnswer] = useState("");
    const [answered, setAnswered] = useState(false);
    const [goodAnswerState, setGoodAnswerState] = useState(null);

    const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    setAnswered(true);
    if (answer.substring(0) === goodAnswer) {
        console.log("Bonne réponse");
        
        setGoodAnswerState(true);
         console.log(goodAnswerState);
    }else { 
      setGoodAnswerState(false);
    }
      
  };



  return (
    <>
      {console.log(goodAnswerState)}
        <div>{question}</div>
        <form id={question} onSubmit={handleSubmit}>
            {array.map((key,id) => (
               <div key={id} className='flex gap-2'>
                    <input id={key[0] + key[1]}  className="hidden peer" type="radio" name='reponse' value={key[0]} onChange={e => setAnswer(e.target.value)} required/>
                    <label htmlFor={key[0] + key[1]}  
                        className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  ${goodAnswerState  && "peer-checked:text-green-600 peer-checked:border-green-600"} ${goodAnswerState === false  && "peer-checked:text-red-600 peer-checked:border-red-600"}` }>
                       <p className="block">
                        {key[1]}
                        </p>
                    </label>
                </div>
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
