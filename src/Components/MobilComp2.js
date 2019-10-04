import React, { Component } from 'react';

import '../Anime.css';
import anime from 'animejs';
import logo from '../Img/logo.png';
import medium from '../Img/medium.png'


class MobileComp2 extends Component {
  state = {
    open: false,
    open2: false,
    open3: false,
    changePage: true,
    changeBar: true,

  }

  


componentDidMount() {

    // if (document.querySelector('.gitRoll') !== null) {
    setTimeout(function(){
        document.querySelector('.gitRoll').classList.toggle("go")
        
    }, 100)
    setTimeout(function(){
        document.querySelector('.gitRoll').classList.toggle("bounce")
        document.querySelector('.noshadow').classList.toggle("shadow")
        document.querySelector('.medRoll').classList.toggle("showMed")
        document.querySelector('.noshadow3').classList.toggle("shadow2")
    }, 5000)

    setTimeout(function(){
        document.querySelector('.linkRoll').classList.toggle("linkShow")
        document.querySelector('.noshadow2').classList.toggle("shadow3")
        document.querySelector('.resumeRoll').classList.toggle("moveUp")

    }, 4015)
    
    setTimeout(function(){
        document.querySelector('.resumeRoll').classList.toggle("moveUp")
        document.querySelector('.resumeRoll').classList.toggle("moveDown")

    }, 5100)
    

}


  animation =() => {

// setTimeout(function(){
//   document.querySelector('.color').classList.toggle("move")
// }, 2000)
// setTimeout(function(){
 document.querySelector('.stagger-visualizer').classList.toggle("change")

 
const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [17, 17];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
 
 const myFrag = document.createElement('div')
   fragment.appendChild(myFrag);
  myFrag.setAttribute("id", "div-" + i)
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  loop: false,
  autoplay: false
})
.add({
  translateX: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
  ],
  translateY: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
  ],
  duration: 1000,
  scale: .5,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  translateX: () => anime.random(-10, 10),
  translateY: () => anime.random(-10, 10),
  delay: anime.stagger(8, {from: 'last'})
})
.add({
  translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
  translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
  rotate: 0,
  scaleX: 2.5,
  scaleY: .25,
  delay: anime.stagger(4, {from: 'center'})
})
.add({
  rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
  delay: anime.stagger(50, {grid: grid, from: 'center'})
})
.add({
  translateX: 0,
  translateY: 0,
  scale: .5,
  scaleX: 1,
  rotate: 180,
  duration: 1000,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  translateY: 200,
  // scaleY: 1,
  // scale: 1,
  delay: anime.stagger(10)
})

staggersAnimation.play();


setTimeout (function(){
    document.querySelector( ".transition").classList.toggle( "anim-trans" );
}, 12000)


setTimeout(() => {

      document.body.style.background = "#282c34"
}, 14000)

setTimeout(() => {
    document.querySelector(".transition").classList.toggle("two")
}, 12300)
setTimeout(() => {
    document.querySelector(".transition").classList.toggle("three")
}, 13500)
setTimeout(() => {
    document.querySelector(".transition").classList.toggle("four")
}, 14000)
setTimeout(() => {
    document.querySelector(".transition").classList.toggle("five")
}, 15000)
setTimeout(() => {
    this.setState({
        changePage: true,
        icons: false
      })
      document.body.style.backgroundColor = "#282c34"

}, 15000)

setTimeout(() => {
    this.setState({
        changeBar: true
      })

}, 15900)

this.balls()

}

show =() => {
    document.querySelector(".fourth-text").classList.toggle("show")
 
}




render(){
    // debugger
  return (
    <div>
        <div class="transition">
            {this.state.changeBar?
            <div>
            <div className = "logoContainer">
                <img className = "logo" src = {logo} />
            </div>
            <div className = "allLinks">
                <div className="links">
                    <h1 className="link-text" >
                    From Psychology to Tech...
                    </h1>

                </div>
                <div className="links">
                    <h1 className="link-text">
                        Flatiron School
                    </h1>

                </div>
                <div className="links">
                    <h1 className="link-text">
                        My Present
                    </h1>

                </div>
                <div className="links">
                    <h1 className="link-text">
                        My Future
                    </h1>
                </div>
                <div className="links">
                    <h1 className="link-text">
                        Projects
                    </h1>

                </div>
            </div>
            </div>:
            <div>
            </div>}
        </div>

        {this.state.changePage? 
        <div className="App">
            <div className="BigContainer">
                <p className="myName">
                    Kiyana 
                    <br/>
                    Dunlock
                </p>
                
            </div>
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
                </div> 
                <div className = "rollBox">
                <section className="stage">
                <div className = "gitRoll">
                    <img className = "git" src = "http://pngimg.com/uploads/github/github_PNG20.png" />
                    <figure class="ball"><span class="noshadow"></span></figure>
                </div>
                </section>

                <section className="stage2">
                <div className = "linkRoll">
                    <img className = "linkedin" src = "https://cdn2.iconfinder.com/data/icons/linkedin-ui-flat/48/LinkedIn_UI-02-512.png" />
                    <figure class="ball"><span class="noshadow2"></span></figure>
                </div>
                </section>

                <section className="stage3">
                <div className = "medRoll">
                    <img className = "medium" src = {medium} />
                    <figure class="ball"><span className="noshadow3"></span></figure>
                </div>
                </section>

                <section className="stage4">
                <div className = "resumeRoll">
                    <h1 className="resume"> Resume </h1>
                    <figure class="ball"><span className="noshadow4"></span></figure>
                </div>
                </section>

                </div>
        </div>:
    <div>

        <div class="stagger-visualizer change" onClick = {this.animation}></div>
        </div>
        }
        <div class="fourth-text">
            Enter Site
        </div>
    </div>
  );
}
}

export default MobileComp2;
{/* <img className = "resume" src = "https://assets.webiconspng.com/uploads/2017/01/Resume-Transparent-Icon-300x300.png" /> */}