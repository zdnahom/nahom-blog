import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email ,password };

    //  const req= await fetch("http://localhost:8001/blogs/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    // setIsPending(true);
    fetch("http://localhost:5001/api/login", {
      method: "POST",
      // mode:'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      // setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create_blog ">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="text"
          required
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* {!isPending && <button >Login</button>} */}
        <button >Login</button>

      </form>
    </div>
  );
};

export default Login;
