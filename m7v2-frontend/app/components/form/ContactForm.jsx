"use client"

import React from 'react'
import {useRouter} from "next/navigation"
import {useState} from 'react'


export default function ContactForm() {
  const router = useRouter()

const [subject, setSubject] = useState('')
const [message, setMessage] = useState('')
const [sender, setSender] = useState('')
const [email, setEmail] = useState('')
const [isLoading, setIsLoading] = useState(false)

handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)

  const msg = {
    subject, message, email
  }

  const res = await fetch('localhost:4000/endpoint', {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body:JSON.stringify(msg)
     
  })
  if (res.status === 201){
    router.refresh()
    router.push('/')
  }
}


  return (
    <div className=' block'>
<h2 className="text-primary text-center">Contact Us</h2>

<form onSubmit={handleSubmit }className="w-full block">
    <label>
      <span>Subject</span>
      <input
      required
      type='text'
      onChange ={ (e) => setSubject(e.target.value)}
      value = {subject}
      />      
    </label>

    <label>
      <span>E-mail</span>
      <input
      required
      type='text'
      onChange ={ (e) => setEmail(e.target.value)}
      value = {email}
      />      
    </label>
  
    <label>
      <span>Message</span>
      <input
      required
      type='text'
      onChange ={ (e) => setMessage(e.target.value)}
      value = {message}
      />      
    </label>

    <button
    className='btn-primary'
    disabled={isLoading}
    >
      {isLoading && <span>Sending...</span>}
      {!isLoading && <span>Send</span>}

    </button>

</form>

</div>
  )
}
