import { useParams, useHistory  } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
  const { id } = useParams();
  const history=useHistory()
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`http://localhost:5001/api/blogs/${id}`);
  
  
  
  
  const deleteBlog=()=>{
    // console.log("the deleted blog : " + id)
    fetch('http://localhost:5001/api/blogs/'+ blog.id ,{
      method:'DELETE'
    }).then(()=>{
      history.push('/')
    })
  }

  // const deleteBlog=(id)=>{
  //   // console.log("the deleted blog : " + id)
  //   fetch(`http://localhost:8001/blogs/${id}`,{
  //     method:'DELETE'
  //   }).then(()=>{
  //     history.push('/')
  //   })
  // }
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {error && <div></div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p> Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={()=>deleteBlog(blog.id)}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
