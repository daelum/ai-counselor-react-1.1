import { useNavigate } from 'react-router-dom'
import CounselorCard from '../components/CounselorCard'
import EditProfile from '../components/EditProfile'
import { useState } from 'react'
import ReviewModal from '../components/ReviewModal'
import axios from 'axios'
import { useEffect } from 'react'

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false)
  const [openReview, setOpenReview] = useState(false)
  const [user, setUser] = useState('')

  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/')
  }

  const navigateToCreateCounselor = () => {
    navigate('/create-counselor')
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.get('http://localhost:4000/logout')
      console.log(response)
      if (response) {
        navigateToHome()
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    // Fetch USER data from the API when the component mounts
    const fetchUser = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/profile')
        console.log(data.counselors)
        setUser(data.user)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUser()
  }, [])

  return (
    <>
      <div style={{ backgroundColor: '#00d1cd' }}>
        <div className="d-flex justify-content-between p-2">
          <div className="d-flex justify-content-center">
            <button
              onClick={() => setOpenReview(true)}
              className="btn btn-success m-2"
            >
              Leave Review
            </button>
            <ReviewModal
              open={openReview}
              onClose={() => setOpenReview(false)}
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-danger m-2">
            Logout
          </button>
        </div>
        {/* profile Card */}
        <div className="container pb-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div
                className="card mb-3 shadow-lg"
                style={{ borderRadius: '.5rem' }}
              >
                <div style={{ backgroundColor: '#e1eaf7' }} className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: '.5rem',
                      borderBottomLeftRadius: '.5rem',
                    }}
                  >
                    <img
                      src="https://icons-for-free.com/iconfiles/png/512/add+create+new+profile+user+icon-1320185001431562707.png"
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: '80px' }}
                    />
                    <h5 className="text-dark">{user.name}</h5>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{user.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">{user.phone}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-center">
                        <button
                          onClick={() => setIsOpen(true)}
                          className="btn btn-primary btn-sm"
                        >
                          Edit Profile
                        </button>
                        <EditProfile
                          open={isOpen}
                          onClose={() => setIsOpen(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counselors Section */}
      <div className="pb-3" style={{ backgroundColor: '#444444' }}>
        <div className="d-flex justify-content-center pt-2">
          <img style={{ width: '500px' }} src="counselors-logo.png" alt="" />
        </div>
        <button
          style={{ borderRadius: '50px', backgroundColor: '#00d1cd' }}
          onClick={navigateToCreateCounselor}
          className="btn btn-lg text-light ms-3 mb-5"
          type="button"
        >
          + Add New Counselor
        </button>
        <div className="container">
          <CounselorCard />
        </div>
      </div>
    </>
  )
}
