import React from "react"
import "./otherNews.css"
import Heading from "../../common/heading/Heading"
import { other } from "../../../data"


const OtherNews = () => {
  return (
    <>
      <section className='othernews'>
        <Heading title='Other News' />
        <div className='content'>
            {other.map((item) => {
                return (
                  <div className='items'>
                    <div className='box shadow flexSB'>
                      <div className='images'>
                        <div className='img'>
                          <img src={item.cover} alt='' />
                        </div>
                        <div class='category category1'>
                          <span>{item.category}</span>
                        </div>
                      </div>
                      <div className='text'>
                        <h1 className='title'>{item.title}...</h1>
                        <div className='date'>
                          <label>{item.date}</label>
                        </div>
                        <p className='desc'>{item.desc}...</p>
                        <div className='comment'>
                          <span>by {item.authorName}</span>
                          <span> Comment:</span>
                          <label>{item.comments}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
        </div>
      </section>
    </>
  )
}

export default OtherNews