import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import Register from "./auth/Register";
import Login from "./auth/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create_blog" component={CreateBlog}/>
            <Route path="/blogs/:id" component={BlogDetails}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>

            <Route path="*" component={NotFound}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
