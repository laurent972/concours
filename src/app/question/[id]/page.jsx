'use client';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import Link from 'next/link';
import axios from 'axios';
import BlocQuestion from '@/components/BlocQuestion';
import Question from '@/components/Question';
import Loading from '@/components/Loading';
import { scoreContext } from '../../context/score';



export default function QuestionPage() {
const {id} = useParams();
const nextQuestionId = parseInt(id)+1;
const [question, setQuestion] = useState(null);
const [data, setData] = useState();
const {score} = useContext(scoreContext)

console.log(score);



useEffect(() => {
  console.log("Current question ID:", id);
  axios.get('/data/dataTest.json').then((response) => {
   const questions = response.data;
   setData(questions)
   const currentQuestion = questions.find((q) => q.id == id)
   setQuestion(currentQuestion);
  });

}, [id]);



  return (
    <div>
        {question ?
       
          <div className="container mx-auto p-5 h-[80vh] overflow-hidden">
            <h1 className="text-4xl font-bold text-center sm:text-left">
              Question à choix - {data.length} questions. Score : {score} /{" "}
              {data.length}
            </h1>
            <Question  {...question} />
         </div>
       
        : <Loading /> 
        
        }


    </div>
  )
}
