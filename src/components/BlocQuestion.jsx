import { scoreContext } from '@/app/context/score';
import React, { useContext, useState } from 'react'

export default function BlocQuestion( {...props }) {
    //console.log(props);
    
    const question = props.question;
    const id = props.id;
    const goodAnswer = props.reponse_correcte;
    const array = Object.entries(props.propositions);
    const [answer, setAnswer] = useState([]);
    const [answered, setAnswered] = useState(false);
    const [goodAnswerState, setGoodAnswerState] = useState(null);
    const [message, setMessage] = useState("");
    const {score, setScore} = useContext(scoreContext);
  

    const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(answer , goodAnswer);
    setAnswered(true);


      answer.every((ans) => {
        if (goodAnswer.includes(ans) && answer.length === goodAnswer.length) {
          setMessage("Bonne réponse !");
          setScore(score + 1);
          setGoodAnswerState(true);
        } else {
          
          setGoodAnswerState(false);
          setMessage("Mauvaise réponse !");
        }
           
      });
   
      
  };



  return (
    <>
      <div id={id} className="bloc-question py-50 flex flex-col">
        <h2 className='text-2xl font-bold text-gray-700 pb-2'>{question}</h2>
        <form id={question} onSubmit={handleSubmit}>
          {
              array.map((key,id) => (
                <div key={id} className='flex gap-2'>
                  {goodAnswer.length > 1 ? 
                    <input id={key[0] + key[1]}  className="hidden peer" type="checkbox" name='absw' value={key[0]} onChange={e => setAnswer([...answer,(e.target.value)])} disabled={answered}/> 
                     :
                     <input id={key[0] + key[1]}  className="hidden peer" type="radio" name='reponse' value={key[0]} onChange={e => setAnswer([...answer,(e.target.value)])} disabled={answered}/> 
                  } 
                      <label htmlFor={key[0] + key[1]}  
                          className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 
                              ${goodAnswerState  && "peer-checked:text-green-600 peer-checked:border-green-600"}
                              ${goodAnswerState === false  && "peer-checked:text-red-600 peer-checked:border-red-600"}
                              ${!goodAnswer.every(ans => ans  != key[0]) && goodAnswerState === false && ' text-green-600 border-green-600'}
                            `}>
                        <p className="block">
                          {key[1]}
                          </p>
                      </label>
                  </div>
              ))
           }
             
             <button className={` px-4 py-2 mt-4 ${answered ? " border border-solid border-gray-300 bg-gray-200 text-gray-400": "border border-solid border-black cursor-pointer" } `} disabled={answered}>
              Valider
            </button>
          </form>
           <div className={`mt-2 block bg-blue-50 p-6 border border-solid border-blue-100 w-full text-left ${ answered ? 'block' : 'hidden'}`}> 
            <p className='font-bold text-2xl'>{message}</p>
            <p>Réponse(s): {goodAnswer} </p>
            <strong>Explication :</strong> {props.explication}
          </div> 
            <button 
            onClick={() => {
              const nextId = document.getElementById(id+1)
              nextId.scrollIntoView({behavior:"smooth"})
            }}
            className={`border border-gray-400 text-gray-400 px-4 py-2 mt-4 cursor-pointer w-[100px] mx-auto ${ answered ? 'block' : 'hidden'}`}
            >NEXT</button>
            
          
      </div>  
     
    </>
  )
}
