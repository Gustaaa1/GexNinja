import styled from "styled-components";
import Moto from '../../assets/imgs/hero-bike.jpg'


export const ContainerHome = styled.div`


`

export const MainHome = styled.div`

  content: '';                        
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${Moto});
  background-size: cover;
  background-position: center;
  z-index: -1;
  background-image: linear-gradient(rgba(46, 1, 1, 0.45) 0%, #0c0c0c), url(${Moto});
  
h2 {
  display: flex;
  justify-content: center;
  margin-top: 270px;
  color: white;
  font-size: 95px;
  text-align: center;
  font-weight: 800;
  z-index: 2;
  letter-spacing: -0.5px;
  line-height: 1.05;
  font-family: "Montserrat", sans-serif;
}

.Dna {
  position: absolute;
  color:#eb2525 ;
  margin-top: 100px;
  z-index: 2;
  text-shadow:
  0 0 6px rgba(146, 10, 10, 0.9),
  0 0 14px rgba(182, 23, 23, 0.6),
  0 0 28px rgb(109, 1, 1);
  transition: text-shadow 100ms ease, transform 100ms ease;
  will-change: text-shadow, transform;
  letter-spacing: -0.20px;
}

p {
  display: flex;
  justify-content: center;
  color: #c9c9c9;
  font-size: 25px;
  text-align: center;
  margin-top: 120px;
  z-index: 2;
  font-family: "family-poppins", sans-serif;
}

button {
  margin-left: 1440px;
  margin-top: 30px;
  position: absolute;
  background-color: #eb2525;
  color: white;
  font-weight: 600;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 190px;
  border-radius: 10px;
  border: solid #eb2525 1px;
  transition: all 0.3s ease;
  z-index: 2;
}

button:hover {
  box-shadow: 0 0 5px #eb2525,
  0 0 10px #eb2525,
  0 0 20px #eb2525;
  cursor: pointer;
  transform: scale(1.05);
}

.Modelos {
  position: absolute;
  margin-left: 740px;
  font-size: 20px;
  width: 200px;
  margin-top: 40px;
  z-index: 2;
}

.Conosco {
  position: absolute;
  margin: 0;
  margin-left: 970px;
  font-size: 20px;
  margin-top: 40px;
  z-index: 2;
  color: #eb2525 ;
  background-color: black;
  height: 48px;
}

.AltaPeformace {
  position: absolute;
  margin-left: 880px;
  margin-top: 200px;
  width: 170px;
  height: 36px;
  border-radius: 20px;
  padding-left: 33px;
  padding-top: 9px;
  background-color: #eb25252a;
  color: #ff0000;
  z-index: 4;
  border: solid  #eb252550  1px;
}

.subinfo {
  position: absolute;
  display: flex;
  margin-top: 180px;
  gap: 160px;
  font-size: 45px;
  margin-left: 615px;
  color: #eb2525;
  z-index: 2;
  font-family: "Montserrat", sans-serif;
}

.subinfop{
  display: flex;
  justify-content: center;
  margin-left: 15px;
  margin-top: 125px;
  gap: 110px;
}
.Cliente {
  
  margin-left: 45px;
}
.subinfop p{
 font-size: 17px;
}

body {
  background-attachment: scroll !important;
  overflow-x: hidden;
}

@media (max-width: 480px) {
 
h2 {
  font-size: 60px;
  margin-top: 150px;
}

.Dna {
  margin-top: 50px;
}

ul {
  display: none; 
}

button {
  margin-left: 40%;
  width: 80%;
  max-width: 200px;
}

p {
  font-size: 15px;
  margin-top: 70px;
  padding: 0 20px;
}

.Modelos, 
.Conosco {
  position: relative;
  margin: 10px auto;
  margin-left: 110px;
  display: block;
  margin-top: 20px;
}

.Modelos {
  margin-top: 30px;

}

.subinfo {
  margin: 0;
  font-size: 30px;
  margin-top: 60px;
  margin-left: 37px;
  gap: 205px;
}

.Porcento {
  padding-bottom: 198px;
  position: absolute;
  margin-left: 145px;
  margin-top: 80px;
}

.subinfop {
  margin: 0;
  gap: 0px;
  margin-left: 10px;
  margin-top: 45px;
}

.Cliente {
  margin-left: 16px;
  margin-top: 150px;
}
.AltaPeformace {
  margin-left: 30px;
  display: none;

}
}

@media (max-width: 414px) {
  
h2 {
  font-size: 50px;
  margin-top: 150px;
}

.Dna {
  margin-top: 50px;
}

ul {
  display: none; 
}

button {
  margin-left: 50%;
  width: 80%;
  max-width: 200px;
}

p {
  font-size: 15px;
  margin-top: 70px;
  padding: 0 20px;
}

.Modelos, 
.Conosco {
  position: relative;
  margin: 10px auto;
  margin-left: 105px;
  display: block;
  margin-top: 20px;
}

.Modelos {
  margin-top: 30px;
}

.subinfo {
  margin: 0;
  font-size: 30px;
  margin-top: 60px;
  margin-left: 30px;
  gap: 200px;
}

.Porcento {
  padding-bottom: 198px;
  position: absolute;
  margin-left: 143px;
  margin-top: 80px;
}

.subinfop {
  margin: 0;
  gap: 0px;
  margin-left: 10px;
  margin-top: 45px;

}

.Cliente {

  margin-left: 16px;
  margin-top: 150px;
}

.AltaPeformace {
  margin-left: 30px;
  display: none;

}
}

@media (max-width: 390px) {

h2 {
  font-size: 50px;
}

.Dna {
  margin-top: 40px;
}

p {
  font-size: 14px;
}

.Modelos, 
.Conosco {
  position: relative;
  margin: 10px auto;
  display: block;
  margin-left: 100px;
  margin-top: 20px;
}

.Modelos {
  margin-top: 30px;
}

.subinfo {
  gap: 180px;
  margin-left: 27px;
}

.Porcento {
  margin-left: 135px;
}

.AltaPeformace {
  margin-left: 30px;
  display: none;

}
}

@media (max-width: 393px) {

h2 {
  font-size: 50px;
}

.Dna {
  margin-top: 40px;
}

p {
  font-size: 14px;
}

.Modelos, 
.Conosco {
  position: relative;
  margin: 10px auto;
  display: block;
  margin-left: 95px;
  margin-top: 20px;
}

.Modelos {
  margin-top: 30px;
}

.subinfo {
  gap: 180px;
  margin-left: 27px;
}

.Porcento {
  margin-left: 135px;
}

.AltaPeformace {
  margin-left: 30px;
  display: none;

}
}

@media (max-width: 375px) {
  height: 800px;
  

h2 {
  font-size: 50px;
}

.Dna {
  margin-top: 40px;
}

p {
  font-size: 13px;
}

.Modelos,  
.Conosco {
  position: relative;
  margin: 10px auto;
  display: block;
  margin-left: 90px;
  margin-top: 20px;
}

.Modelos {
  margin-top: 30px;
}

.subinfo {
  gap: 175px;
  margin: 0;
  margin-top: 60px;
  margin-left: 25px;
}

.Porcento {
  margin-left: 130px;
}

.AltaPeformace {
  margin-left: 30px;
  display: none;

}
}

@media (max-width: 360px){
  height: 800px;

h2 {
  font-size: 50px;
}

.Dna {
  margin-top: 40px;
}

p {
  font-size: 12px;
}

.Modelos,
.Conosco {
  position: relative;
  margin: 10px auto;
  display: block;
  margin-left: 80px;
  margin-top: 20px;
}

.Modelos {
  margin-top: 30px;
}

.subinfo {
  gap: 180px;
  margin: 0;
  margin-top: 60px;
  margin-left: 14px;
}

.Porcento {
  margin-left: 135px;
}

.AltaPeformace {
  margin-left: 30px;
  display: none;
}
}

@media (max-width: 320px) {

  height: 800px;

h2 {
  font-size: 40px;
}

.Dna {
  margin-top: 40px;
}

p {
  font-size: 11px;
}

.Modelos,
.Conosco {
  position: relative;
  margin: 10px auto;
  display: block;
  margin-left: 60px;
  margin-top: 20px;
}

.Modelos {
  margin-top: 30px;
}

.subinfo {
  gap: 160px;
  margin: 0;
  margin-top: 60px;
  margin-left: 6px;
}

.Porcento {
  margin-left: 120px;
}

.AltaPeformace {
  margin-left: 30px;
  display: none;

}
}
`

export const Modelos = styled.div`

  margin-top: 77px;
  background: #170E0E;
  background: linear-gradient(180deg, rgba(23, 14, 14, 1) 1%, rgba(13, 13, 13, 1) 33%, rgba(13, 13, 13, 1) 100%);
  height: 1080px;
  z-index: -1;

h1 {
  display: flex;
  justify-content:center;
  color: white;
  align-items: center;
  font-size: 60px;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  z-index: 2;
  padding-top: 150px;
  margin-right: 270px;
}

.Modelos {
  position: absolute;
  color: #eb2525;
  margin-top: 5px;
  font-size: 60px;
  margin-right: 280px;
  text-shadow:
  0 0 6px rgba(146, 10, 10, 0.9),
  0 0 14px rgba(182, 23, 23, 0.6),
  0 0 28px rgb(109, 1, 1);
  transition: text-shadow 100ms ease, transform 100ms ease;
  will-change: text-shadow, transform;
  letter-spacing: -0.20px;
  z-index: 2;
}

p {
  margin: 0;
  display: flex;
  justify-content: center;
  color: #c9c9c9;
  font-size: 21px;
  text-align: center;
  margin-top: 20px;
  z-index: 2;
  font-family: "family-poppins", sans-serif;
}

.Flex {
  display: flex ;
}

.MotoNinjaPrime{
  width: 421px;
  height: 605px;
  background-color:  #141414;
  border: solid #3a3a3a 1px;
  margin-top: 50px;
  margin-left: 300px;
  border-radius: 10px;
  z-index: 2;
}

.MotoNinjaGex{
  width: 421px;
  height: 605px;;
  background-color:  #141414;
  border: solid #3a3a3a 1px;
  margin-top: 50px;
  margin-left: 30px;
  border-radius: 10px;
  z-index: 2;
}

.MotoNinjaRed{
  width: 421px;
  height: 605px;
  background-color:  #141414;
  border: solid #3a3a3a 1px;
  margin-top: 50px;
  margin-left: 30px;
  border-radius: 10px;
  z-index: 2;
}
 

.MotoNinjaPrime, 
.MotoNinjaGex, 
.MotoNinjaRed{
  position:relative;
  border-radius:12px;
  overflow:hidden;
  transition:transform .24s ease,box-shadow .24s ease,border-color .24s ease;
}

.MotoNinjaPrime::before,
.MotoNinjaGex::before,
.MotoNinjaRed::before{
  content:"";
  position:absolute;
  inset:-12px;
  border-radius:14px;
  pointer-events:none;
  background:radial-gradient(60% 40% at 50% 10%, rgba(235,37,37,0.50), rgba(235, 37, 37, 0.219) 28%, transparent 52%);
  filter:blur(16px);
  z-index:0;
  transition:opacity .2s ease,transform .2s ease,filter .2s ease;
  opacity:0.98;
}


.MotoNinjaPrime>*{position:relative;z-index:0}

.MotoNinjaGex>*{position:relative;z-index:0}

.MotoNinjaRed>*{position:relative;z-index:0}


.MotoNinjaPrime:hover, .MotoNinjaGex:hover, .MotoNinjaRed:hover{
  transform:translateY(-8px);
  border-color:rgba(235,37,37,0.30);
  box-shadow:0 20px 50px rgba(0, 0, 0, 0.64),0 0 20px rgba(235,37,37,0.24),0 0 40px rgba(235,37,37,0.26);
  border: solid #3a3a3a 1px;
}

.MotoNinjaPrime:hover::before, .MotoNinjaGex:hover::before, .MotoNinjaRed:hover::before{
  transform:scale(1.02);
  filter:blur(20px);
  opacity:1;
}

.MotoNinjaPrime img, .MotoNinjaGex img, .MotoNinjaRed img{
  margin-left:1px;
  width:420px;
  height:260px;
  margin-top:1px;
  transform:scale(1.02);
  transition:transform .60s cubic-bezier(.2,.8,.2,1);
  transform-origin:center;
  object-fit:cover;
}

/* ajustar as sonbras das motos */
.MotoNinjaPrime::after, .MotoNinjaGex::after, .MotoNinjaRed::after{
  content:"";
  position:absolute;
  top:20px;
  left:0;
  width:100%;
  height:260px; 
  background:linear-gradient(to bottom, rgba(0,0,0,0) 0%,#141414 100%);
  pointer-events:none;
  z-index:0;
  
}

.MotoNinjaPrime:hover img, .MotoNinjaGex:hover img, .MotoNinjaRed:hover img{
  transform:scale(1.12) translateY(-4px);
  cursor:pointer;
}

.MotoNinjaPrime h2, .MotoNinjaGex h2, .MotoNinjaRed h2 {
  margin: 0;
  font-size: 25px;
  margin-top: 30px;
  margin-right: 250px;
  z-index: 2;
  
} 

.MotoNinjaPrime p, .MotoNinjaGex p, .MotoNinjaRed p {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  margin-right: 70px;
  margin-top: 10px;
  z-index: 2;
}

.MotoNinjaPrime button, .MotoNinjaGex button, .MotoNinjaRed button {
  margin-top: 180px;
  margin-left: 20px;
  width: 370px;
  height: 40px;
  z-index: 2;
}

.MotoNinjaPrime p {
  margin-left: 20px;
  text-align: start;

}

.MotoNinjaGex p {
  margin-right: 35px;
}

.MotoNinjaRed p{
  margin: 0;
  margin-right: 50px;
  margin-top: 10px;
  text-align: start;
}

.MotoNinjaRed h2 {
  margin-left: 25px;
}

.MotoNinjaRed button {
  margin-top: 170px;
}

body {
  background-attachment: scroll !important;
  overflow-x: hidden;
}

@media (max-width: 480px) {
  margin-top: 26px;
  height: 2500px;

h1 {
  padding-top: 70px;
  margin-right: 0;
  font-size: 60px;
}

.Modelos {
  margin-left: 210px;
  margin-top: 140px;
}

p {
  margin-top: 90px;
  font-size: 20px;
}

.Flex {
  display: block;
}

.MotoNinjaPrime,
.MotoNinjaGex,
.MotoNinjaRed {
  margin: 0;
  margin-top: 60px;
  margin-left: 5px;
}

.MotoNinjaPrime button,
.MotoNinjaGex button,
.MotoNinjaRed button {
  position: relative;
  left: auto;
  margin-left: 40px;
  width: 80%;
  max-width: 370px;
  margin-top: 160px;
}

.MotoNinjaGex button{
  margin-top: 180px;

}

.MotoNinjaPrime p {
  margin-left: 3px;
}
}

@media (max-width: 414px) {
  
.MotoNinjaPrime,
.MotoNinjaGex,
.MotoNinjaRed,
.MotoNinjaPrime img,
.MotoNinjaGex img,
.MotoNinjaRed img {
  width: 405px;
}

.MotoNinjaPrime h2,
.MotoNinjaGex h2,
.MotoNinjaRed h2 {
  font-size: 19px;
  margin-left: 29px;
}

.MotoNinjaGex h2 {
  margin-left: 10px;
}

.MotoNinjaPrime h2 {
  margin-right: 200px;
  display: flex;
  font-size: 19px;
  margin: 0;
  margin-top: 50px;
  margin-right: 255px;
}

.MotoNinjaPrime p,
.MotoNinjaGex p,
.MotoNinjaRed p {
  font-size: 14px;
  text-align: start;
}

.MotoNinjaPrime p {
  margin-left: 5px;
}

.MotoNinjaRed button {
  margin-top: 165px;

}
}

@media (max-width: 480px) {

.MotoNinjaPrime,
.MotoNinjaGex,
.MotoNinjaRed{
  width: 405px;
  margin-left: 10px;

}
.MotoNinjaPrime img,
.MotoNinjaGex img,
.MotoNinjaRed img {
  width: 405px;
}

}

@media (max-width: 393px) {

.MotoNinjaPrime,
.MotoNinjaGex,
.MotoNinjaRed,
.MotoNinjaPrime img,
.MotoNinjaGex img,
.MotoNinjaRed img {
  width: 385px;
}

.MotoNinjaPrime h2,
.MotoNinjaGex h2,
.MotoNinjaRed h2 {
  font-size: 17px;
  margin-left: 20px;
}

.MotoNinjaPrime h2 {
  padding-left: 5px;
}

.MotoNinjaGex h2 {
  margin-left: 5px;
}

.MotoNinjaPrime p,
.MotoNinjaGex p,
.MotoNinjaRed p {
  font-size: 14px;
  text-align: start;
}

.MotoNinjaPrime p {
  margin-left: 5px; 
}
}

@media (max-width: 390px) {
  
.MotoNinjaPrime,
.MotoNinjaGex,
.MotoNinjaRed {
  width: 380px;
}

.MotoNinjaPrime img,
.MotoNinjaGex img,
.MotoNinjaRed img {
  width: 400px;
}

.MotoNinjaPrime h2,
.MotoNinjaGex h2,
.MotoNinjaRed h2 {
  font-size: 20px;
  margin-left: 35px;
}

.MotoNinjaPrime h2 {
  display: flex;
  font-size: 19px;
  margin: 0;
  margin-top: 50px;
  margin-right: 230px;
 }

.MotoNinjaRed h2 {
  display: flex;
  font-size: 19px;
  margin: 0;
  margin-top: 50px;
  margin-right: 210px;
}

.MotoNinjaGex h2 {
  margin-left: 27px;
  
}

.MotoNinjaPrime p,
.MotoNinjaGex p,
.MotoNinjaRed p {
  font-size: 14px;
  text-align: start;
  margin-left: 10px;
}

.MotoNinjaPrime button,
.MotoNinjaGex button,
.MotoNinjaRed button {
  position: relative;
  left: auto;
  margin-left: 35px;   
  width: 80%;
  max-width: 370px;
  margin-top: 160px;
}

.MotoNinjaGex button {
  margin-top: 200px;
}
}

@media (max-width: 375px) {

.MotoNinjaPrime,
.MotoNinjaGex,
.MotoNinjaRed{
  width: 350px;
  margin-left: 13px;
}
.MotoNinjaPrime img,
.MotoNinjaGex img,
.MotoNinjaRed img {
  width: 350px;
}

.MotoNinjaPrime h2{
  margin-left: 15px;
  
}
.MotoNinjaGex h2{
  display: flex;
  font-size: 19px;
  margin: 0;
  margin-top: 50px;
  margin-right: 210px;
}

.MotoNinjaRed h2 {
  display: flex;
  font-size: 19px;
  margin: 0;
  margin-top: 50px;
  margin-right: 190px;
}

.MotoNinjaPrime p,
.MotoNinjaGex p,
.MotoNinjaRed p {
  font-size: 13px;
  text-align: start;
}

.MotoNinjaPrime button,
.MotoNinjaGex button,
.MotoNinjaRed button {
  margin-top: 160px;
}

.MotoNinjaGex button {
  margin-top: 180px;

}
}

@media (max-width: 360px) {
  background-attachment: scroll !important;
  overflow-x: hidden;
   
.MotoNinjaPrime,
.MotoNinjaGex,
.MotoNinjaRed {
  width: 340px;
  margin-left: 11px;
}

.MotoNinjaPrime img,
.MotoNinjaGex img,
.MotoNinjaRed img {
  width: 340px;
}

.MotoNinjaPrime h2,
.MotoNinjaGex h2,
.MotoNinjaRed h2 {
  display: flex;
  font-size: 19px;
  margin: 0;
  margin-top: 40px;
  margin-right: 230px;
  transform: translate(20px);
}

.MotoNinjaPrime h2{
  margin-right:224px;
}

.MotoNinjaGex h2 {
  margin-right:224px;
}

.MotoNinjaPrime p,
.MotoNinjaGex p,
.MotoNinjaRed p {
  display: flex;
  font-size: 15px;
  margin: 0;
  margin-top: 14px;
}

.MotoNinjaGex p,
.MotoNinjaPrime p {
  margin-left: 14px;
}

.MotoNinjaPrime button,
.MotoNinjaGex button,
.MotoNinjaRed button {
  margin-top: 150px;
}
}
`
export const FooterHome = styled.div`
  height: 950px;
  background: #170E0E;
  background: linear-gradient(180deg, #3a0000 1%, rgba(13, 13, 13, 1) 33%, rgba(13, 13, 13, 1) 100%);
  height: 1080px;
  z-index: -1;;

h1 {
  display: flex;
  justify-content:center;
  color: white;
  align-items: center;
  font-size: 55px;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  z-index: 2;
  padding-top: 140px;
  
}

.Kawazaki {
  color: #eb2525;
  margin-left: 15px;
  text-shadow:
  0 0 6px rgba(146, 10, 10, 0.9),
  0 0 14px rgba(182, 23, 23, 0.6),
  0 0 28px rgb(109, 1, 1);
  transition: text-shadow 100ms ease, transform 100ms ease;
  will-change: text-shadow, transform;
  letter-spacing: -0.20px;
  z-index: 2;
}

p {
  margin: 0;
  display: flex;
  justify-content: center;
  color: #c9c9c9;
  font-size: 21px;
  text-align: center;
  margin-top: 20px;
  z-index: 2;
  font-family: "family-poppins", sans-serif;
}

@media (max-width: 480px) {

h1 {
  text-align: center;
  display: inline-block;
  margin-left: 30px;
  font-size: 40px;
  padding-top: 80px;
}

.Kawazaki {
  padding-right: 15px;
  }

p {
  width: 370px;
  transform: translateX(25px);
  }
}

@media (max-width: 414px) {

h1 {
  text-align: center;
  display: inline-block;
  padding-left: 15px;
  font-size: 35px;
  padding-top: 60px;
}

p {
  font-size: 17px;
  width: 320px;
  transform: translateX(45px);
  }
}

@media (max-width: 393px) {

h1 {
  text-align: center;
  display: inline-block;
  margin-left: 10px;
  font-size: 37px;
  padding-top: 70px;
}

p {
  width: 320px;
  transform: translateX(35px);
  }
}

@media (max-width: 390px) {

h1 {
  text-align: center;
  display: inline-block;
  margin-left: 15px;
  font-size: 37px;
  padding-top: 70px;
}

p {
  width: 320px;
  transform: translateX(40px);
  }
}

@media (max-width: 375px) {

h1 {
  text-align: center;
  display: inline-block;
  padding-left: 10px;
  font-size: 35px;
  padding-top: 60px;
}

p {
  width: 320px;
  transform: translateX(25px);
  font-size: 18px;
  margin-top: 15px;
  }
}




`