import React, { Component } from 'react';
import '../Mobile.css';
import '../MobileComp.css';


class Mobile extends Component {
  state = {
    open: false,
    open2: false,
    open3: false,

  }


  open =() => {
    const circle1 = document.querySelector(".circle-1")
    const circle2 = document.querySelector(".circle-2")
    const circle3 = document.querySelector(".circle-3")

    if(circle1.classList.contxains("opened2") == false){
    document.querySelector(".circle-1").classList.toggle("opened")
    setTimeout(function(){     document.querySelector(".circle-1").classList.toggle("opened2")
}, 400);
// document.querySelector(".container").classList.toggle("open")
setTimeout(function(){       circle2.classList.toggle("hide")
}, 550);
setTimeout(function(){       circle3.classList.toggle("hide")
}, 800);


if(this.state.open){
this.setState({
  open: false
})
}
else{
  this.setState({
    open: true
  })
}
}
  else{
    document.querySelector(".circle-1").classList.toggle("opened2")
    setTimeout(function(){     document.querySelector(".circle-1").classList.toggle("opened")
}, 400);
setTimeout(function(){       circle2.classList.toggle("hide")
}, 350);
setTimeout(function(){       circle3.classList.toggle("hide")
}, 200);
setTimeout(()=>{
// document.querySelector(".container").classList.toggle("open")



this.setState({
  open: false
})

}, 800);

  }
}

open2 =() => {
  const circle1 = document.querySelector(".circle-1")
  const circle2 = document.querySelector(".circle-2")
  const circle3 = document.querySelector(".circle-3")

  if(circle2.classList.contains("opened2") == false){
  document.querySelector(".circle-2").classList.toggle("opened")
  setTimeout(function(){     document.querySelector(".circle-2").classList.toggle("opened2")
}, 400);

// document.querySelector(".container").classList.toggle("open")
setTimeout(function(){
circle3.classList.toggle("hide")

}, 900);
setTimeout(function(){
  circle1.classList.toggle("hide")

}, 1050);
//
if(this.state.open2){
this.setState({
open2: false
})
}
else{
this.setState({
  open2: true
})
}
}
else{
  circle1.classList.toggle("hide")

  document.querySelector(".circle-2").classList.toggle("opened2")
  setTimeout(function(){     document.querySelector(".circle-2").classList.toggle("opened")
  circle3.classList.toggle("hide")

}, 400);
setTimeout(()=>{
// document.querySelector(".container").classList.toggle("open")

this.setState({
open2: false
})

}, 800);

}
}

open3 =() => {
  const circle1 = document.querySelector(".circle-1")
  const circle2 = document.querySelector(".circle-2")
  const circle3 = document.querySelector(".circle-3")

  if(circle3.classList.contains("opened2") == false){
  document.querySelector(".circle-3").classList.toggle("opened")
  setTimeout(function(){     document.querySelector(".circle-3").classList.toggle("opened2")

}, 400);
// document.querySelector(".container").classList.toggle("open")
setTimeout(function(){     circle2.classList.toggle("hide")

}, 700);
setTimeout(function(){     circle1.classList.toggle("hide")

}, 900);

// circle2.classList.toggle("hide")

if(this.state.open3){
this.setState({
open3: false
})
}
else{
this.setState({
  open3: true
})
}
}
else{
  circle1.classList.toggle("hide")
  document.querySelector(".circle-3").classList.toggle("opened2")
  setTimeout(function(){     document.querySelector(".circle-3").classList.toggle("opened")

}, 400);
setTimeout(function(){
circle2.classList.toggle("hide")

}, 300);
setTimeout(()=>{
// document.querySelector(".container").classList.toggle("open")

this.setState({
open3: false
})

}, 800);

}
}

zoom = ()=>{
    document.querySelector(".circle-1").classList.toggle("zoom")

  }

  expandMarvel = () => {
    document.querySelector(".marvel").classList.toggle("expand")
  }
  expandMarvelTech = () => {
    document.querySelector(".marvelTech").classList.toggle("expand")
  }
  expandHabit = () => {
    document.querySelector(".habit").classList.toggle("expand")
  }
  expandHabitTech = () => {
    document.querySelector(".habitTech").classList.toggle("expand")
  }

  expandRobot = () => {
    document.querySelector(".robot").classList.toggle("expand")
  }
  expandRobotTech = () => {
    document.querySelector(".robotTech").classList.toggle("expand")
  }
render(){
  return (
    <div className="App">
    <div className="BigContainer">

      <p className="myName">
        Kiyana Dunlock
      </p>
      <div className="bottomContainer">
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
      <div className="tableContainer">
      <table>
        <tr>
          <th className="lang" colspan="2">
            Languages I Know
          </th>
        </tr>
        <tr>
          <td className="langName">
            HTML<span className="num">5</span>
          </td>
          <td>
            <div className="bar">
              <div className="progress">
                <div className="innerBar html" />
              </div>
            </div>
          </td>
          <td className="percent html-per">
              94%
          </td>
        </tr>
        <tr>
          <td className="langName">
            React
          </td>
          <td>
            <div className="bar">
              <div className="progress">
                <div className="innerBar react" />
              </div>
            </div>
          </td>
          <td className="percent react-per">
              89%
          </td>
        </tr>
        <tr>
          <td className="langName">
            CSS
          </td>
          <td>
            <div className="bar">
              <div className="progress">
                <div className="innerBar css" />
              </div>
            </div>
          </td>
          <td className="percent css-per">
              84%
          </td>
        </tr>
        <tr>
          <td className="langName">
            Javascript
          </td>
          <td>
            <div className="bar">
              <div className="progress">
                <div className="innerBar script" />
        </div>
      </div>
      </td>
      <td className="percent java-per">
          76%
      </td>
      </tr>
      <tr>
        <td className="langName">
          mySql
        </td>
        <td>
          <div className="bar">
            <div className="progress">
              <div className="innerBar sql" />
            </div>
          </div>
        </td>
        <td className="percent mysql">
            68%
        </td>
      </tr>
      </table>
      </div>
      <div className="container">
        <div className="circle circle-1" onClick={this.open} onDoubleClick={this.zoom}>
          {this.state.open?
            <div>
            <h4 className="about">
              About Me
            </h4>
            <p className="aboutMe">When I got into college I was thrilled to be studying Psychology but shortly after I began wondering if it was the right thing for me. I had taken a game design class my sophomore year and had done exceedingly well. After having a conversation with my professor he advised me that I should explore computer science as a minor or even a double major. I began doing research and I stumbled across sites like codeacademy and code.org and began working on their projects and tutorials. I quickly realized that I was actually really good at it and it was something I enjoyed doing. I found myself thinking of solutions to my coding projects while I was in psychology class. This was when I realized if this was something I really wanted to pursue now was the time to do it. I started researching bootcamps and was thrilled when I was accepted at Flatiron. Honestly, I truly believe had I been introduced to the world of programming earlier I never would have majored in Psychology in the first place. But I also feel more equipped because I can utilize the skills I've learned in my psychology and logic classes and implement them as a programmer. It is important to be able to code efficiently but I believe the key component of being a great programmer is being able to collaborate effectively with anyone on anything and psychology has definitely taught me that.</p></div>:
          <h4 className="aboutCircle"> About Me </h4>}
        </div>
        <div className="change">
          <div className="circle circle-2" onClick={this.open2}>
          {this.state.open2?
            <div>
            <h4 className="about">
              My Dream
            </h4>
            <p className="dreamDesc">When I got into college I was thrilled to be studying Psychology but shortly after I began wondering if it was the right thing for me. I had taken a game design class my sophomore year and had done exceedingly well. After having a conversation with my professor he advised me that I should explore computer science as a minor or even a double major. I began doing research and I stumbled across sites like codeacademy and code.org and began working on their projects and tutorials. I quickly realized that I was actually really good at it and it was something I enjoyed doing. I found myself thinking of solutions to my coding projects while I was in psychology class. This was when I realized if this was something I really wanted to pursue now was the time to do it. I started researching bootcamps and was thrilled when I was accepted at Flatiron. Honestly, I truly believe had I been introduced to the world of programming earlier I never would have majored in Psychology in the first place. But I also feel more equipped because I can utilize the skills I've learned in my psychology and logic classes and implement them as a programmer. It is important to be able to code efficiently but I believe the key component of being a great programmer is being able to collaborate effectively with anyone on anything and psychology has definitely taught me that.</p></div>:
          <h4 className="aboutCircle"> Dreams </h4>}
          </div>
          <div className="circle circle-3" onClick={this.open3}>
          {this.state.open3?
            <div>
            <h4 className="about">
              Flatiron School
            </h4>
            <p className="dreamDesc">I must admit, when I initially learned of Flatirons 6% acceptance rate I was not too confident in my chances. I was working full time and their pre-work course load was already extremely heavy. Thankfully I managed my time well and was able to get through all of it in the month before class. I also had to undergo both a personal and technical interview as well which was completely new to me. Even when I came to class the first day I STILL didn’t feel like I belonged. I felt like I was surrounded by tech geniuses and I was an imposter(Hint Hint). I appreciated that during our introduction presentation Imposter Syndrome was something that was talked about because I feel I still get this feeling to this day and it’s nice to know I’m not alone. All in all, yes I did go to Flatiron to learn different programming languages but I lucked out by gaining so much more.</p></div>:
          <h4 className="aboutCircle flatiro"> Flatiron School </h4>}
          </div>
        </div>

      </div>
      <div className="projectContainer">
        <h4 className="projectLabel">
          My Projects
        </h4>
        <div>
        <h5 className="projectName"> Marvel Brawl</h5>
        <img className="gif" src="https://media.giphy.com/media/cKPiMSQZqd6XH0MnA3/giphy.gif" />
        <div className="descripBar">
        <h5 className="descLabel" onClick={this.expandMarvel}>
          What is it?
        <img className="arrow" src="https://www.lohmedical.com/css/homesentry/images/down-azul.png"/>
        </h5>

        </div>
          <div className="description marvel">
          <p className="descText">
            Marvel Brawl was my first real application that I created utilizing what I had learned about JavaScript and React in the few weeks prior. I was very proud of this application because it demonstrated my understanding of JavaScript and how it worked. It also demonstrated my comfortability using React as a framework for my front-end applications. This project was the first project that showed me how to bring ideas to life with CSS. The character cards that pop-up when a card is flipped was actually drawn out initially in Photoshop by my amazing partner (whom did an excellent job on the backend using Ruby on Rails but we never connected the two) and I not only shocked him and everyone else but I shocked myself when I was able to re-create an almost exact replica using CSS. This is the project that shows my introduction to styling and animation in web applications.
          </p>
          </div>
          <div className="techBar">
            <h5 className="descLabel" onClick={this.expandMarvelTech}>
              Technology?
            <img className="arrow" src="https://www.lohmedical.com/css/homesentry/images/down-azul.png"/>
            </h5>
          </div>
          <div className="techDesc description marvelTech">
          <p className="descText">
        ★ I experimented with jQuery and many different JavaScript libraries, learning how to implement them in React
          <br />
★ I created the entire layout of the site using CSS
<br />

★ I implemented drag-and-drop functionality
<br />

★ I used Fetch to obtain data from an external API
<br />

★ I used a class toggle to stack and unstack the cards as well as flip them
          </p>

</div>
</div>
<div>
<h5 className="projectName"> Habit Tracker</h5>
<img className="gif" src="https://media.giphy.com/media/QTxahphITAsyEt6Zua/giphy.gif" />
<div className="descripBar">
<h5 className="descLabel" onClick={this.expandHabit}>
  What is it?
<img className="arrow" src="https://www.lohmedical.com/css/homesentry/images/down-azul.png"/>
</h5>

</div>
  <div className="description habit">
  <p className="descText">
The bullet journal was my final project at Flatiron school, where I used everything I had learned in the past 12 weeks to build a fully functioning web application compete with a frontend and a backend. I also had to implement User Authentication using JWT as well as routes. I believe the bullet journal shows how much further I had gotten using JavaScript and writing CSS. I was more comfortable implementing different functionality and utilizing different tools that were available to me. I had to use what I learned in order to learn how to implement the things I wanted in my application.
  </p>
  </div>
  <div className="techBar">
    <h5 className="descLabel" onClick={this.expandHabitTech}>
      Technology?
    <img className="arrow" src="https://www.lohmedical.com/css/homesentry/images/down-azul.png"/>
    </h5>
  </div>
  <div className="techDesc description habitTech">
  <p className="descText">
★ I used many JavaScript libraries such as date.fns and implemented them in my application
  <br />
★ I carefully read and followed the documentation to be able to adjust the functionality from the libraries to cater to what I needed
<br />

★ I was able to create a front-end application using React.js that saves data to a backend I created using Ruby on Rails.
<br />

★ Implemented JWT for User Authentication and Sign in
<br />

★ I used a class toggle to stack and unstack the cards as well as flip them
<br />

★ Utilized my strong debugging skills to tackle problems
  </p>

</div>
</div>
<div>
<h5 className="projectName"> Robot Apocalypse</h5>
<img className="gif" src="https://media.giphy.com/media/YpYEoT8Uhpp5uW4nyV/giphy.gif" />
<div className="descripBar">
<h5 className="descLabel" onClick={this.expandRobot}>
  What is it?
<img className="arrow" src="https://www.lohmedical.com/css/homesentry/images/down-azul.png"/>
</h5>

</div>
  <div className="description robot">
  <p className="descText">
My Robot Apocalypse app was really me trying to step out of my comfort zone and do something I had never done before. I always wanted to create a choose your own adventure game but I wasn’t sure of how to do that exactly using React and Ruby on Rails. Unfortunately, when I looked online for resources I quickly learned that this is not a common task for developers. I didn’t let that stop me and I continued on to creating the project. This project was a bit more difficult for me because I had to implement a lot of game logic that I wasn’t used to. I created a flow chart online to try and help me remember the paths as they soon started to grow way out of control.
  </p>
  </div>
  <div className="techBar">
    <h5 className="descLabel" onClick={this.expandRobotTech}>
      Technology?
    <img className="arrow" src="https://www.lohmedical.com/css/homesentry/images/down-azul.png"/>
    </h5>
  </div>
  <div className="techDesc description robotTech">
  <p className="descText">
★ I used my knowledge of javascript to iterate through information and take out only what I needed
  <br />
★ Used Ruby on Rails to build a backend for all the choices and robots
<br />

★ Used my knowledge of Ruby on Rails to structure my backend to be able to give my frontend exactly what it needed
<br />

★ Created multiple story lines and paths for the users
<br />

★ Utilized my strong debugging skills to tackle problems
  </p>

</div>
</div>
<div>
<h5 className="projectName"> Medium Searcher</h5>
<img className="gif" src="https://media.giphy.com/media/WUabCA6Nazx8sQBBrq/giphy.gif" />
<div className="descripBar">
<h5 className="descLabel" onClick={this.expandMedium}>
  What is it?
<img className="arrow" src="https://www.lohmedical.com/css/homesentry/images/down-azul.png"/>
</h5>

</div>
  <div className="description medium">
  <p className="descText">
My Robot Apocalypse app was really me trying to step out of my comfort zone and do something I had never done before. I always wanted to create a choose your own adventure game but I wasn’t sure of how to do that exactly using React and Ruby on Rails. Unfortunately, when I looked online for resources I quickly learned that this is not a common task for developers. I didn’t let that stop me and I continued on to creating the project. This project was a bit more difficult for me because I had to implement a lot of game logic that I wasn’t used to. I created a flow chart online to try and help me remember the paths as they soon started to grow way out of control.
  </p>
  </div>
  <div className="techBar">
    <h5 className="descLabel" onClick={this.expandMediumTech}>
      Technology?
    <img className="arrow" src="https://www.lohmedical.com/css/homesentry/images/down-azul.png"/>
    </h5>
  </div>
  <div className="techDesc description mediumTech">
  <p className="descText">
★ I used my knowledge of javascript to iterate through information and take out only what I needed
  <br />
★ Used Ruby on Rails to build a backend for all the choices and robots
<br />

★ Used my knowledge of Ruby on Rails to structure my backend to be able to give my frontend exactly what it needed
<br />

★ Created multiple story lines and paths for the users
<br />

★ Utilized my strong debugging skills to tackle problems
  </p>

</div>
</div>
      </div>
      <div className="stackContainer">
      <h3 className="techStack">
        Full Techstack
      </h3>
      <p className="stack">
      html, css, Ruby, ruby on rails, javascript, react.js, redux, npm, sqlite, activerecord, postgresql, api's, ajax, rest, git, jsx, and babel.
      </p>
      </div>
      </div>
      </div>
    </div>
  );
}
}

export default Mobile;
