import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const navigateToLogin = () => {
    navigate('/Login')
  }

  const navigateToHome = () => {
    navigate('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formInfo = { name, phone, email, password }
    console.log(formInfo)
    try {
      const response = await axios.post(
        'http://localhost:4000/SignUp',
        formInfo
      )
      console.log(response)
      if (response) {
        navigateToProfile()
      }
    } catch (err) {
      console.log(err)
    }
  }

  const navigateToProfile = () => {
    navigate('/Profile')
  }

  return (
    <>
      <section style={{ backgroundColor: '#1791a3' }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-75">
            <div className="row d-flex justify-content-center align-items-center h-75 my-5">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div
                  className="card"
                  style={{ borderRadius: '15px', backgroundColor: '#e1eaf7' }}
                >
                  <div className="d-flex justify-content-end px-2 pt-2">
                    <button
                      onClick={navigateToHome}
                      className="btn btn-sm btn-outline-dark bg-light fw-bold"
                    >
                      X
                    </button>
                  </div>
                  <div className="card-body pt-0 px-4 pb-4">
                    <h2 className="text-uppercase text-center mb-3">
                      Create an account
                    </h2>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-2 mt-2">
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-md"
                        />
                        <label className="form-label" for="form3Example1cg">
                          Full Name
                        </label>
                      </div>

                      <div className="form-outline mb-3">
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-md"
                        />
                        <label className="form-label" for="form3Example3cg">
                          Email
                        </label>
                      </div>
                      <div className="form-outline mb-3">
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          type="number"
                          className="form-control form-control-md"
                        />
                        <label className="form-label" for="form3Example1cg">
                          Phone Number
                        </label>
                      </div>
                      <div className="form-outline mb-3">
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-md"
                        />
                        <label className="form-label" for="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-3">
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-md"
                        />
                        <label className="form-label" for="form3Example4cdg">
                          Repeat your password
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-4">
                        <input
                          required
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          for="form2Example3g"
                        >
                          Agree to{' '}
                          <a href="" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mb-3">
                        <button
                          className="btn btn-success btn-lg btn-block"
                          type="submit"
                        >
                          Signup
                        </button>
                      </div>

                      <p className="text-center text-muted">
                        Have already an account?{' '}
                        <a href="" className="fw-bold text-body">
                          <u onClick={navigateToLogin} to="/Login">
                            Login here
                          </u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
