import React, {useContext} from 'react';
import './Article.css'
import {ArticleContext} from '../../context/articleContext'

export default function Article({article}) {
  const {dispatch} = useContext(ArticleContext)

  const handleDelete=(e)=>{
    /* variant No=1
    const id = e.target.id
    dispatch({type:"Delete-Article", id})*/
    //variant no=2:
    dispatch({type:"Delete-Article", article})
  } 
  
  return (
    <div className='article'>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <button id={article.id} onClick={handleDelete}>Delete</button>
    </div>
  )
}

