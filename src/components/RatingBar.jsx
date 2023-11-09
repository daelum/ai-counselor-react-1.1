import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

export default function RatingBar() {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  console.log(rating)
  return (
    <div className="my-3">
      {[...Array(5)].map((star, i) => {
        const currentRating = i + 1
        return (
          <label>
            <input
              style={{ display: 'none' }}
              onClick={() => setRating(currentRating)}
              type="radio"
              name="rating"
              value={currentRating}
            />
            <FaStar
              className="star"
              style={{ cursor: 'pointer' }}
              size={25}
              color={currentRating <= (hover || rating) ? '#ffc107' : '#e8e9eb'}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        )
      })}
      <span className="fw-bold ms-2">{rating} Stars</span>
    </div>
  )
}
