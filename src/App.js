import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Progress.css';


import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { NavLink} from 'react-router-dom'
import CountUp from 'react-countup';
import FlipMove from 'react-flip-move';
import Mobile from './Components/Mobile';
import MobileComp from './Components/MobileComp';






class App extends Component {
  state = {
    allposts: [],
    lastpost: [],
    width: window.innerWidth,

  }
  componentDidMount(){
    // FETCH FOR MEDIUM BLOG POST
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kiyanadunlock")
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

        componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}

// make sure to remove the listener
// when the component is not mounted anymore
componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};

    // document.querySelector(".javascript").classList.toggle("show")
    // document.querySelector(".reReact").classList.toggle("show")
    // document.querySelector(".htmlBar").classList.toggle("show")
    // document.querySelector(".cc").classList.toggle("show")


// C

// FIRST
// setTimeout(()=>{
//
// document.querySelector(".script").classList.toggle("popout")
// document.querySelector(".c").classList.toggle("popout")
// setTimeout(()=>{
//   document.querySelector(".script").classList.toggle("slower")
//   document.querySelector(".c").classList.toggle("slower")
//
//   document.querySelector(".script").classList.toggle("move2")
//   document.querySelector(".c").classList.toggle("move")},500)
//
//   setTimeout(()=>{
//     document.querySelector(".script").classList.toggle("popout")
//     document.querySelector(".c").classList.toggle("popout")},400)
// },200)
//
// // SECOND
//
// setTimeout(()=>{
//
// document.querySelector(".c").classList.toggle("popout")
// document.querySelector(".css").classList.toggle("popout")
// setTimeout(()=>{
//   document.querySelector(".c").classList.toggle("move2")
//   document.querySelector(".css").classList.toggle("move")},1000)
//
//   setTimeout(()=>{
//     // document.querySelector(".c").classList.toggle("popout")
//     document.querySelector(".css").classList.toggle("popout")},1800)
// },400)
//
// // THIRD
//
// setTimeout(()=>{
//
// // document.querySelector(".c").classList.toggle("popout")
// document.querySelector(".script").classList.toggle("popout")
// setTimeout(()=>{
//   document.querySelector(".c").classList.toggle("move3")
//   document.querySelector(".script").classList.toggle("move3")},1000)
//
//   setTimeout(()=>{
//     document.querySelector(".c").classList.toggle("popout")
//     document.querySelector(".script").classList.toggle("popout")},2000)
// },100)
//
// // End C
//
//     document.querySelector(".progressContainer").classList.toggle("popout")
//     document.querySelector(".react").classList.toggle("popout")
//     setTimeout(()=>{
//       document.querySelector(".progressContainer").classList.toggle("move")
//       document.querySelector(".react").classList.toggle("move")},500)
//
//       setTimeout(()=>{
//         document.querySelector(".progressContainer").classList.toggle("popout")
//         document.querySelector(".react").classList.toggle("popout")},900)
//
//   setTimeout(()=>{
//
//   document.querySelector(".ruby").classList.toggle("popout")
//   document.querySelector(".java").classList.toggle("popout")
//   setTimeout(()=>{
//     document.querySelector(".ruby").classList.toggle("slow")
//     document.querySelector(".java").classList.toggle("slow")
//     document.querySelector(".ruby").classList.toggle("move")
//     document.querySelector(".java").classList.toggle("move")},500)
//
//     setTimeout(()=>{
//       document.querySelector(".ruby").classList.toggle("popout")
//       document.querySelector(".java").classList.toggle("popout")},900)
// },300)
// //
// setTimeout(()=>{
//
// document.querySelector(".ruby").classList.toggle("popout")
// document.querySelector(".html").classList.toggle("popout")
// setTimeout(()=>{
//   document.querySelector(".html").classList.toggle("slow")
//   document.querySelector(".ruby").classList.toggle("move2")
//   document.querySelector(".html").classList.toggle("move")},500)
//
//   setTimeout(()=>{
//     document.querySelector(".ruby").classList.toggle("popout")
//     document.querySelector(".html").classList.toggle("popout")},900)
// },1000)
// //
//
// //
// setTimeout(()=>{
//
// document.querySelector(".html").classList.toggle("popout")
// document.querySelector(".react").classList.toggle("popout")
// setTimeout(()=>{
//   document.querySelector(".react").classList.toggle("slower")
//   document.querySelector(".html").classList.toggle("slower")
//   document.querySelector(".html").classList.toggle("move2")
//   document.querySelector(".react").classList.toggle("move2")},1000)
//
//   setTimeout(()=>{
//     document.querySelector(".html").classList.toggle("popout")
//     document.querySelector(".react").classList.toggle("popout")},1800)
// },800)
// //
//
//
// //
// setTimeout(()=>{
//
// document.querySelector(".java").classList.toggle("popout")
// document.querySelector(".react").classList.toggle("popout")
// setTimeout(()=>{
//   document.querySelector(".java").classList.toggle("move2")
//   document.querySelector(".react").classList.toggle("move3")},1000)
//
//   setTimeout(()=>{
//     document.querySelector(".java").classList.toggle("popout")
//     document.querySelector(".react").classList.toggle("popout")},2000)
// },2000)
//
// setTimeout(()=>{
//
// document.querySelector(".python").classList.toggle("popout")
// setTimeout(()=>{
//   document.querySelector(".python").classList.toggle("slowly1")
//   document.querySelector(".python").classList.toggle("move")},1000)
//
//   setTimeout(()=>{
//     document.querySelector(".python").classList.toggle("popout")},2000)
// },200)
//
// setTimeout(()=>{
//
// document.querySelector(".python").classList.toggle("popout")
// setTimeout(()=>{
//   document.querySelector(".python").classList.toggle("slowly2")
//   document.querySelector(".python").classList.toggle("move2")},1000)
//
//   setTimeout(()=>{
//     document.querySelector(".python").classList.toggle("popout")},2000)
// },3000)
// //
// setTimeout(()=>{
//
// document.querySelector(".ruby").classList.toggle("popout")
// document.querySelector(".script").classList.toggle("popout")
// setTimeout(()=>{
//   document.querySelector(".ruby").classList.toggle("move3")
//   document.querySelector(".script").classList.toggle("move4")},1000)
//
//   setTimeout(()=>{
//     document.querySelector(".ruby").classList.toggle("popout")
//     document.querySelector(".script").classList.toggle("popout")},1800)
// },1400)
//
// setTimeout(()=>{
//
// document.querySelector(".ruby").classList.toggle("popout")
// setTimeout(()=>{
//   document.querySelector(".ruby").classList.toggle("move4")},1000)
//
//   setTimeout(()=>{
//     document.querySelector(".ruby").classList.toggle("popout")},1800)
// },1900)
// //
// setTimeout(()=>{
//
// document.querySelector(".html").classList.toggle("popout")
// document.querySelector(".script").classList.toggle("popout")
// setTimeout(()=>{
//   document.querySelector(".html").classList.toggle("move3")
//   document.querySelector(".script").classList.toggle("move5")},1000)
//
//   setTimeout(()=>{
//     document.querySelector(".html").classList.toggle("popout")
//     document.querySelector(".script").classList.toggle("popout")},1800)
// },1400)
// //
// setTimeout(()=>{
//
// document.querySelector(".css").classList.toggle("popout")
// document.querySelector(".script").classList.toggle("popout")
// setTimeout(()=>{
//   document.querySelector(".script").classList.toggle("slower")
//   document.querySelector(".css").classList.toggle("slower")
//   document.querySelector(".css").classList.toggle("move2")
//   document.querySelector(".script").classList.toggle("move6")},1000)
//
//   setTimeout(()=>{
//     document.querySelector(".css").classList.toggle("popout")
//     document.querySelector(".script").classList.toggle("popout")},1800)
// },1900)
// }

render(){
  const { width } = this.state;
const isMobile = width <= 500;
  return (
    <div >
    {isMobile? <Mobile/>:
    <MobileComp/>}


</div>
  );
}
}
export default App;


// <div className="progress">
// <div className = "progressContainer script">
// <div className="progress-Language"><p className="lang">Javascript</p></div>
// <div className="progressBar">
// <div className="myProgress javascript jscript"/>
// <CountUp className="sppp" end={82} duration={7} />
//
// </div>
// </div>
// <button className="click" onClick={this.move}>grws</button>
//
// <div className = "progressContainer react">
// <div className="progress-Language">React</div>
// <div className="progressBar">
// <div className="myProgress javascript reReact"/>
// <CountUp className="sppp" end={78} duration={7} />
//
// </div>
// </div>
// <div className = "progressContainer ruby">
// <div className="progress-Language">Ruby</div>
// <div className="progressBar">
// <div className="myProgress javascript"/>
// <CountUp className="sppp" end={66} duration={7}/>
//
// </div>
// </div>
// <div className = "progressContainer html">
// <div className="progress-Language">HTML5</div>
// <div className="progressBar">
// <div className="myProgress javascript htmlBar"/>
// <CountUp className="sppp" end={71} duration={7} />
//
// </div>
// </div>
// <div className = "progressContainer css">
// <div className="progress-Language">CSS</div>
// <div className="progressBar">
// <div className="myProgress javascript"/>
// <CountUp className="sppp" end={84} />
//
//
// </div>    </div>
// <div className = "progressContainer python">
// <div className="progress-Language">Python</div>
// <div className="progressBar">
// <div className="myProgress javascript"/>
// <CountUp className="sppp" end={22} />
//
// </div>    </div>
// <div className = "progressContainer java">
// <div className="progress-Language">Java</div>
// <div className="progressBar">
// <div className="myProgress"/>
// <CountUp className="sppp" end={16} />
//
// </div>    </div>
// <div className = "progressContainer c">
// <div className="progress-Language">C#</div>
// <div className="progressBar">
// <div className="myProgress javascript cc"/>
// <CountUp className="sppp" end={11} />
//
// </div>    </div>
//
//
//
// <FlipMove typeName={null}>
// <div key="a">Hello world</div>
// </FlipMove>
// </div>




// {isMobile? <Mobile /> :
//   <div className="Main">
//   <nav className = "NavBar">
//     <NavLink exact={true} activeClassName='is-active' to ="/">
//       <div className = "fancy">
//         <p className="nav2">
//           Home
//         </p>
//       </div>
//     </NavLink>
//     <NavLink activeClassName='is-active' to='/aboutme'>
//       <div className = "fancy">
//         <p className="nav">
//           About Me
//         </p>
//       </div>
//     </NavLink>
//     <NavLink activeClassName='is-active' to='/goals'>
//       <div className = "fancy">
//         <p className="nav2">
//           Goals
//         </p>
//       </div>
//     </NavLink>
//     <NavLink activeClassName='is-active' to='/projects'>
//       <div className = "fancy">
//         <p className="nav2">
//           Projects
//         </p>
//       </div>
//     </NavLink>
//     <div className = "fancy">
//       <p className="nav2">
//         GitHub
//       </p>
//     </div>
//     <NavLink activeClassName='is-active' to='/flatiron'>
//       <div className = "fancy">
//         <p className="nav">
//           Flatiron School
//         </p>
//       </div>
//     </NavLink>
//   </nav>
//   <div className = "mainContainer">
//   <div className="secondContainer">
//     <div className ="techContainer">
//       <h1 className="myName">
//         Kiyana Dunlock
//       </h1>
//       <h3 className = "portfolio">
//         Tech Portfolio
//       </h3>
//       <div className ="computer" />
//     </div>
//
// </div>
//
//     <div className = "entryContainer">
//       <h2 className = "Entry">
//         Latest Blog Entry
//       </h2>
//   <div className = "latestEntry">
//     <h1 className = "title">
//       {this.state.lastpost.title}
//     </h1>
//     <h5 className="author">
//       Author: {this.state.lastpost.author}
//     </h5>
//     <p className="content">
//       <img className = "thumbnail" src = {`${this.state.lastpost.thumbnail}`} />
//       <br />
//       <br />
//       <a className="link" href = {`${this.state.lastpost.link}`}>
//         Check it out on my Medium blog here!
//       </a>
//       <p className = "published">
//         Published on: {this.state.date}
//       </p>
//     </p>
//   </div>
// </div>
//
// </div>
// <div id="footer">
// <img id="copy" src="https://www.alt-codes.net/images/copyright-symbol.png" /> <p id="foot">2019 Kiyana Dunlock</p>
// </div>
// </div>}
