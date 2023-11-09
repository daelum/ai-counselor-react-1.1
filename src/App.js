import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ChatPage from './pages/ChatPage'
import CreateCounselor from './pages/CreateCounselor'
import Profile from './pages/Profile'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:id" element={<ChatPage />} />
        <Route path="/create-counselor" element={<CreateCounselor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
