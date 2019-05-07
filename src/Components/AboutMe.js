import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { NavLink} from 'react-router-dom';






class AboutMe extends Component {
render(){
  return(
    <div id="whole">
  <nav className = "NavBar">
<NavLink exact={true} activeClassName='is-active' to ="/"><div className = "fancy about">
<p className="nav2">
Home
</p>
</div></NavLink>
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
<div className = "aboutMe">
<h1 className = "header">
So... How exactly did I go from Psychology to Computer Programing?
</h1>
<p className = "firstParagraph">

Whenever I tell anyone I was a Psychology major they always ask the same question... "So why are <i>YOU</i> coding" and I always give them the same answer "Because I love it". Unfortunately, I wasn’t raised in the most enriching environment (I grew up in public housing) so I wasn’t offered as many different opportunities as a lot of my peers. Many of my colleagues were introduced to programing and computer science at very early ages. Growing up I didn’t even know I could <i>be</i> a computer programmer. The only thing I knew about programming was what I saw on television or in movies. Basically, a child prodigy who one day purchased a calculator and built a website (I'm exaggerating). But I am saying this to say I never saw anyone learn to code so I thought either you couldn’t or it was just super hard. In terms of education, I always prided myself in being a very hard worker. I attended the top schools and worked to excel at everything I did. I was always very empathetic and wanted to help others by understanding them and I believe this is what drew me to psychology. I was able to experience a different way of living when I traveled to both Italy and Greece as a Student Ambassador. But through all of this I still had a side hobby... creating Myspace profile layouts. But it wasn’t until many years later that I learned that I was actually programming the whole time!

</p>
<p className = "secondParagraph">
When I got into college I was thrilled to be studying Psychology but shortly after I began wondering if it was the right thing for me. I had taken a game design class my sophomore year and had done exceedingly well. After having a conversation with my professor he advised me that I should explore computer science as a minor or even a double major. I began doing research and I stumbled across sites like codeacademy and code.org and began working on their projects and tutorials. I quickly realized that I was actually really good at it and it was something I enjoyed doing. I found myself thinking of solutions to my coding projects while I was in psychology class. This was when I realized if this was something I really wanted to pursue now was the time to do it. I started researching bootcamps and was thrilled when I was accepted at Flatiron. Honestly, I truly believe had I been introduced to the world of programming earlier I never would have majored in Psychology in the first place. But I also feel more equipped because I can utilize the skills I've learned in my psychology and logic classes and implement them as a programmer. It is important to be able to code efficiently but I believe the key component of being a great programmer is being able to collaborate effectively with anyone on anything and psychology has definitely taught me that.

</p>
</div>
    </div>
  )
}
}
export default AboutMe;
