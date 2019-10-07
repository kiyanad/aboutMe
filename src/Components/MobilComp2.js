import React, { Component } from 'react';

import '../Anime.css';
import anime from 'animejs';
import logo from '../Img/logo.png';
import medium from '../Img/medium.png'


class MobileComp2 extends Component {
// SET INITIAL STATE //
  state = {
    open: false,
    open2: false,
    open3: false,
    changePage: false,
    changeBar: false,
  }




componentDidMount() {
// RED SWIPE ANIMATION //
  setTimeout(function(){
    document.querySelector('.redWipe').classList.toggle("redGo")
    setTimeout(function(){
      document.querySelector('.redWipe').classList.toggle("redStop")
    }.bind(this), 900)
// KD ANIMATION //
    setTimeout(function(){
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
              delay: anime.stagger(10)
        })
        staggersAnimation.play();

        setTimeout (function(){
          if (document.querySelector('.transition') !== null) {

          document.querySelector( ".transition").classList.toggle( "anim-trans" );
        }
        }  .bind(this), 12000)

        setTimeout(() => {
            document.body.style.background = "#282c34"
        }, 14000)

        setTimeout(() => {
          if (document.querySelector('.transition') !== null) {

          document.querySelector(".transition").classList.toggle("two")
        }
        }, 12300)

        setTimeout(() => {
          if (document.querySelector('.transition') !== null) {

          document.querySelector(".transition").classList.toggle("three")
        }
        }, 13500)

        setTimeout(() => {
          if (document.querySelector('.transition') !== null) {

          document.querySelector(".transition").classList.toggle("four")
        }
        }, 14000)


        setTimeout(() => {
          if (document.querySelector('.transition') !== null) {

          document.querySelector(".transition").classList.toggle("five")
        }
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
        }, 14600)
      }  .bind(this), 200)
    }  .bind(this), 900)
  }

  clicked = () => {
          document.querySelector(".redWipe").classList.toggle("redOff")
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/ea/8c/6c/ea8c6c3c6b7214d9d08b28e4456a4afc.jpg')"

        document.querySelector(".transition").classList.toggle("rotateT")
        // document.querySelector(".BigContainer").classList.toggle("rotateT")
              document.querySelector(".nextPage").classList.toggle("moveInP")
              setTimeout(() => {
                  this.setState({
                      nextPage: true
                    })

              }, 2570)
              setTimeout(() => {
            document.body.style.background = "yellow"
          }, 2400)
  }

  componentDidUpdate(){
  // CHECKS IF SCREEN HAS CHANGED YET //
    if (document.querySelector('.gitRoll') !== null) {
          if (document.querySelector('.linkRoll') !== null) {
            debugger
      setTimeout(function(){
        document.querySelector("#root").firstElementChild.style.height = "100%"
        document.querySelector('.gitRoll').classList.toggle("go")
        document.querySelector('.medRoll').classList.toggle("go2")
      }, 100)
      if (document.querySelector('.linkRoll') !== null) {
          debugger
          setTimeout(() => {
            if (document.querySelector('.linkRoll') !== null) {

        debugger
          document.querySelector('.gitRoll').classList.toggle("bounce")
          document.querySelector('.noshadow').classList.toggle("shadow")
          document.querySelector('.medRoll').classList.toggle("showMed")
          document.querySelector('.noshadow3').classList.toggle("shadow2")
        }
      }, 5000)
    }

      setTimeout(function(){
        if (document.querySelector('.linkRoll') !== null) {

          document.querySelector('.linkRoll').classList.toggle("linkShow")
          document.querySelector('.noshadow2').classList.toggle("shadow3")
          document.querySelector('.resumeRoll').classList.toggle("moveUp")
        }
      }, 4015)

      setTimeout(function(){
        if (document.querySelector('.resumeRoll') !== null) {

          document.querySelector('.resumeRoll').classList.toggle("moveUp")
          document.querySelector('.resumeRoll').classList.toggle("moveDown")
        }
      }, 3000)

      setTimeout(function(){
        if (document.querySelector('.resumeRoll') !== null) {

          document.querySelector('.resumeRoll').classList.toggle("moveDown")
          document.querySelector('.resumeRoll').classList.toggle("stpMoveUp")
        }
      }, 4380)

      setTimeout(function(){
        if (document.querySelector('.linkRoll') !== null) {

          document.querySelector('.heartRoll').classList.toggle("fix")
        }
      }, 5580)

      setTimeout(function(){
        if (document.querySelector('.medRoll') !== null) {

          document.querySelector('.medRoll').classList.toggle("medStay")
        }
      }, 5460)
    }
  }
  }

render(){
  return (
    <div className= "myContainer">
      {this.state.nextPage?
      <div className="psychStuff">
        yay next page
      </div>:
      <div className = "oneContain">
        <canvas id='world'></canvas>
        <div className="nextPage" />
        <div class="transition" >
          {this.state.changeBar?
        <div>
        <div className = "logoContainer">
          <img className = "logo" src = {logo} />
        </div>
        <div className = "allLinks">
          <div className="links">
              <h1 className="link-text" onClick= {this.clicked} >
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
            {this.state.changePage?
            <div className="App">
              <div className="BigContainer">
                <div className="Iam">
                  <h1 className="whoI">
                    <span className="iColor">I</span> <span className="aColor">a</span><span className="mColor">m</span> <span className="dotColor">.</span><span className="dot2Color">.</span><span className="dot3Color">.</span>
                  </h1>
                </div>
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
                      <figure class="ball"><span class="noshadow"></span>
                      </figure>
                    </div>
                  </section>
                  <section className="stage2">
                    <div className = "linkRoll">
                      <img className = "linkedin" src = "https://cdn2.iconfinder.com/data/icons/linkedin-ui-flat/48/LinkedIn_UI-02-512.png" />
                      <figure class="ball"><span class="noshadow2"></span></figure>
                    </div>
                  </section>
                  <div className="medIn">
                    <section className="stage3">
                      <div className = "medRoll">
                        <img className = "medium" src = {medium} />
                        <figure class="ball"><span className="noshadow3"></span></figure>
                      </div>
                    </section>
                  </div>
                  <section className="stage4">
                    <div className = "resumeRoll">
                      <h1 className="resume">
                        Resume
                      </h1>
                      <figure class="ball"><span className="noshadow4"></span></figure>
                    </div>
                  </section>
                  <section className="stage5">
                    <div className = "heartRoll">
                      <img className = "heart" src = "https://www.onlygfx.com/wp-content/uploads/2016/05/hand-drawn-heart-3.png" />
                        <figure class="ball"><span className="noshadow4"></span></figure>
                    </div>
                  </section>
                </div>
              </div>:
            <div>
          </div>
          }
        </div>
        <div className="redWipe" />
        <div class="stagger-visualizer change" />
      </div>}
    </div>
    );
  }
}

export default MobileComp2;
{/* <img className = "resume" src = "https://assets.webiconspng.com/uploads/2017/01/Resume-Transparent-Icon-300x300.png" /> */}

//
// {this.state.changePage?
// <div className="App">
//     <div className="BigContainer">
//         <p className="myName">
//             Kiyana
//             <br/>
//             Dunlock
//         </p>
//
//     </div>
//     <div className="bottomContainer">
//             <div className = "quote">
//                 <h3 className= "quote-text">
//                     Every great dream begins with a dreamer.
//                     <br />
//                     Always remember, you have within you the strength, the patience, and the passion
//                     <br />
//                     to reach for the stars to change the world.
//                 </h3>
//                 <br />
//                 <p className= "quote-author">
//                     - Harriet Tubman
//                 </p>
//             </div>
//         </div>
//         <div className = "rollBox">
//         <section className="stage">
//         <div className = "gitRoll">
//             <img className = "git" src = "http://pngimg.com/uploads/github/github_PNG20.png" />
//             <figure class="ball"><span class="noshadow"></span></figure>
//         </div>
//         </section>
//
//         <section className="stage2">
//         <div className = "linkRoll">
//             <img className = "linkedin" src = "https://cdn2.iconfinder.com/data/icons/linkedin-ui-flat/48/LinkedIn_UI-02-512.png" />
//             <figure class="ball"><span class="noshadow2"></span></figure>
//         </div>
//         </section>
//
//         <section className="stage3">
//         <div className = "medRoll">
//             <img className = "medium" src = {medium} />
//             <figure class="ball"><span className="noshadow3"></span></figure>
//         </div>
//         </section>
//
//         <section className="stage4">
//         <div className = "resumeRoll">
//             <h1 className="resume"> Resume </h1>
//             <figure class="ball"><span className="noshadow4"></span></figure>
//         </div>
//         </section>
//
//         </div>
// </div>:
// <div>
//
// <div class="stagger-visualizer change" onClick = {this.animation}></div>
// </div>
// }
// <div class="fourth-text">
//     Enter Site
// </div>











//COLL MOUSE EFFECT


    // One of my first <canvas> experiments, woop! :D

// var SCREEN_WIDTH = window.innerWidth;
// var SCREEN_HEIGHT = window.innerHeight;
//
// var RADIUS = 70;
//
// var RADIUS_SCALE = 1;
// var RADIUS_SCALE_MIN = 1;
// var RADIUS_SCALE_MAX = 1.5;
//
// var QUANTITY = 25;
//
// var canvas;
// var context;
// var particles;
//
// var mouseX = SCREEN_WIDTH * 0.5;
// var mouseY = SCREEN_HEIGHT * 0.5;
// var mouseIsDown = false;
//
// function init() {
//
//   canvas = document.getElementById( 'world' );
//
//   if (canvas && canvas.getContext) {
// 		context = canvas.getContext('2d');
//
// 		// Register event listeners
// 		window.addEventListener('mousemove', documentMouseMoveHandler, false);
// 		window.addEventListener('mousedown', documentMouseDownHandler, false);
// 		window.addEventListener('mouseup', documentMouseUpHandler, false);
// 		document.addEventListener('touchstart', documentTouchStartHandler, false);
// 		document.addEventListener('touchmove', documentTouchMoveHandler, false);
// 		window.addEventListener('resize', windowResizeHandler, false);
//
// 		createParticles();
//
// 		windowResizeHandler();
//
// 		setInterval( loop, 1000 / 60 );
// 	}
// }
//
// function createParticles() {
// 	particles = [];
//
// 	for (var i = 0; i < QUANTITY; i++) {
// 		var particle = {
// 			size: 1,
// 			position: { x: mouseX, y: mouseY },
// 			offset: { x: 0, y: 0 },
// 			shift: { x: mouseX, y: mouseY },
// 			speed: 0.01+Math.random()*0.04,
// 			targetSize: 1,
// 			fillColor: '#' + (Math.random() * 0x404040 + 0xaaaaaa | 0).toString(16),
// 			orbit: RADIUS*.5 + (RADIUS * .5 * Math.random())
// 		};
//
// 		particles.push( particle );
// 	}
// }
//
// function documentMouseMoveHandler(event) {
// 	mouseX = event.clientX - (window.innerWidth - SCREEN_WIDTH) * .5;
// 	mouseY = event.clientY - (window.innerHeight - SCREEN_HEIGHT) * .5;
// }
//
// function documentMouseDownHandler(event) {
// 	mouseIsDown = true;
// }
//
// function documentMouseUpHandler(event) {
// 	mouseIsDown = false;
// }
//
// function documentTouchStartHandler(event) {
// 	if(event.touches.length == 1) {
// 		event.preventDefault();
//
// 		mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * .5;;
// 		mouseY = event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * .5;
// 	}
// }
//
// function documentTouchMoveHandler(event) {
// 	if(event.touches.length == 1) {
// 		event.preventDefault();
//
// 		mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * .5;;
// 		mouseY = event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * .5;
// 	}
// }
//
// function windowResizeHandler() {
// 	SCREEN_WIDTH = window.innerWidth;
// 	SCREEN_HEIGHT = window.innerHeight;
//
// 	canvas.width = SCREEN_WIDTH;
// 	canvas.height = SCREEN_HEIGHT;
// }
//
// function loop() {
//
// 	if( mouseIsDown ) {
// 		RADIUS_SCALE += ( RADIUS_SCALE_MAX - RADIUS_SCALE ) * (0.02);
// 	}
// 	else {
// 		RADIUS_SCALE -= ( RADIUS_SCALE - RADIUS_SCALE_MIN ) * (0.02);
// 	}
//
// 	RADIUS_SCALE = Math.min( RADIUS_SCALE, RADIUS_SCALE_MAX );
//
// 	context.fillStyle = 'rgba(0,0,0,0.05)';
// 		 context.fillRect(0, 0, context.canvas.width, context.canvas.height);
//
// 	for (var i = 0, len = particles.length; i < len; i++) {
// 		var particle = particles[i];
//
// 		var lp = { x: particle.position.x, y: particle.position.y };
//
// 		// Rotation
// 		particle.offset.x += particle.speed;
// 		particle.offset.y += particle.speed;
//
// 		// Follow mouse with some lag
// 		particle.shift.x += ( mouseX - particle.shift.x) * (particle.speed);
// 		particle.shift.y += ( mouseY - particle.shift.y) * (particle.speed);
//
// 		// Apply position
// 		particle.position.x = particle.shift.x + Math.cos(i + particle.offset.x) * (particle.orbit*RADIUS_SCALE);
// 		particle.position.y = particle.shift.y + Math.sin(i + particle.offset.y) * (particle.orbit*RADIUS_SCALE);
//
// 		// Limit to screen bounds
// 		particle.position.x = Math.max( Math.min( particle.position.x, SCREEN_WIDTH ), 0 );
// 		particle.position.y = Math.max( Math.min( particle.position.y, SCREEN_HEIGHT ), 0 );
//
// 		particle.size += ( particle.targetSize - particle.size ) * 0.05;
//
// 		if( Math.round( particle.size ) == Math.round( particle.targetSize ) ) {
// 			particle.targetSize = 1 + Math.random() * 7;
// 		}
//
// 		context.beginPath();
// 		context.fillStyle = particle.fillColor;
// 		context.strokeStyle = particle.fillColor;
// 		context.lineWidth = particle.size;
// 		context.moveTo(lp.x, lp.y);
// 		context.lineTo(particle.position.x, particle.position.y);
// 		context.stroke();
// 		context.arc(particle.position.x, particle.position.y, particle.size/2, 0, Math.PI*2, true);
// 		context.fill();
// 	}
// }
//
// window.onload = init;
