import React from 'react'
import { ScoreProvider } from '../context/score'

export default function layout({ children }) {
  return (
    <div>
       <ScoreProvider>{children}</ScoreProvider>
    </div>
  )
}
