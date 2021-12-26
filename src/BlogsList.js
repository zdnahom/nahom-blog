import React from "react";
import { Link } from "react-router-dom";

const BlogsList = ({ blogs, title, onDelete }) => {
  return (
    <div className="blogs-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}> 
            <h2>{blog.title}</h2>
            <p>Writen by {blog.author}</p>
          </Link>
          {/* <button onClick={()=>onDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogsList;
