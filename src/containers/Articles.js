import React,{useContext} from "react"
import Article from "../components/Article/Article"
import {ArticleContext} from '../context/articleContext';

/*const initialState = [
    { id: 1001, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 1002, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ]*/

const Articles = () => {
  // const [articles, setarticles] = useState(initialState)
  const context = useContext(ArticleContext)
  console.log(context)
  return (
    <div>
    {context.articles.map((article)=>{
      return <Article key={article.id} article={article}/>
    })}
      
    </div>
  )
}

export default Articles