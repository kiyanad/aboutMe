import React, { Component } from 'react';

import '../Anime.css';
import '../style.css';

import javascript from '../Img/javascript.png';
import html from '../Img/html.png';
import apex from '../Img/apexx.png';
import css from '../Img/CSS.svg';
import react from '../Img/react.png';
import native from '../Img/reactNative.png';
import salesforce from '../Img/Salesforce.png';
import sass from '../Img/sass.png';
import sql from '../Img/sql.png';
import vba from '../Img/vba.png';







import anime from 'animejs';
import logo from '../Img/logo2.png';
import medium from '../Img/medium.png'


export class MobileComp3 extends Component {
// SET INITIAL STATE //
    state = {
        open: false,
        open2: false,
        open3: false,
        changePage: true,
        changeBar: false,
    }


    componentDidMount() {

            anime({
                targets: '.circle',
                backgroundColor: '#37eb34',
                borderRadius: ['0%', '50%'],
                easing: 'easeInOutQuad',
                translateX: 250,
                scale: 2,
                rotate: '1turn',
            });

            if(this.state.changePage != false) {

                document.querySelector(".composition__photo--p1").addEventListener('mouseenter', e => {
                    document.querySelector(".Js").classList.toggle("borderShow");
                    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    document.querySelector(".borderShow").style.borderColor = `#${randomColor}`;

                });
                document.querySelector(".composition__photo--p1").addEventListener('mouseleave', e => {
                    document.querySelector(".Js").classList.toggle("borderShow")

                });

                document.querySelector(".composition__photo--p2").addEventListener('mouseenter', e => {
                    document.querySelector(".Salesforce").classList.toggle("borderShow");
                    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    document.querySelector(".borderShow").style.borderColor = `#${randomColor}`;
                });
                document.querySelector(".composition__photo--p2").addEventListener('mouseleave', e => {
                    document.querySelector(".Salesforce").classList.toggle("borderShow");

                });

                document.querySelector(".composition__photo--p3").addEventListener('mouseenter', e => {
                    document.querySelector(".React").classList.toggle("borderShow");
                    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    document.querySelector(".borderShow").style.borderColor = `#${randomColor}`;

                });
                document.querySelector(".composition__photo--p3").addEventListener('mouseleave', e => {
                    document.querySelector(".React").classList.toggle("borderShow")

                });


                document.querySelector(".composition__photo--p4").addEventListener('mouseenter', e => {
                    document.querySelector(".Sass").classList.toggle("borderShow")
                    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    document.querySelector(".borderShow").style.borderColor = `#${randomColor}`;

                });
                document.querySelector(".composition__photo--p4").addEventListener('mouseleave', e => {
                    document.querySelector(".Sass").classList.toggle("borderShow")

                });


                document.querySelector(".composition__photo--p5").addEventListener('mouseenter', e => {
                    document.querySelector(".VBA").classList.toggle("borderShow")
                    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    document.querySelector(".borderShow").style.borderColor = `#${randomColor}`;

                });
                document.querySelector(".composition__photo--p5").addEventListener('mouseleave', e => {
                    document.querySelector(".VBA").classList.toggle("borderShow")

                });

                document.querySelector(".composition__photo--p6").addEventListener('mouseenter', e => {
                    document.querySelector(".ReactNative").classList.toggle("borderShow")
                    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    document.querySelector(".borderShow").style.borderColor = `#${randomColor}`;

                });
                document.querySelector(".composition__photo--p6").addEventListener('mouseleave', e => {
                    document.querySelector(".ReactNative").classList.toggle("borderShow")

                });

                document.querySelector(".composition__photo--p7").addEventListener('mouseenter', e => {
                    document.querySelector(".Css").classList.toggle("borderShow")
                    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    document.querySelector(".borderShow").style.borderColor = `#${randomColor}`;

                });
                document.querySelector(".composition__photo--p7").addEventListener('mouseleave', e => {
                    document.querySelector(".Css").classList.toggle("borderShow")

                });

                document.querySelector(".composition__photo--p8").addEventListener('mouseenter', e => {
                    document.querySelector(".Sql").classList.toggle("borderShow")
                    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    document.querySelector(".borderShow").style.borderColor = `#${randomColor}`;

                });
                document.querySelector(".composition__photo--p8").addEventListener('mouseleave', e => {
                    document.querySelector(".Sql").classList.toggle("borderShow")

                });

                document.querySelector(".composition__photo--p9").addEventListener('mouseenter', e => {
                    document.querySelector(".html").classList.toggle("borderShow")
                    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    document.querySelector(".borderShow").style.borderColor = `#${randomColor}`;


                });
                document.querySelector(".composition__photo--p9").addEventListener('mouseleave', e => {
                    document.querySelector(".html").classList.toggle("borderShow")

                });

                document.querySelector(".composition__photo--p10").addEventListener('mouseenter', e => {
                    document.querySelector(".Apex").classList.toggle("borderShow")
                    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    document.querySelector(".borderShow").style.borderColor = `#${randomColor}`;


                });
                document.querySelector(".composition__photo--p10").addEventListener('mouseleave', e => {
                    document.querySelector(".Apex").classList.toggle("borderShow")

                });


            }





//
//
// // RED SWIPE ANIMATION
//         setTimeout(function () {
//             document.querySelector('.redWipe').classList.toggle("redGo")
//             setTimeout(function () {
//                 document.querySelector('.redWipe').classList.toggle("redStop")
//             }.bind(this), 900)
// // KD ANIMATION //
//             setTimeout(function () {
//                 document.querySelector('.stagger-visualizer').classList.toggle("change")
//                 const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
//                 const fragment = document.createDocumentFragment();
//                 const grid = [17, 17];
//                 const col = grid[0];
//                 const row = grid[1];
//                 const numberOfElements = col * row;
//
//                 for (let i = 0; i < numberOfElements; i++) {
//                     const myFrag = document.createElement('div')
//                     fragment.appendChild(myFrag);
//                     myFrag.setAttribute("id", "div-" + i)
//                 }
//                 staggerVisualizerEl.appendChild(fragment);
//
//                 const staggersAnimation = anime.timeline({
//                     targets: '.stagger-visualizer div',
//                     easing: 'easeInOutSine',
//                     delay: anime.stagger(50),
//                     loop: false,
//                     autoplay: false
//                 })
//                     .add({
//                         translateX: [
//                             {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'})},
//                             {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'})}
//                         ],
//                         translateY: [
//                             {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'})},
//                             {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'})}
//                         ],
//                         duration: 1000,
//                         scale: .5,
//                         delay: anime.stagger(100, {grid: grid, from: 'center'})
//                     })
//                     .add({
//                         translateX: () => anime.random(-10, 10),
//                         translateY: () => anime.random(-10, 10),
//                         delay: anime.stagger(8, {from: 'last'})
//                     })
//                     .add({
//                         translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
//                         translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
//                         rotate: 0,
//                         scaleX: 2.5,
//                         scaleY: .25,
//                         delay: anime.stagger(4, {from: 'center'})
//                     })
//                     .add({
//                         rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
//                         delay: anime.stagger(50, {grid: grid, from: 'center'})
//                     })
//                     .add({
//                         translateX: 0,
//                         translateY: 0,
//                         scale: .5,
//                         scaleX: 1,
//                         rotate: 180,
//                         duration: 1000,
//                         delay: anime.stagger(100, {grid: grid, from: 'center'})
//                     })
//                     .add({
//                         translateY: 200,
//                         delay: anime.stagger(10)
//                     })
//                 staggersAnimation.play();
//
//                 setTimeout(function () {
//                     if (document.querySelector('.transition') !== null) {
//
//                         document.querySelector(".transition").classList.toggle("anim-trans");
//                     }
//                 }.bind(this), 12000)
//
//                 setTimeout(() => {
//                     document.body.style.background = "#282c34"
//                 }, 14000)
//
//                 setTimeout(() => {
//                     if (document.querySelector('.transition') !== null) {
//
//                         document.querySelector(".transition").classList.toggle("two")
//                     }
//                 }, 12300)
//
//                 setTimeout(() => {
//                     if (document.querySelector('.transition') !== null) {
//
//                         document.querySelector(".transition").classList.toggle("three")
//                     }
//                 }, 13500)
//
//                 setTimeout(() => {
//                     if (document.querySelector('.transition') !== null) {
//
//                         document.querySelector(".transition").classList.toggle("four")
//                     }
//                 }, 14000)
//
//
//                 setTimeout(() => {
//                     if (document.querySelector('.transition') !== null) {
//
//                         document.querySelector(".transition").classList.toggle("five")
//                     }
//                 }, 15000)
//
//                 setTimeout(() => {
//                     this.setState({
//                         changePage: true,
//                         icons: false
//                     })
//                     document.body.style.backgroundColor = "#282c34"
//                 }, 15000)
//
//                 setTimeout(() => {
//                     this.setState({
//                         changeBar: true
//                     })
//                 }, 14600)
//             }.bind(this), 200)
//         }.bind(this), 900)
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



    componentDidUpdate() {
        // CHECKS IF SCREEN HAS CHANGED YET //
        if (document.querySelector('.gitRoll') !== null) {
            if (document.querySelector('.linkRoll') !== null) {
                debugger
                setTimeout(function () {
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

                setTimeout(function () {
                    if (document.querySelector('.linkRoll') !== null) {

                        document.querySelector('.linkRoll').classList.toggle("linkShow")
                        document.querySelector('.noshadow2').classList.toggle("shadow3")
                        document.querySelector('.resumeRoll').classList.toggle("moveUp")
                    }
                }, 4015)

                setTimeout(function () {
                    if (document.querySelector('.resumeRoll') !== null) {

                        document.querySelector('.resumeRoll').classList.toggle("moveUp")
                        document.querySelector('.resumeRoll').classList.toggle("moveDown")
                    }
                }, 3000)

                setTimeout(function () {
                    if (document.querySelector('.resumeRoll') !== null) {

                        document.querySelector('.resumeRoll').classList.toggle("moveDown")
                        document.querySelector('.resumeRoll').classList.toggle("stpMoveUp")
                    }
                }, 4380)

                setTimeout(function () {
                    if (document.querySelector('.linkRoll') !== null) {

                        document.querySelector('.heartRoll').classList.toggle("fix")
                    }
                }, 5580)

                setTimeout(function () {
                    if (document.querySelector('.medRoll') !== null) {

                        document.querySelector('.medRoll').classList.toggle("medStay")
                    }
                }, 5460)
            }
        }
    }

    render() {
        return (
            <div className="myContainer">

                {this.state.changePage ?
                    <div>
                    <header class="header">

                        <div class="header__logo-box">
                            <img src={logo} alt="logo" class="header__logo"/>
                        </div>
                        <div class="header__text-box">
                            <h1 class="heading-primary">
                                <span class="heading-primary--main">Kiyana Dunlock</span>
                                <span class="heading-primary--sub"><span class="sales">SalesForce</span> | <span
                                    class="front">Frontend</span> | <span class="back">Backend</span></span>
                            </h1>
                            <a href="#" class="btn btn--white btn--animated">
                                My Projects
                            </a>
                        </div>
                    </header>
                    <main>
                    < section className = "section-about" >
                        < div className="u-center-text u-margin-bottom-8 typer">
                    <h2 className="heading-secondary">
                    Tech Stack_
                    </h2>
                    <span id="typed"></span>

                    </div>


                    <div className="row">
                    <div className="col-1-of-2" id="up">
                    <div className="html">
                    <h3>HTML</h3>
                    <div className="htmlInner">
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube "></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube " id="gray"></div>
                    <div className="sk-cube4 sk-cube "></div>
                    <div className="sk-cube3 sk-cube "></div>
                    </div>
                    </div>
                    </div>
                    <div className = "Css">
                    <h3>CSS</h3>
                    <div className="cssInner">
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube" id="gray"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube" id="gray" ></div>
                    </div>
                    </div>
                    </div>
                    <div className = "Js">
                    <h3>Javascript</h3>

                    <div className="jsInner">
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    </div>
                    </div>

                    <div className = "React">
                    <h3>React</h3>

                    <div className="reactInner">
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube" id="gray"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    </div>
                    </div>
                    <div className = "Sql">
                    <h3>SQL/SOQL</h3>

                    <div className="sqlInner">
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>

                    </div>
                    </div>
                    <div className = "Salesforce">
                    <h3>SalesForce</h3>

                    <div className="salesforceInner">
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube" id="gray"></div>
                    <div className="sk-cube4 sk-cube" ></div>
                    <div className="sk-cube3 sk-cube" id="gray"></div>
                    </div>

                    </div>
                    </div>

                    <div className = "VBA">
                    <h3>VBA</h3>
                    <div className="vbaInner">
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube" id="gray"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>

                    </div>
                    </div>
                    <div className = "Sass">
                    <h3>SASS</h3>
                    <div className="sassInner">
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube" id="gray"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube" id="gray"></div>
                    </div>

                    </div>
                    </div>
                    <div className = "ReactNative">
                    <h3>React Native</h3>
                    <div className="reactNativeInner">
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube" id="gray"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>

                    </div>
                    </div>
                    <div className = "Apex">
                    <h3>APEX</h3>
                    <div className="apexInner">
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>
                    <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube" id="gray"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                    </div>

                    </div>
                    </div>
                    </div>
                    <div className="col-1-of-2">
                    <div className="composition">
                    <img src={javascript} alt="javascript" className="composition__photo composition__photo--p1"/>
                    <img src={salesforce} alt="salesforce" className="composition__photo composition__photo--p2"/>
                    <img src={react} alt="react" className="composition__photo composition__photo--p3"/>
                    <img src={sass} alt="sass" className="composition__photo composition__photo--p4"/>
                    <img src={vba} alt="vba" className="composition__photo composition__photo--p5"/>
                    <img src={html} alt="html" className="composition__photo composition__photo--p9"/>
                    <img src={css} alt="html" className="composition__photo composition__photo--p7"/>
                    <img src={sql} alt="html" className="composition__photo composition__photo--p8"/>
                    <img src={native} alt="html" className="composition__photo composition__photo--p6"/>
                    <img src={apex} alt="html" className="composition__photo composition__photo--p10"/>

                    </div>
                    </div>
                    </div>
                    </section>
                    </main>
                    </div>

                    : <div></div>

                }
                 {/*<div className="redWipe"/>*/}
                 {/*<div className="stagger-visualizer change"/>*/}
            </div>
        )
    }
}

export default MobileComp3;
