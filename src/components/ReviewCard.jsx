import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ReviewCard() {
  const [reviews, setReviews] = useState([])
  // const [name, setName] = useState([])

  //   FETCH REVIEWS FROM USER
  useEffect(() => {
    // Fetch REVIEW data from the API when the component mounts
    const fetchReview = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/reviews')
        console.log(data)
        setReviews(data)
        // setName(data.name)
      } catch (err) {
        console.log(err)
      }
    }
    fetchReview()
  }, [])

  if (!reviews) {
    return null
  }

  return (
    <>
      {reviews.map((review, i) => (
        <form key={i} className="card-body bg-light">
          <h5 className="card-title">{review.name}</h5>
          <p className="card-text">{review.review}</p>
          <div>Reviews</div>
        </form>
      ))}
    </>
  )
}
