import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [author, setAuthor] = useState("Nahom");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = { name, email, username,password,passwordConfirm };

    //  const req= await fetch("http://localhost:8001/blogs/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    setIsPending(true);
    fetch("http://localhost:5001/register", {
      method: "POST",
      // mode:'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("Blog added !!");
      setIsPending(false);
      // history.push("/");
    });
  };

  return (
    <div className="create_blog ">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>

        <label>Full Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>User Name</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm password</label>
        <input
          type="password"
          required
          value={setPasswordConfirm}
        
        //   value={title}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
{/* 
        <label>Sex</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Nahom">Nahom</option>
          <option value="Zerihun">Zerihun</option>
        </select> */}

        {!isPending && <button>Register</button>}
        {isPending && <button disabled>Registered</button>}
        
      </form>
    </div>
  );
};

export default Register;
