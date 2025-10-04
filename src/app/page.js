"use client";
import Image from "next/image";
import BlocQuestion from "../components/BlocQuestion";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { scoreContext } from "./context/score";

export default function Home() {
  const [data, setData] = useState(null);
  const { score } = useContext(scoreContext);

  useEffect(() => {
    axios.get("/data/dataTest.json").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-sans  min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="block gap-[32px] row-start-2  sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Question à choix - {data.length} questions. Score : {score} /{" "}
          {data.length}
        </h1>
        <p className="text-lg text-center sm:text-left">
          Ceci est une application de quiz à choix multiple (QCM) développée
          avec Next.js et Tailwind CSS.
        </p>
        <div className="text-center mx-auto container p-5 h-[80vh] overflow-hidden">
          {data.map((question, id) => {
            const datas = { ...question, id };
            return <BlocQuestion key={id} {...datas} />;
          })}
        </div>
      </main>
    </div>
  );
}
