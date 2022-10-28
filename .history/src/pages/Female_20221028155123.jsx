import React, { useState, useEffect } from 'react'
import User from '../components/User'

function FemalePage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [currentPage] = useState(1);
  const [userPerPage] = useState(10);

  // fetching the users
  useEffect(() => {
    const fetchUserData = async () => {
      const fetchUser = await fetch('https://randomuser.me/api?results=10&gender=female')
      const res = await fetchUser.json()
      setUsers(res.results
      )
      setLoading(false)
    }
    fetchUserData()
  }, [])

  const indexOfLastNumber = currentPage * userPerPage
  const indexOfFirstNumber = indexOfLastNumber - userPerPage
  const currentUsers = users.slice(indexOfFirstNumber, indexOfLastNumber)

  // loading
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h4>female Page</h4>
      <User currentUsers={currentUsers} />
    </div>
  )
}

export default FemalePage