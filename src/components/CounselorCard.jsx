import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function CounselorCard() {
  const [counselor, setCounselor] = useState([])

  //   FETCH COUNSELORS DATA FROM USER.COUNSELORS
  useEffect(() => {
    // Fetch COUNSELOR data from the API when the component mounts
    const fetchCounselors = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/profile')
        setCounselor(data.counselors)
      } catch (err) {
        console.log(err)
      }
    }
    fetchCounselors()
  }, [])

  const image = (element) => element.topic.replace(/\s/g, '-').toLowerCase()

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
      {counselor &&
        counselor.map((element, i) => (
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
                  <button className="btn btn-danger ms-4">
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
