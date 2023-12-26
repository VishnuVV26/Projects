import React from 'react'
import './Pagination.css'
const Pagination = ({ totalposts, postPerpage, setCurrentpage }) => {

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalposts / postPerpage); i++) {
    pages.push(i);
  }
  return (
    <div className='pagination'>
      {
        pages.map((n, i) => {
          return <button key={i} onClick={() => setCurrentpage(n)}>{n}</button>
        })
      }
    </div>
  )
}

export default Pagination