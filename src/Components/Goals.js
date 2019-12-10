import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { NavLink} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';








class Goals extends Component {
  componentDidMount(){
  AOS.init({
    duration : 2000
  })
}
render(){

  return(
    <div className = "goal-Container">
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
    <div className="goalsContainer">
    <div className = "quote">
    <h3 className= "quote-text">
    Every great dream begins with a dreamer.
    <br />
    Always remember, you have within you the strength, the patience, and the passion
    <br />
    to reach for the stars to change the world.
    </h3>
    <br />
    <p className= "quote-author">
    - Harriet Tubman
    </p>
    </div>
    <div className = "description">
    <p className="dream">
    <b>For as long as I can remember I have always been a dreamer. I've always had a mind that was constantly flooding with new ideas and aspirations. I wanted to accomplish things as far as creating my own summer camp and even building an amusement park. I've had ideas for books I wanted to write and programs I wanted to bring to low-income communities. One of the things I love about programming is it allows me not only to dream but also to create. I can envision a website or app in my mind and programming allows me to bring that vision to life. As I have mentioned before, I truly believe that computer programming is what I am meant to do. However, I don’t believe I am meant to do it because I love it. Interestingly enough I feel this way of thinking is something I have brought with me from my studies in Psychology. I ultimately have always wanted to help others achieve their goals and aspirations and I now have the skills to do so. I want to use my love for computer programming to change the world. As they say <font color="green">"Start as a <i>Dreamer</i> and End as an <i>Achiever!"</i></font></b>
    </p>
    </div>
    <div className="goals">
    <div data-aos="fade-zoom-in">
     <h1 className="myGoals"> So.. How do I plan on doing this? </h1>
</div>
    </div>
    <br />
    <br />
    <div className="fade" data-aos='fade-left'    data-aos-duration="1000"     data-aos-delay="600"
>
    <div className = "teach-pic" />
    <div className = "teach-decrip">
<h2 className = "heading">
Teach
</h2>
<p className="teach-p">
Originally I wanted to be a child psychologist because I understand that children are our future and I love kids. One thing that has always stuck with me and has been very important to me was the lack of knowledge I had about Computer Science growing up. I was introduced to many different hobbies and skills growing up so it is very surprising that Computer Programming was never one of them. I feel if I had this as an option as a child I would have been able to discover and perfect my craft a lot earlier. I admire the programs that not only teach our African American youth to program but also the ones that teach our young girls and children in general. I want to teach in different ways not only in terms of the mechanics of coding. I want to teach young children that they truly have the power to do anything and that there are so many options in the world to explore. I am aware of the demand for programmers in the tech world and I want to be a pillar that helps our youth be properly prepared to take this on.

</p>
</div>
</div>
    </div>
    <br />
    <br />
    <div className="fade second" data-aos='fade-right'    data-aos-duration="1000">
    <div className = "build-decrip">
<h2 className = "heading">
Build
</h2>
<p className="build-p">
  When I tell people that I’m a programmer their minds immediately jump to the big companies like Microsoft, Apple or Amazon. Honestly, I'm not too surprised because that would definitely be an amazing opportunity, but that’s not exactly what I want for myself. I want to aide in helping a company achieve their goals and be a part of the building process as a core member of the team. I want to utilize my skills to hopefully help a start-up eventually become a big tech company. Along with this, I want to help individuals build the websites or mobile apps of their dreams to help take their businesses to the next level. I want to listen to their ideas and suggestions and implement them in order to help create the foundation for something whether big or small.<i>"Help others achieve their dreams and you will achieve yours." -Les Brown</i>
</p>
<div className = "build-pic" />

</div>
    </div>
    <br />
    <br />
    <div className="fade third" data-aos='fade-left'    data-aos-duration="1000">
    <div className = "create-pic" />
    <div className = "create-decrip">
<h2 className = "heading">
Create
</h2>
<p className="create-p">
Like I said I am a dreamer so it should come as no surprise that I have tons of applications and programs that I want to create. I want to use my network and interactions to find the perfect people to join my team and help accomplish my goals. I hope to one day change the entire way people interact with technology. I want to use my skills as a programmer and my big ideas to not only create things that I feel are fun and cool but to create useful and helpful technology. I am particularly interested in creating technology that can aide in peoples’ mental health which I can probably also attribute to my study of Psychology. I want to help people not only feel better but also help them become the person they want to be. I hope to one day join those extraordinary individuals who created coding programs such as Kimberly Bryant(founder of<a href="http://www.blackgirlscode.com/">Black Girls Code</a>),Brandon Nicholson(founder of <a href="http://www.hiddengeniusproject.org">The Hidden Genius Project </a>) and Rachel Harris Johnson(founder of <a href="https://girlsinc.org">Girls Inc</a>) and create one of my own that can be implemented in our public schools in low-income communities.  <i>"Legacy is not leaving something for people. It's leaving something in people." -Peter Strople.</i>

</p>
</div>
    </div>
    <br />
    <br />
    <div className="fade fourth" data-aos='fade-right'    data-aos-duration="1000">
    <div className = "inspire-decrip">
<h2 className = "heading">
Inspire
</h2>
<p className="inspire-p">
I was 23 when I started at The Flatiron School and I didn’t really know what to expect. One thing that really stood out to me was how diverse the individuals in my cohort were. People from all different backgrounds, with all different stories trying to learn this new skill to hopefully make a career out of it. The variance in ages was what inspired me the most and I want to take that inspiration and that story and share it with others. I want to inspire people of all ages and show them that it is never too late and with hard work and perseverance you really can achieve your greatest dreams. I want to inspire our youth to create and to knock down all obstacles. At Flatiron my peers and I would always talk about these walls we hit in our code (either bugs or trying to figure out how to implement some functionality) and we would joke about not letting that stop us and just smashing right through it. I want to use my words, skills and talents to inspire and motivate people to smash through it. I will not only tell, but I will show people that you can knock down any and all obstacles if you put your mind to. Your only limit is you.

</p>
<div className = "inspire-pic" />
</div>
    </div>
    <div id="footer3">
    <img id="copy" src="https://www.alt-codes.net/images/copyright-symbol.png" /> <p id="foot">2019 Kiyana Dunlock</p>
    </div>
    </div>
  )
}
}
export default Goals;
