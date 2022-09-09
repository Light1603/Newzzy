import React from "react"
import { Link } from "react-router-dom"

const Card = ({ item }) => {
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={item.cover} alt='' />
        </div>
        <div className='text'>
          <span className='category'>{item.category}</span>
          {/*<h1 className='titleBg'>{title}</h1>*/}
           <Link to={`/Content/${item.id}`}>
            <h1 className='titleBg'>{item.title}</h1>
          </Link> */
          <div className='author flex'>
            <span>by {item.authorName}</span>
            <span>{item.time}</span>
            <span>Comments: {item.comments}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card