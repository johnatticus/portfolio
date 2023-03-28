import "./contact.css";
// import Phone from "../../img/phone.png";
import Quizgame from "../../img/quizgame.png";
import SN from "../../img/socialnetwork.png";
import Eats from "../../img/economiceats.png"
import Folder from "../../img/folder_closed.png"
import { useContext, useRef, useState } from "react";
import Nav from "../nav/Nav";
// import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";

const Contact = () => {
  return (
    <>
    <Nav />
    <div className="ppp">
      <div className="p-browser">
        <div className="p-circle-r"></div>
        <div className="p-circle-y"></div>
        <div className="p-circle-g"></div>
      </div>
    <div class="bd-example">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="5000">
    <img class="d-block mx-auto" src={Quizgame} alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
    <img class="d-block mx-auto" src={SN} alt=""/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
    <img class="d-block mx-auto" src={Eats} alt="" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <img src={Folder} alt="" />
    <p class="folder-text"><span>About</span></p>
{/* <script>

$("#carouselExampleCaptions").carousel({
  interval: 1000,
  pause: true
});

$('#carouselExampleCaptions').hover(function(){
   $("#carouselExampleCaptions").carousel('cycle')
},function(){
   $("#carouselExampleCaptions").carousel('pause')
});

</script> */}
</div>
</>

  );
};

export default Contact;
