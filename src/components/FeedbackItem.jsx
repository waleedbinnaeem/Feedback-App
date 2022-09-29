import { FaTimes } from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card'

function FeedbackItem(props) {
  const {item, handleDelete} = props
  const {rating, id, text} = item
  return (
    <Card>
        <div className='num-display'>{rating}</div>
        <button onClick={() => handleDelete(id)} className="close">
          <FaTimes color='purple' />
        </button>
        <div className='text-display'> {text}</div>
    </Card>  
  )
}

export default FeedbackItem