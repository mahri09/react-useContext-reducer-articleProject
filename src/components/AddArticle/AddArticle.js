import React, {useState, useContext} from "react";
import "./AddArticle.css";
import {ArticleContext} from '../../context/articleContext'

const AddArticle = () => {
  const [article, setarticle] = useState({});
  const context = useContext(ArticleContext)

  const hanleArticleData =(e)=>{
    setarticle({ ...article, [e.target.name]: e.target.value })
  }
  
  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(article);
  //context.saveArticle(article)
    context.saveArticle({type:"Add-Article", article})
    
  }
  console.log(context)

  return (
    <form className="add-article">
      <input
        type="text"
        name='title'
        id="title"
        placeholder="Title"
        onChange={hanleArticleData}
      />
      <input
        type="text"
        id="body"
        name='body'
        placeholder="Body"
        onChange={hanleArticleData}
      />
      <button onClick={onSubmit}>Add article</button>
    </form>
  );
};
export default AddArticle;
