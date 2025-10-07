'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import Link from 'next/link';
import axios from 'axios';
import BlocQuestion from '@/components/BlocQuestion';
import Question from '@/components/Question';
import Loading from '@/components/Loading';



export default function QuestionPage() {
const {id} = useParams();
const nextQuestionId = parseInt(id)+1;
const [question, setQuestion] = useState(null);

useEffect(() => {
  console.log("Current question ID:", id);
  axios.get('/data/dataTest.json').then((response) => {
   const questions = response.data;
   const currentQuestion = questions.find((q) => q.id == id)
   setQuestion(currentQuestion);
 
  });

}, [id]);

    console.log(question);

  return (
    <div>

        {question ? <Question  {...question} /> : <Loading />  }

        <Link
          className="p-6 border border-solid border-amber-600"
          href={`/question/${nextQuestionId}`}
        >
          GOOOO !
        </Link>
    </div>
  )
}
