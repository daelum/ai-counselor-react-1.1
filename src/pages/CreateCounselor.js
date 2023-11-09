import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function CreateCounselor() {
  const [topic, setTopic] = useState('')
  const [religion, setReligion] = useState('')
  const [book, setBook] = useState('')
  // const [goals, setGoals] = useState('')

  const navigate = useNavigate()

  const navigateToProfile = () => {
    navigate('/profile')
  }

  // TO BE COMPLETED LINK CREATE COUNSELOR TO API post counselor
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formInfo = {
      topic,
      religion,
      book,
      // goals,
    }
    try {
      const response = await axios.post(
        'http://localhost:4000/counselor',
        formInfo
      )
      console.log(response)
      navigateToProfile()
      return response
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      className="d-flex align-items-center"
      style={{ backgroundColor: '#1791a3', height: '100vh' }}
    >
      <div
        style={{ backgroundColor: '#d1d9e6' }}
        className="d-flex justify-content-center card container p-4 w-50"
      >
        <div className="d-flex justify-content-end">
          <button
            onClick={navigateToProfile}
            className="btn btn-sm btn-outline-dark bg-light fw-bold"
          >
            X
          </button>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <h3>Create Your Personalized Counselor</h3>
        </div>
        <hr className="mb-3" />
        <form onSubmit={handleSubmit}>
          {/* drop down menus */}
          <select
            onChange={(e) => setTopic(e.target.value)}
            value={topic}
            className="form-select my-4"
            aria-label="Default select example"
          >
            <option selected>Choose a Topic</option>
            <option value="Drugs and Alcohol">Drugs and Alcohol</option>
            <option value="Marriage or Relationship Issues">
              Marriage or Relationship Issues
            </option>
            <option value="Health and Wellness">Health and Wellness</option>
            <option value="General">General</option>
          </select>
          <select
            onChange={(e) => setReligion(e.target.value)}
            value={religion}
            className="form-select my-4"
            aria-label="Default select example"
          >
            <option selected>Are you Religious?</option>
            <option value="No">No</option>
            <option value="Christian">Christian</option>
            <option value="Muslim">Muslim</option>
            <option value="Catholic">Catholic</option>
            <option value="Jewish">Jewish</option>
          </select>
          <select
            onChange={(e) => setBook(e.target.value)}
            value={book}
            className="form-select my-4"
            aria-label="Default select example"
          >
            <option selected>Bible Type?</option>
            <option value="Christian Bible">Christian Bible</option>
            <option value="Quran">Quran</option>
            <option value="Catholic Bible">Catholic Bible</option>
            <option value="Torah">Torah</option>
          </select>
          <div className="form-check container mb-5">
            {/* check boxes */}
            <div className="row">
              <div className="col">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Feeling Good?
                </label>
              </div>
              <div className="col">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Feeling Anxious?
                </label>
              </div>
              <div className="col">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Feeling Depressed?
                </label>
              </div>
              <div className="col">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Thoughts of Suicide?
                </label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button onClick={handleSubmit} className="btn btn-success">
              Create New Counselor
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
