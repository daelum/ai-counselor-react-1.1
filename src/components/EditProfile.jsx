import React from 'react'
import { useState } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true

const modalStyles = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '15px',
  zIndex: 1000,
  width: '50%',
  backgroundColor: '#e1eaf7',
}

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#00000080',
  zIndex: 1000,
  overflowY: 'auto',
  display: 'flex',
}

export default function EditProfile({ open, onClose }) {
  const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [photo, setPhoto] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [postcode, setPostcode] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')

  if (!open) return null

  const handleSubmit = async (e) => {
    e.preventDefault()

    alert('test')

    const formInfo = {
      name,
      email,
      photo,
      gender,
      address,
      postcode,
      phone,
      password,
      age,
    }

    const loginInfo = { formInfo }

    try {
      const response = await axios.patch(
        'http://localhost:4000/editprofile',
        formInfo
      )
      console.log(response)
      // log the user in with the updated details
      const updatedLogin = await axios.post(
        'http://localhost:4000/login',
        loginInfo
      )
      if (updatedLogin) {
        onClose()
      } else {
        return null
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="my-3">
      <div style={overlayStyle}>
        <div style={modalStyles}>
          <div className="container rounded bg-white m-0">
            <div className="pt-3">
              <button onClick={onClose}>X</button>
            </div>
            <form onSubmit={handleSubmit} className="row">
              <div className="col-lg-12 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-2">
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  />
                  <a className="far fa-edit mb-5 text-dark"></a>
                </div>
              </div>
              <div className="col-lg-12 border-right">
                <div className="p-3 pb-3">
                  <div className="text-center mb-3">
                    <h4 className="text-right">Edit Your Personal Profile</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-12">
                      <label className="labels">Full Name</label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                    {/* <div className="col-md-12">
                      <label className="labels">Last Name</label>
                      <input
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        required
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                      />
                    </div> */}
                    <div className="col-md-12">
                      <label className="labels">Age</label>
                      <input
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        required
                        type="number"
                        className="form-control"
                        placeholder="Age"
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <label className="labels">Phone Number</label>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        required
                        type="text"
                        className="form-control"
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <label className="labels">Email</label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <label className="labels">Gender</label>
                      <select
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                        className="form-select"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <label className="labels">Password</label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <label className="labels">Address Line 1</label>
                      <input
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        type="text"
                        className="form-control"
                        placeholder="Enter address"
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <label className="labels">Postal code</label>
                      <input
                        onChange={(e) => setPostcode(e.target.value)}
                        value={postcode}
                        type="text"
                        className="form-control"
                        placeholder="Enter postal code"
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter country"
                        // value=""
                        defaultValue=""
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">State/Region</label>
                      <input
                        type="text"
                        className="form-control"
                        // value=""
                        placeholder="state"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <button
                      className="btn btn-primary profile-button"
                      type="submit"
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
