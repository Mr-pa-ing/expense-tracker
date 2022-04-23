import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { FaTrash } from 'react-icons/fa'

const Transcation = ({ transcation }) => {
  const sign = transcation.amount < 0 ? '-' : '+';

  const { deleteTransaction } = useContext(GlobalContext);
  
  return (
    <li className={transcation.amount < 0 ? 'minus' : 'plus'}>
      {transcation.text} <span>{sign}${Math.abs(transcation.amount)}</span>
      <button onClick={() => deleteTransaction(transcation.id)} className="delete-btn"><FaTrash/></button>
    </li>
  )
}

export default Transcation
