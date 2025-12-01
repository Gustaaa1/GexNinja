import styled from "styled-components";


export const ContainerHamburguer = styled.div`



`

export const MenuHamburguer = styled.div`

.hamburger {
  position: fixed;
  display: none;
  margin-left: 400px;
  top: 26px;
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  flex-direction: column;
  gap: 6px;
  z-index: 60;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.22s ease, opacity 0.18s ease;
}

.hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

.mobile-menu {
  position: fixed;
  display: none;
  top: 90px;
  right: 12px;
  left: 12px;
  background: #000;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.6);
  z-index: 55;
}

.mobile-menu.open {
  display: block;
}

.mobile-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mobile-menu a { text-decoration: none; color: inherit; }
.mobile-menu li { padding: 8px 6px; color: #fff; }


@media (max-width: 768px) {

  ul { display: none; }            
  button { display: none;}        

.hamburger { display: flex; }    
}

@media (max-width: 480px) {

.hamburger {
  margin-left: 390px;
  margin-top: 10px;
}
}

@media (max-width: 435px) {

.hamburger {
  margin-left: 350px;
  margin-top: 10px;
}
}

@media (max-width: 414px) {

.hamburger {
  margin-left: 350px;
  margin-top: 10px;
}
}

@media (max-width: 412px) {

.hamburger {
  margin-left: 350px;
  margin-top: 10px;
}
}

@media (max-width: 393px) {

.hamburger {
  margin-left: 340px;
  margin-top: 10px;
}
}

@media (max-width: 390px) {

.hamburger {
  margin-left: 330px;
  margin-top: 10px;
}
}

@media (max-width: 375px) {
    
.hamburger {
  margin-left: 320px;
  margin-top: 10px;
}
}

@media (max-width: 360px) {
    
.hamburger {
  margin-left: 290px;
  margin-top: 10px;
}
}

@media (max-width: 320px) {
    
.hamburger {
  margin-left: 270px;
  margin-top: 10px;
}
}
`