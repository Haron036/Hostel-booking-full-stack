import React, { useState } from 'react'

const ExistingRooms = () => {
    const[rooms,setRooms] = useState([])
    const[currentPage, setCurrentPage] = useState(1)
    const[isLoading,setIsLoading] = useState(false)
    const[filteredRooms,setFilteredRooms] = useState([])
    const[selectedRoomType,setSelectedRoomType] = useState("")
    const[successMessage,setSuccessMessage] = useState("")

  return (
    <div>ExistingRooms</div>
  )
}

export default ExistingRooms