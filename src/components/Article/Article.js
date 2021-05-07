import React, {useContext} from 'react';
import './Article.css'
import {ArticleContext} from '../../context/articleContext'

export default function Article({article}) {
  const context = useContext(ArticleContext)

  const handleDelete=(e)=>{
    console.log(e.target.id)
    const id = e.target.id
    context.dispatch({type:"Delete-Article", id})
  } 
  
  return (
    <div className='article'>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <button id={article.id} onClick={handleDelete}>Delete</button>
    </div>
  )
}

