import WithSocials from '../components/WithSocials'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/')
  }

  const navigateToProfile = () => {
    navigate('/profile')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formInfo = { email, password }
    try {
      const response = await axios.post('http://localhost:4000/login', formInfo)
      console.log(response)
      if (response.data !== 'Invalid Email/Password!') {
        navigateToProfile()
      } else {
        console.log(response.data)
        setErrorMessage(response.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: '#1791a3' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-5-strong"
                style={{ borderRadius: '1rem', backgroundColor: '#e1eaf7' }}
              >
                <div className="d-flex justify-content-end">
                  <button
                    onClick={navigateToHome}
                    className="btn btn-sm btn-outline-dark bg-light fw-bold mt-2 me-3"
                  >
                    X
                  </button>
                </div>
                <div className="card-body pt-0  text-center">
                  <h3 className="mb-4">Login</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-3">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typeEmailX-2">
                        Email
                      </label>
                    </div>

                    <div className="form-outline mb-3">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="typePasswordX-2">
                        Password
                      </label>
                    </div>

                    {/* <!-- Checkbox --> */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label className="form-check-label" for="form1Example3">
                        {' '}
                        Remember password{' '}
                      </label>
                    </div>
                    {errorMessage ? (
                      <div
                        className="text mt-2 ms-2"
                        style={{ color: 'red', fontSize: '13px' }}
                      >
                        {errorMessage}
                      </div>
                    ) : (
                      navigateToProfile
                    )}
                    <button
                      className="btn btn-success btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                  <hr className="my-4" />
                  <WithSocials />
                  {/* <button
                    className="btn btn-lg btn-block btn-primary mb-4"
                    style={{ backgroundColor: '#dd4b39' }}
                    type="submit"
                  >
                    <i className="fab fa-google me-2"></i> Login with Google
                  </button>
                  <button
                    className="btn btn-lg btn-block mb-2 text-light"
                    style={{ backgroundColor: '#3b5998' }}
                    type="submit"
                  >
                    <i className="fab fa-facebook-f me-2"></i>Login with
                    Facebook
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
