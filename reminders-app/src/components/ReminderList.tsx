import React from 'react'
import Reminder from '../models/reminder'

interface ReminderListProps{
    itmes : Reminder[]
}

function ReminderList({itmes}: ReminderListProps) {
  return (
    <ul>
      {itmes.map(item => <li key = {item.id}>{item.title}</li>)}
    </ul>
  )
}

export default ReminderList