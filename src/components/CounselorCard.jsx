import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function CounselorCard() {
  const [counselors, setCounselors] = useState([])

  useEffect(() => {
    const fetchCounselors = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/profile')
        setCounselors(data.counselors)
      } catch (err) {
        console.log(err)
      }
    }
    fetchCounselors()
  }, [])

  const handleDeleteCounselor = async (counselorId) => {
    try {
      // Send DELETE request to delete counselor route
      await axios.delete(`http://localhost:4000/profile/${counselorId}`)
      // Remove the deleted counselor from the state
      setCounselors((prevCounselors) =>
        prevCounselors.filter((counselor) => counselor._id !== counselorId)
      )
    } catch (err) {
      console.log(err)
    }
  }

  const image = (element) => element.topic.replace(/\s/g, '-').toLowerCase()

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
      {counselors.map((element, i) => (
        <div className="col" key={i}>
          <div
            className="card shadow-lg border-black"
            style={{ borderRadius: '.5rem' }}
          >
            <div className="bg-image">
              <img
                src={`/images/${image(element)}.jpg`}
                className="img-fluid"
                alt=""
              />
            </div>
            <div style={{ backgroundColor: '#d1d9e6' }} className="card-body">
              <h5 className="card-title text-center mb-3">{element.topic}</h5>
              <div className="d-flex justify-content-evenly">
                <a
                  href={'/chat/' + element._id}
                  className="btn btn-success me-4"
                >
                  Start Session
                </a>
                <button
                  className="btn btn-danger ms-4"
                  onClick={() => handleDeleteCounselor(element._id)}
                >
                  Delete Counselor
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
