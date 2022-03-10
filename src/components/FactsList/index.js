import React from 'react'

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

  console.log('context fingerprint', fingerprint)
  return (
    <div className="section">
        <Fact fact={fact} defaultExpanded="true" />
        <Fact fact={fact} />
    </div>
  )
}