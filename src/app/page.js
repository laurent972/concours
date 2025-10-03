"use client";
import Image from "next/image";
import BlocQuestion from "../components/BlocQuestion";
import { use, useContext, useEffect, useState } from "react";
import axios from "axios";
import { scoreContext } from "./context/score";
import Question from "@/components/Question";

export default function Home() {
  const [data, setData] = useState(null);
  const { score } = useContext(scoreContext);

  const [oneQuestion, setOneQuestion] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    axios.get("/data/dataTest.json").then((response) => {
      setData(response.data);
      // console.log(response.data);
    });
  }, []);

  useEffect(() => {
    if (data) {
      setOneQuestion(data[currentIndex]);
    }
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const datas = { ...oneQuestion, clear };

  return (
    <div className="font-sans  min-h-screen px-8">
      <main className="block ">
        <header className="h-[10vh] sticky top-0 left-0 w-full bg-white/90 backdrop-blur-md p-2 sm:p-5 border-b border-gray-200 z-10 ">
          <h1 className="text-4xl font-bold text-center  container">
            Question à choix - {data.length} questions. Score : {score} /{" "}
            {data.length}
          </h1>
          <p className="text-lg text-center ">
            Ceci est une application de quiz à choix multiple (QCM) développée
            avec Next.js et Tailwind CSS.
          </p>
        </header>
        {/* <div className="text-center mx-auto container h-[80vh] ">
          {data.map((question, id) => {
            const datas = { ...question, id };
            return <BlocQuestion key={id} {...datas} />;
          })}
        </div> */}
        <div className="text-center mx-auto container h-[80vh] ">
          {oneQuestion ? <Question {...datas} /> : "Loading..."}
        </div>
        <button
          onClick={() => {
            if (currentIndex < data.length - 1) {
              setCurrentIndex(currentIndex + 1);
              setOneQuestion(data[currentIndex + 1]);
              setClear(!clear);
            }
          }}
          className={`rounded-lg bg-blue-700 border border-s-blue-800 text-blue-100 px-4 py-2 mt-4 cursor-pointer w-[100px] mx-auto hover:bg-blue-400 `}
        >
          NEXT
        </button>
      </main>
    </div>
  );
}
