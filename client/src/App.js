import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])
  const [job, setJob] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching members:", error));
  }, [])

  const click = () => {
    fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        job_value: job,
        location_value: location
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        alert(`Server received: ${data.received}`);
      })
      .catch((error) => console.error("Error sending data:", error));
  }

  const changeJobVal = event => {
    setJob(event.target.value); // Fix: Use event.target.value
  }

  const changeLocationVal = event => {
    setLocation(event.target.value); // Fix: Use event.target.value
  }

  return (
    <div className='App'>
      <p>
        Enter job title: 
      </p>
      <input onChange={changeJobVal} value={job} />

      <p>
        Enter location:
      </p>
      <input onChange={changeLocationVal} value={location} />

      <button onClick={click}>
        Search
      </button>
    </div>
  )
}

export default App;