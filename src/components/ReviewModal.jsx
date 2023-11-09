import React from 'react'
import RatingBar from './RatingBar'
import { useState } from 'react'
import axios from 'axios'

const modalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#b9c7d2',
  padding: '20px',
  zIndex: 1000,
  width: '50%',
}

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#00000080',
  zIndex: 1000,
}

export default function ReviewModal({ open, onClose }) {
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const info = {
      content,
    }
    try {
      const response = await axios.post('http://localhost:4000/reviews', info)
      console.log(response)
      onClose()
    } catch (err) {
      console.log(err)
    }
  }

  if (!open) return null
  return (
    <div className="my-3">
      <div style={overlayStyle}>
        <div style={modalStyles}>
          <div className="pb-1">
            <button className="mb-2" onClick={onClose}>
              X
            </button>
            <form onSubmit={handleSubmit}>
              <div className="input-group d-flex">
                <textarea
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  rows="5"
                  className="form-control-lg rounded col-12"
                  aria-label="With textarea"
                  placeholder="Leave us a review..."
                  // onChange={(e) => setAddDescription(e.target.value)}
                  // value={addDescription}
                ></textarea>
              </div>
              <RatingBar />
              <div className="mt-3">
                <button type="submit" className="btn btn-success">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
