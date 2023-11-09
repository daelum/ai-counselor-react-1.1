import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react'
import axios from 'axios'
import SessionSaveModal from '../components/SessionSaveModal'

export default function ChatPage() {
  const [typing, setIsTyping] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      message:
        'Hello my name is Dave. This is a safe place where we can discuss anything! What can i help you with?',
      sentTime: 'just now',
      sender: 'Your Counselor',
    },
  ])

  const handleSend = async (message) => {
    const newMessage = {
      // sender: 'user',
      content: message,
      // direction: 'outgoing',
      role: 'user',
    }

    const newMessages = [...messages, newMessage]

    setMessages(newMessages)
    //set typing indicator
    setIsTyping(true)

    // process the message to openAI
    try {
      const { data } = await axios.post('http://localhost:4000/test', {
        counselorId: id,
        content: message,
        role: 'user',
      })
      console.log(data.aiAnswer)

      setMessages([...newMessages, data.aiAnswer])

      setIsTyping(false)
      // console.log(messages)
    } catch (err) {
      console.log(err)
    }
  }

  function logDataWithRoleAndContent(response) {
    return response.map((item, index) => {
      return `Role: ${item.role}, Content: ${item.content}`
    })
  }

  const { id } = useParams()

  useEffect(() => {
    // Fetch messages data from the API when the component mounts
    async function fetchMessages() {
      try {
        const response = await axios.get(`http://localhost:4000/chat/${id}`)
        const messageHistory = response.data.messages
        // Assuming yourData is your array of data
        console.log(messageHistory)
        logDataWithRoleAndContent(messageHistory)
        setMessages(messageHistory)
      } catch (err) {
        console.log(err)
      }
    }
    fetchMessages()
  }, [id])

  return (
    <div style={{ backgroundColor: '#a2e0de', height: '100vh' }}>
      <div
        style={{ backgroundColor: '#444444' }}
        className="d-flex justify-content-between"
      >
        <img
          src="/counselor-ai-logo.png"
          alt=""
          style={{ width: '300px', height: '50px' }}
        />
        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-danger me-4 mt-1"
          >
            End Session
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center pb-4 pt-3">
        <div
          style={{
            position: 'relative',
            height: '650px',
            width: '70%',
          }}
        >
          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator={
                  typing ? (
                    <TypingIndicator content="Your Counselor is thinking..." />
                  ) : null
                }
              >
                {messages.map(({ content, role }, i) => (
                  <Message
                    model={{
                      message: content,
                      // sender, // This is the Name of the sender (i.e.: Joe)
                      direction: role === 'user' ? 'outgoing' : 'incoming',
                    }}
                    key={i}
                  />
                ))}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
      <div className=" d-flex justify-content-end">
        {/* <div>
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-danger me-4"
          >
            End Session
          </button>
        </div> */}
        <div>
          <SessionSaveModal open={isOpen} onClose={() => setIsOpen(false)}>
            Content
          </SessionSaveModal>
        </div>
      </div>
    </div>
  )
}
