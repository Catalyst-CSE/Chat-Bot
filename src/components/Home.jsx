import React, { Component } from 'react'
 
export class Home extends Component {
  render() {
    return (
      <div className="main-container">

       {/*Card number 1*/}

        <div class="container" style={{marginTop:"35px",display:'flex'}}>
        <div class="card" style={{width:'30rem',background:"#FF9933"}}>
        <div class="card-body">
        <center><h2 class="card-title"><u>Overview</u></h2></center>
        <p class="card-text" style={{fontWeight:'bold',fontSize:'1.1rem',fontFamily:'Raleway, Comic Sans MS, cursive;',textAlign:'justify'}}>This portal is an initiative of Government of India to facilitate victims/complainants to report crime complaints online. This portal caters to complaints pertaining to crimes only with special focus on crimes against women and children. Complaints reported on this portal are dealt by law enforcement agencies/ police based on the information available in the complaints. It is imperative to provide correct and accurate details while filing complaint for prompt action.</p>
        <a href="https://bprd.nic.in/" class="btn btn-primary">Bureau of Police Research & Development Portal
        </a>
        </div>
        </div>
{/*Card number 2*/}

        <div class="card" style={{width:'30rem',background:"#FFFFFF"}}>
        <div class="card-body">
        <center><h2 class="card-title"><u>Women Saftey</u></h2></center>
        <p class="card-text" style={{fontWeight:'bold',fontSize:'1.1rem',fontFamily:'Raleway, Comic Sans MS, cursive;',textAlign:'justify'}}>The Complaints and Invetigation Cell of the commission processes the complaints received oral, written or suo moto under Section 10 of the NCW Act.

        The complaints received relate to domestic violence, harassment, dowry, torture, desertion, bigamy, rape, refusal to register FIR, cruelty by husband, deprivation, gender discrimination and sexual harassment at work place.
        <br></br>
        <b>National women helpline number is 181.</b>
        
        </p>
        <a href="https://bprd.nic.in/" class="btn btn-primary">Bureau of Police Research & Development Portal
        </a>
        </div>
        </div>

{/*Card number 3*/}

        <div class="card" style={{width:'30rem',background:"#138808"}}>
        <div class="card-body">
<center><h2 class="card-title"><u>Children Saftey</u></h2></center>
        <p class="card-text" style={{fontWeight:'bold',fontSize:'1.1rem',fontFamily:'Raleway, Comic Sans MS, cursive;',textAlign:'justify'}}>India has a wide range of laws to protect children and child protection is increasingly accepted as a core component of social development. The challenge is in implementing the laws due to inadequate human resource capacity on the ground and quality prevention and rehabilitation services.Violence takes place in all settings: at home, school, child care institutions, work and in the community. Often violence is perpetrated by someone known to the child.</p>
        <a href="https://bprd.nic.in/" class="btn btn-primary">Bureau of Police Research & Development Portal
        </a>
        </div>
        </div>




        </div> 
        <center style={{marginTop:'20px'}}><h1 style={{color:'white'}}>Stop Crime Against Women & Children</h1></center>

        {/*Image slider*/}
        <div style={{display:"flex"}} class="container">
        
        <div class="image1"></div>
        <div class="image2"></div>
        <div class="image3"></div>
         
        
        </div>
        <br></br>
        
        <br></br>
         
       {/*Navbar*/}
       <div class="navbar container-fluid" style={{position:'fixed'}}>
        <p style={{fontWeight:'bold'}}>This website belongs to "Bureau of Police Research and Development", Ministry of Home Affairs, Govt. Of India Site Designed, Developed and Hosted by students of Shri Mmata Vaishno Devi University.</p>
       </div>



          </div>

    )
  }
}

export default Home;