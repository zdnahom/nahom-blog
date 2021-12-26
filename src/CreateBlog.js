import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Nahom");
  const [isPending, setIsPending] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = async (e) => {
    e.preventDefault();
    const data = { title, body, author };

    //  const req= await fetch("http://localhost:8001/blogs/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    setIsPending(true);
    console.log("failed");
    fetch("http://localhost:5001/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("Blog added !!");
      setIsPending(false);
      history.push("/");
    });
  };
  const onSubmit = () => {
    console.log(selectedFile);
  };
  return (
    <div className="create_blog ">
      <h2>Create New Blog</h2>
      <form onSubmit={onSubmit}>
        <label>Blog : Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog : Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <input
          type="file"
          name="picture"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files)}
        />
        <label>Blog : Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Nahom">Nahom</option>
          <option value="Zerihun">Zerihun</option>
        </select>
        {!isPending && <button>Create</button>}
        {isPending && <button disabled>Creating.....</button>}
      </form>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} /> {/* register an input */}
      {/* <input {...register("lastName", { required: true })} />
        {errors.lastName && <p>Last name is required.</p>} */}
      {/* <input {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>} */}
      {/* <input type="file" name="picture" ref={register}/>
        <input type="submit" /> */}
      {/* </form> */}
    </div>
  );
};

export default CreateBlog;
