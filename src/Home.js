import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {
  //   const [name, setName] = useState("nahom");
//   const [blogs, setBlogs] = useState(null);
//   const [error, setError] = useState(null);
//   const [isPending, setIsPending] = useState(true);




//   const deleteBlog = (id) => {
//     const newBlog = blogs.filter((blog) => blog.id !== id);
//     return setBlogs(newBlog);
//   };
//   useEffect(() => {
    
    // Another method to fetch a data from a server

    // const fetchBlogs = async () => {
    //   const res = await fetch("http://localhost:8001/blogs");
    //   const data = await res.json();
    //   return setBlogs(data);
    // };
    // fetchBlogs();

    
    //To simulate real life loading when fetching a data from a server

    // setTimeout(()=>{
    //     fetch("http://localhost:8001/blogs")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setBlogs(data);
    //     setIsPending(false)
    //   });
    // },1000)


//     fetch("http://localhost:8001/blogs")
//       .then((res) => {
//         if (!res.ok) {
//           throw Error("nahom couldnt fetch the data ");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setBlogs(data);
//         setIsPending(false);
//         setError(null)
//       })
//       .catch((err) => {
//           setError(err.message)
// setIsPending(false)
//         });
//   }, []);



const {data:blogs,error,isPending}=useFetch("http://localhost:5001/api/blogs")


  return (
    <div className="home">
        
      {isPending && <div>Loading........</div>}
      
      {error&&<div>{error}</div>}
      {blogs && (
        <BlogsList blogs={blogs} title="All Blogs"  />
      )}

      {/* <BlogsList blogs={blogs.filter((blog)=>blog.author==='mario')} title='Marios Blogs' onDelete={deleteBlog}/>     */}
      {/* <button onClick={()=>setName('zerihun')}>{name}</button> */}
    </div>
  );
};

export default Home;
