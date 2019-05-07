import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { NavLink} from 'react-router-dom';
import NavBar from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';




class Project extends Component {
  state = {
    marvel: true,
    habit: false,
    robot: false
  }

  marvel = () => {
    this.setState({
      marvel: true,
      habit: false,
      robot: false
    })
  }

  habit = () => {
    this.setState({
      marvel: false,
      habit: true,
      robot: false
    })
  }

  robot = () => {
    this.setState({
      marvel: false,
      habit: false,
      robot: true
    })
  }
  render(){
    return(
      <div className="project-Container">
      <nav className = "NavBar">
      <NavLink exact={true} activeClassName='is-active' to ="/"><div className = "fancy">
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
      <a href="//github.com/kiyanad"><div className = "fancy">
      <p className="nav2">
      GitHub
      </p>
      </div>
</a>
      <NavLink activeClassName='is-active' to='/flatiron'>
      <div className = "fancy">
      <p className="nav">
      Flatiron School
      </p>
      </div>
      </NavLink>



      </nav>
      <div className="project-tab">
      <div className= "project-nav">
      <div className="project"> Projects</div>

      <div className="button1" onClick={this.marvel}> Marvel Brawl</div>
      <div className="button2" onClick={this.habit}> Habit Tracker</div>
      <div className="button3" onClick={this.robot}> Robot Apocalypse</div>

      </div>
      <div className="proj-desc">
      {this.state.marvel?
        <div>
         <h1 className="marvel"> Marvel Brawl </h1>

         <iframe id="samp" src='https://www.youtube.com/embed/gbkFtqV2Hng'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/>
         <div className="projContainer">
         <p className="brawl">Marvel Brawl was my first real application that I created utelizing what I had learned about javascript and react in the few weeks prior. I was very proud of this application because it demonstrated my understanding of javascript and how it worked. It also demonstrated my comfortability using React as a framework for my front-end applications. This project was the first project that showed me how to bring ideas to life with CSS. The character cards that pop-up when a card is flipped was actually drawn out initially in photoshop by my amazing partner(whom did an excellent job on the backend using Ruby on Rails but we never connected the two) and I not only shocked him and everyone else but I shocked myself when I was able to create an almost exact replica using CSS. This is the application that shows my introduction to styling and animation in web applications.</p>
         <div className="list">
         <li>I experimented with jquery and many different javascript libraries, learning how to implement them in react </li>
         <li> I created the entire layout of the site using CSS </li>
         <li> I implemented drag-and-drop functionality </li>
         <li> I used Fetch to obtain data from an external API </li>
         <li> I used a class toggle to stack and unstack the cards as well as flip them </li>
         </div>
         </div>
         </div>:
         null}
         {this.state.habit?
           <div>
           <h1 className="journal"> Bullet Journal </h1>
<iframe id="samp" src="https://www.youtube.com/embed/ujI_NfMKshg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="projContainer">
            <p className="bullet">The bullet journal was my final project at Flatiron school, where I used everything I had learned in the past 12 weeks to build a fully functioning web application. I believe the bullet journal shows how much further I had gotten using Javascript and writing CSS. I was more comfortable implementing different functionality and utelizing different tools that were available to me. I had to use what I learned in order to learn how to implement the things I wanted in my application.   </p>
            <div className="list">
            <li> I used many Javascript libraires such as date.fns and implemented them in my application </li>
            <li> I carefully read and followeed the documentation to be able to adjust the functionality from the liraries to cater to what I needed </li>
            <li> I was able to create a front-end application using React.js  that save s data to a backend I created using Ruby on Rails. </li>
            <li> Implemented JWT for User authentication and Sign in </li>
            <li> Used Fetch both pessimisticaly and optimistically </li>
            <li> Utelized my strong debugging skills to tackle problems </li>
            </div>
            </div>
            </div>:
            null
         }
         {this.state.robot?
           <div>
      <h1 className="robot"> Robot Apocalypse </h1>

      <div className = "robot-ap">
<iframe id="samp" src="https://www.youtube.com/embed/6lrCnD7Zw9o?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <div className="projContainer">
       <p className="ap"> My Robot Apocalypse app was really me trying to step out of my comfort zone and do something I had never done before. I always wanted to create a choose your own adventure game but I wasnt sure of how to do that exactly yusing React and Rails. Unfortunately when I looked online for resources I quickly learned that this is not a common task for developers. I didnt let that stop me and I countinued on to creating the project. This project was a bit more difficult for me because I had to implement a lot of game logic that I wasnt used to. I created a flow chart online to try and help me remember the paths as they soon started to grow way out of control.</p>
       <div className="list">
       <li> I used my knowledge of javascript to iterate throught information and take out what only what I needed.</li>
       <li> Used rails to build a backend for all the choices and robots </li>
       <li> Used my knowledge of rails to structure my backend to be able to give my frontend exactly what it needs</li>
       <li> Created multiple story lines and paths for the users </li>
       <li> Utelized my strong debugging skills to tackle problems </li>
       </div>
       </div>
       </div>
       </div>
       : null}
      </div>
      </div>

      </div>
    )
  }
}
export default Project;



// <div className = "marvel-brawl">
// <video id="samp" width="640" height="580" controls>
//      <source id="video" src = {video} type="video/mp4">
//      </source>
//  </video>
//  <h1 className="marvel"> Marvel Brawl </h1>
//  <p className="brawl">Marvel Brawl was my first real application that I created utelizing what I had learned about javascript and react in the few weeks prior. I was very proud of this application because it demonstrated my understanding of javascript and how it worked. It also demonstrated my comfortability using React as a framework for my front-end applications. This project was the first project that showed me how to bring ideas to life with CSS. The character cards that pop-up when a card is flipped was actually drawn out initially in photoshop by my amazing partner(whom did an excellent job on the backend using Ruby on Rails but we never connected the two) and I not only shocked him and everyone else but I shocked myself when I was able to create an almost exact replica using CSS. This is the application that shows my introduction to styling and animation in web applications.</p>
//  <div className="list">
//  <li>I experimented with jquery and many different javascript libraries, learning how to implement them in react </li>
//  <li> I created the entire layout of the site using CSS </li>
//  <li> I implemented drag-and-drop functionality </li>
//  <li> I used Fetch to obtain data from an external API </li>
//  <li> I used a class toggle to stack and unstack the cards as well as flip them </li>
//  </div>
//  </div>


// <div className = "bullet-journal">
// <video id="samp" width="640" height="580" controls>
//      <source id="video" src = {video2} type="video/mp4">
//      </source>
//  </video>
//  <h1 className="journal"> Bullet Journal </h1>
//  <p className="bullet">The bullet journal was my final project at Flatiron school, where I used everything I had learned in the past 12 weeks to build a fully functioning web application. I believe the bullet journal shows how much further I had gotten using Javascript and writing CSS. I was more comfortable implementing different functionality and utelizing different tools that were available to me. I had to use what I learned in order to learn how to implement the things I wanted in my application.   </p>
//  <div className="list">
//  <li> I used many Javascript libraires such as date.fns and implemented them in my application </li>
//  <li> I carefully read and followeed the documentation to be able to adjust the functionality from the liraries to cater to what I needed </li>
//  <li> I was able to create a front-end application using React.js  that save s data to a backend I created using Ruby on Rails. </li>
//  <li> Implemented JWT for User authentication and Sign in </li>
//  <li> Used Fetch both pessimisticaly and optimistically </li>
//  <li> Utelized my strong debugging skills to tackle problems </li>
//  </div>
//  </div>
