import React,{useState, createContext} from 'react';

export const ArticleContext = createContext();

const initialState = [
  { id:1000, title:"post-1", body:"It is just an example" },
  { id:1001, title:"post-2", body:" It is just an example" },
]

const ArticleProvider =({children})=>{
  const [articles, setarticles] = useState(initialState);

  const saveArticle = (article)=>{
    const newArticle ={
      id: Math.floor(Math.random()*1000),
      title: article.title,
      body: article.body
    }
    setarticles([...articles, newArticle])
  }

  return <ArticleContext.Provider value={{articles, saveArticle}}>
    {children}
  </ArticleContext.Provider>

}

export default ArticleProvider;