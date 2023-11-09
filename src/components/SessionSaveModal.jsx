import React from 'react'
import { useNavigate } from 'react-router-dom'

const modalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#b9c7d2',
  padding: '25px',
  zIndex: 1000,
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

export default function SessionSaveModal({ open, onClose }) {
  const navigate = useNavigate()

  const navigateToProfile = () => {
    navigate('/profile')
  }

  if (!open) return null
  return (
    <>
      <div style={overlayStyle}>
        <div style={modalStyles}>
          <div>
            <button onClick={onClose}>X</button>
          </div>
          <div className="my-3">
            <span className="fw-bold">
              Would you like to save your counseling session to history?
            </span>
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={navigateToProfile}
              type="submit"
              className="btn btn-success btn-sm me-2"
            >
              Save Chat
            </button>
            <button
              onClick={navigateToProfile}
              className="btn btn-danger btn-sm"
            >
              Do not Save Chat
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
