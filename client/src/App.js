import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  // useEffect(() => {
  //   fetch("http://localhost:5000/members").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // }, [])
  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching members:", error));
  }, [])

  return (
    <div>

      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}

    </div>
  )
}

export default App