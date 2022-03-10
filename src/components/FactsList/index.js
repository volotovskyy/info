import React, { useEffect } from 'react'
import axios from 'axios'

import { useFingerprint } from '../../hooks'
import { Fact } from './Fact'

const fact = {
  title: "В Украине не война, а n\"спецоперацияn\"",
  text: "Российские власти избегают слова n\"войнаn\" и запрещают его. За использование слова n\"войнаn\" сейчас можно получить реальный срок. Если называть это n\"спецоперациейn\", а не войной - не так страшно",
  vote: "up",
  up: 13345,
  down: 345
}

export const FactsList = () => {

  const fingerprint = useFingerprint()
  
  useEffect(() => {
    const getPublishedFacts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/list/published');
        console.log('response', response);
      } catch (error) {
        console.error(error);
      }
    }
    getPublishedFacts()
  }, [])
  

  console.log('context fingerprint', fingerprint)
  return (
    <div className="section">
        <Fact fact={fact} defaultExpanded="true" />
        <Fact fact={fact} />
    </div>
  )
}