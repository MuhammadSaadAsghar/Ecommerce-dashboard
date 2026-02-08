import React from 'react'
import "./Search.css"
import { IoSearch } from "react-icons/io5";


const SearchBox = () => {
  return (
    <div className='SearchBox position-relative d-flex align-items-center'>
        <IoSearch className='me-2'/>
  <input type="text" name="search" id="search" placeholder='search here...' />
    </div>
  )
}

export default SearchBox