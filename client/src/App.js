import React, { useState, useEffect } from 'react' 

function App() {
  // State for job input, location input, and fetched job/company data
  const [data, setData] = useState([]) 
  const [job, setJob] = useState('') 
  const [location, setLocation] = useState('') 

  // Fetch job titles and companies when the search button is clicked
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
        console.log("Response from server:", data) 
        setData(data.jobs_and_companies)  // Update state with job and company data
      })
      .catch((error) => console.error("Error sending data:", error)) 
  } 

  // Input change handlers
  const changeJobVal = (event) => setJob(event.target.value) 
  const changeLocationVal = (event) => setLocation(event.target.value) 

  // Render the UI
  return (
    <div className='App'>
      <p>Enter job title:</p>
      <input onChange={changeJobVal} value={job} />

      <p>Enter location:</p>
      <input onChange={changeLocationVal} value={location} />

      <button onClick={click}>Search</button>

      {/* Display job titles and companies */}
      {data.length === 0 ? (
        <p>No results yet. Submit a search!</p>
      ) : (
        data.map((entry, i) => (
          <div key={i}>
            <p><strong>Job Title:</strong> {entry.job_title}</p>
            <p><strong>Company:</strong> {entry.company}<br /></p>
          </div>
        ))
      )}
    </div>
  ) 
}

export default App 
