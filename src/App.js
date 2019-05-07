import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { NavLink} from 'react-router-dom'



class App extends Component {
  state = {
    allposts: [],
    lastpost: []
  }
  componentDidMount(){
    // FETCH FOR MEDIUM BLOG POST
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lilkiki320")
      .then((res) => res.json())
      .then((data) => {
          const res = data.items
          const posts = res.filter(item => item.categories.length > 0)
          const date = posts[0].pubDate
          const newDate = new Date(date)
          const stringDate = newDate.toDateString()
          this.setState({
            allposts: posts,
            lastpost: posts[0],
            date: stringDate
          })
        })
  }
  // END FETCH

render(){
  return (
    <div className="Main">
      <nav className = "NavBar">
        <NavLink exact={true} activeClassName='is-active' to ="/">
          <div className = "fancy">
            <p className="nav2">
              Home
            </p>
          </div>
        </NavLink>
        <NavLink activeClassName='is-active' to='/aboutme'>
          <div className = "fancy">
            <p className="nav">
              About Me
            </p>
          </div>
        </NavLink>
        <NavLink activeClassName='is-active' to='/goals'>
          <div className = "fancy">
            <p className="nav2">
              Goals
            </p>
          </div>
        </NavLink>
        <NavLink activeClassName='is-active' to='/projects'>
          <div className = "fancy">
            <p className="nav2">
              Projects
            </p>
          </div>
        </NavLink>
        <div className = "fancy">
          <p className="nav2">
            GitHub
          </p>
        </div>
        <NavLink activeClassName='is-active' to='/flatiron'>
          <div className = "fancy">
            <p className="nav">
              Flatiron School
            </p>
          </div>
        </NavLink>
      </nav>
      <div className = "mainContainer">
        <div className ="techContainer">
          <h1 className="myName">
            Kiyana Dunlock
          </h1>
          <h3 className = "portfolio">
            Tech Portfolio
          </h3>
          <div className ="computer" />
        </div>
        <div className = "entryContainer">
          <h2 className = "Entry">
            Latest Blog Entry
          </h2>
      <div className = "latestEntry">
        <h1 className = "title">
          {this.state.lastpost.title}
        </h1>
        <h5 className="author">
          Author: {this.state.lastpost.author}
        </h5>
        <p className="content">
          <img className = "thumbnail" src = {`${this.state.lastpost.thumbnail}`} />
          <br />
          <br />
          <a className="link" href = {`${this.state.lastpost.link}`}>
            Check it out on my Medium blog here!
          </a>
          <p className = "published">
            Published on: {this.state.date}
          </p>
        </p>
      </div>
    </div>
  </div>
</div>
  );
}
}
export default App;
