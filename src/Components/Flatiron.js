import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { NavLink} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';








class Flatiron extends Component {
  componentDidMount(){
  AOS.init({
    duration : 2000
  })
}
render(){

  return(
<div className="flatiron">
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
    <h1 className="school">
      The Flatiron School
    </h1>
    <p className="intro">
    It is only right that I dedicate a portion of my portfolio to The Flatiron School because if it weren’t for their amazing coaches and curriculum I truly don’t believe I would be even half the programmer I am today. Aside from it being described as four months of intensive, full-time on-campus training, it was actually one of the greatest experiences in my life. A little overview:
   </p>
   <div className="weeks">
    <div className="week week1">
      <li>
        <b>Week 1-3</b><i>Module 1</i>:
      </li>
      <ul>
        <li>
          Programming Fundamentals
        </li>
          <ul>
            <li> Ruby </li>
            <li>HTML5</li>
            <li> CSS </li>
            <li> Object-Oriented Programming </li>
            <li> SQL </li>
            <li>Object Relational Mappers </li>
          </ul>
        </ul>
      </div>
      <div className = "week week2">
        <li><b>Week 4-6</b><i>Module 2</i>: </li>
        <ul>
          <li> Web Frameworkd </li>
          <ul>
            <li> Sinatra </li>
            <li> Rails </li>
          </ul>
        </ul>
      </div>
      <div className = "week week3">
        <li><b>Week 7-9</b><i>Module 3</i>: </li>
        <ul>
          <li> Javascript </li>
          <ul>
            <li> Functional programming </li>
            <li> Javascript </li>
          </ul>
        </ul>
      </div>
      <div className = "week week4">
        <li><b>Week 10-12</b><i>Module 4</i>: </li>
        <ul>
          <li> Front-End Frameworks </li>
        <ul>
          <li>  React </li>
          <li> Redux </li>
        </ul>
      </ul>
    </div>
  </div>
  <p className="flat-desc">
    I must admit, when I initially learned of Flatirons 6% acceptance right I was not too confident in my chances. I was working full time and their pre-work course load was already extremely heavy. Thankfully I managed my time well and was able to get through all of it in the month before class. I also had to undergo both a personal and technical interview as well which was completely new to me. Even when I came to class the first day I <i>STILL</i> didn’t feel like I belonged. I felt like I was surrounded by tech geniuses and I was an imposter<i>(Hint Hint)</i>. I appreciated that during our introduction presentation Imposter Syndrome was something that was talked about because I feel I still get this feeling to this day and it’s nice to know I’m not alone. All in all, yes I did go to Flatiron to learn different programming languages but I lucked out by gaining so much more.
  </p>
  <div data-aos="flip-left" data-aos-duration="1000"     data-aos-delay="400">
  <div className = "flat">
    <h1 className="team">
      Teamwork
    </h1>
    <p className="work">
      Flatiron not only taught me the importance of being able to work on a team but also how to effectively work with all different types of people. I valued that we had seminars where we learned different communication techniques and how to effectively work in groups. We had many partner projects where I've worked one-on one with all of my cohort mates at least once. I learned that working well with different types of people really strengthens your ability to be an effective team leader. <i>"Alone we can do so little; together we can do so much."</i> -Helen Keller
    </p>
  </div>
</div>
<div data-aos="flip-right"  data-aos-duration="1000"     data-aos-delay="400">
  <div className = "flat flat1">
    <h1 className="create">
      Creativity
    </h1>
    <p className="creativity">
      I fear creativity may not be the most accurate word, but Flatiron definitely taught me to think outside of the box. They didn’t necessarily teach me how to do everything that I have grown to be capable of doing but they did give me the tools that I would need to get there. The most important thing that Flatiron has taught me is <font color="red">How To Learn.</font> I know how to describe the functionality I want to implement using technological terminology now. I know how to read documentations and Read.me’s and actually understand what it is saying. I learned to actually read Read.me’s. But I also learned how to put together different things that I learned to do things I never even imagined I could do. They taught me the long and hard way so that when I did learn the short way it would be easy for me to manipulate it since I understand the inner process.<i>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.</i> -Steve Jobs

    </p>
  </div>
</div>
<div data-aos="flip-left"  data-aos-duration="1000">
  <div className = "flat flat2">
    <h1 className = "debug">
      Debugging
    </h1>
    <p className = "debugger">
    I absolutely had to add this because I had to talk about it somewhere. I love debugging. I was  a very adamant user of Binding.pry, Byebug and Debugger. My coaches at Flatiron would always point out how important I thought debugging was. I strongly believe that debugging is probably one of the most beneficial things you can do for yourself especially as a new programmer. I think it’s important to just throw in a debugging tool just to see and play around with the information that is being received. Being able to see the different variables really gives you a different perspective and understanding of how you can manipulate these to do what you want. I think of debugging as just simply checking your work, why not?
    </p>
  </div>
</div>
</div>
  )
}
}

export default Flatiron
