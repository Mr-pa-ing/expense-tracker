import React, { useContext } from 'react'
import Transcation from './Transcation'
import { GlobalContext } from '../context/GlobalContext'


const TranscationList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
    <h3>History</h3>
     <ul className="list">
     {
       transactions.map(transaction => (
         <Transcation  key={transaction.id} transcation={transaction} />
       ))
     }
     </ul>
    </>
  )
}

export default TranscationList
