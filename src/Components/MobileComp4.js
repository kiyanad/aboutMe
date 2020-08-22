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
        HTML: false,
        javascript: false
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

            }




    }

    htmlclicked = () => {

        console.log("here")
         this.setState({
             HTML: true,
             javascript: false
         })
    }

    javascriptclicked = () => {

         this.setState({
             javascript: true,
             HTML: false
         })
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
        console.log(this.state.HTML)
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
                    {this.state.HTML?
                    <div className="" id="up">
                    <div className="html">
                    <div id="ui">
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                        <div class="text">HTML</div>
                    </div>
                </div>
                    </div>: 
                    <div></div>
    }
                        {this.state.javascript?
                    <div className="" id="up">
                    <div className="html">
                    <div id="ui">
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                        <div class="text">Javascript</div>
                    </div>
                    </div>
                    </div>: 
                    <div></div>
    }
    {this.state.react?
                    <div className="" id="up">
                    <div className="html">
                    <h3>React</h3>
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
                    </div>: 
                    <div></div>
    }

                    <div className="col-1-of-2">
                    <div className="composition">
                    <img src={javascript} alt="javascript" className="composition__photo composition__photo--p1" onClick={this.javascriptclicked}/>
                    <img src={salesforce} alt="salesforce" className="composition__photo composition__photo--p2" onClick={this.salesforceclicked}/>
                    <img src={react} alt="react" className="composition__photo composition__photo--p3" onClick={this.reactclicked}/>
                    <img src={sass} alt="sass" className="composition__photo composition__photo--p4" onClick={this.sassclicked}/>
                    <img src={vba} alt="vba" className="composition__photo composition__photo--p5" onClick={this.vbaclicked}/>
                    <img src={html} alt="html" className="composition__photo composition__photo--p9" onClick={this.htmlclicked}/>
                    <img src={css} alt="html" className="composition__photo composition__photo--p7" />
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
