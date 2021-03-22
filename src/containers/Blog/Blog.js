import React, { Component } from "react";
import axios from "../../axios";
import "./Blog.css";
import Posts from "../Posts/Posts";
import { Route,Link ,NavLink} from "react-router-dom";
import NewPost from './NewPost/NewPost'

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to ="/" 
                exact
                activeClassName = "active"
                activeStyle ={{
                    color:"red",
                    textDecoration:"underline"

                }}>Home</NavLink>
                <li>
                <Link to = {{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit =true'
                }}>New Post</Link>
                </li>
              </li>
            
            </ul>
          </nav>
        </header>

        {/*<Route path="/" exact render={() => <h1>Home</h1>} />*/}

        <Route path="/" component = {Posts} />
        <Route path="/new-post" component = {NewPost} />

      </div>
    );
  }
}

export default Blog;
