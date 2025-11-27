import styled from "styled-components";



export const ContainerHeader = styled.div`

  font-family:"poppins", sans-serif;
`

export const MainHeader = styled.div`
  position: fixed;
   
img {

  position: absolute;
  margin-left: 180px;
  margin-top: 20px;
  border-radius: 100px;
  z-index: 3;
}

h1 {
     
  position: absolute;
  color: #eb2525;
  margin-left: 280px;
  z-index: 2;
  margin-top: 30px;
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
    
ul {
  display: flex;
  justify-content: center;
  gap: 45px;
  position: absolute;
  margin-left: 780px;
  z-index: 2;
  margin-top: 40px;
}

li {
  color: #ffffff;
  list-style: none;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
}

li:hover {
  color: #eb2525;
  transform: scale(1.1);
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
   
.Roda {

  position: absolute;
  margin-left: 197px;
  margin-top: 47px;
  border-radius: 100px;
  animation: moveBackAndForth 4s linear infinite, rotateWheels 0.5s linear infinite; 
  z-index: 2;
}

@keyframes moveForward {
  0% {
  transform: translateX(0);
  }
  100% {
  transform: translateX(100px); 
  }
}

@keyframes rotateWheels {
  0% {
  transform: rotate(0deg);
  }
  100% {
  transform: rotate(360deg); 
  }
}
   
  /* Responsividade */

@media (max-width: 768px) {

img {
  margin-left: 50px;
  width: 45px;
}

h1 {
  margin-left: 105px;
  font-size: 20px;
}

button {
  display: none; 
}
}

@media (max-width: 480px) {

img {
    margin-left: 20px;
    width: 95px;
}

h1 {
  margin-left: 115px;
  font-size: 30px;
}

button {
  margin-left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 200px;
}

.Roda {
  margin: 0;
  margin-top: 47px;
  margin-left: 35px;
  width: 25px;
}
}

                /* Ajuste para telas muito pequenas */
@media (max-width: 390px) {
}


@media (max-width: 360px) {

}

`
