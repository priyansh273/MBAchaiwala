import IntroVideo from "./Components/IntroVideo";
import Section from "./Components/Section"
import data from "./Data/data.json"
import freshTopic2Img from "./Assets/story.png"
import tedtalksimg from "./Assets/in-the-news.gif"
import franchiseimg from "./Assets/franchise.gif"
import mapimg from "./Assets/locations.png"
import coursesimg from "./Assets/image2.png"
import albumimg from "./Assets/mba-cares.gif"
import baratimg from "./Assets/image1.png"
import chaiwalaimg from "./Assets/image3.png"
import Footer from "./Components/Footer";
import Misc from "./Components/Misc";
import freshTopicImg from "./Assets/academy.png"

import "./Styles/App.scss";
import "./Styles/intro.scss";
import "./Styles/footer.scss";
import "./Styles/section.scss";
import "./Styles/mediaQuery.scss";
import "./Styles/misc.scss";
import { useEffect } from "react";


// $yellow:#fff100;
// $pink:#ed1e79;
// $red:#d20120;
// $white:#fff;
// $brown:#6d3d0f;\

const yellow = "#fff100" ,pink="#ed1e79", white="#fff", brown="#6d3d0f";

function App() {
  const{freshTopic,freshTopic2,tedTalks, franchise, map, courses,barat, album,chaiwala}=data;

  const dotCursor = (e)=>{
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;


    const element = e.target;
    if(element.getAttribute("data-cursorpointer")){
      cursor.classList.add("cursorhover")
    }
    else if (element.getAttribute("data-cursorpointermini")){
      cursor.classList.add("cursorhovermini")
    }
    else {
      cursor.classList.remove("cursorhover")
      cursor.classList.remove("cursorhovermini")
    }
  };

  useEffect(() =>{
    window.addEventListener("mousemove",dotCursor);
    return() => {
      window.removeEventListener("mousemove",dotCursor);
    }
  }, [])

    return <>
    <IntroVideo />
{/* FreshTopic */}
    <Section h3={freshTopic.heading} 
    text={freshTopic.text}
    btnTxt={freshTopic.btn} 
    imgSrc={freshTopicImg}
    backgroundColor={pink} 
    headingColor={yellow} 
    textColor={yellow}
    btnColor={yellow}
    btnBgColor={pink}/>

    {/* FreshTopic-2 */}
    <Section h3={freshTopic2.heading} 
    text={freshTopic2.text}
    btnTxt={freshTopic2.btn} 
    imgSrc={freshTopic2Img}
    backgroundColor={pink} 
    headingColor={yellow} 
    textColor={yellow}
    btnColor={yellow}
    btnBgColor={pink}/>

    {/* ted talks-2 */}
    <Section h3={tedTalks.heading} 
    text={tedTalks.text}
    btnTxt={tedTalks.btn} 
    imgSrc={tedtalksimg}
    backgroundColor={yellow} 
    headingColor={pink} 
    textColor={pink}
    btnColor={pink}
    btnBgColor={yellow}/>

    {/* franchise */}
    <Section h3={franchise.heading} 
    text={franchise.text}
    btnTxt={franchise.btn} 
    imgSrc={franchiseimg}
    backgroundColor={white} 
    headingColor={pink} 
    textColor={brown}
    btnColor={brown}
    btnBgColor={yellow}/>

    {/* map */}
    <Section h3={map.heading} 
    text={map.text}
    imgSrc={mapimg}
    backgroundColor={pink} 
    headingColor={yellow} 
    textColor={yellow}
    btnColor={brown}
    btnBgColor={yellow}
    hasbBtn={false}/>

     {/* courses */}
     <Section h3={courses.heading} 
    text={courses.text}
    btnTxt={courses.btn} 
    imgSrc={coursesimg}
    imgSize={"30%"}
    backgroundColor={yellow} 
    headingColor={pink} 
    textColor={pink}
    btnColor={pink}
    btnBgColor={yellow}/>

    {/* album */}
    <Section h3={album.heading} 
    text={album.text}
    btnTxt={album.btn} 
    imgSrc={albumimg}
    backgroundColor={white} 
    headingColor={pink} 
    textColor={brown}
    btnColor={brown}
    btnBgColor={yellow}/>

     {/* barat */}
     <Section h3={barat.heading} 
    text={barat.text}
    btnTxt={barat.btn} 
    imgSrc={baratimg}
    backgroundColor={pink} 
    headingColor={yellow} 
    textColor={yellow}
    btnColor={brown}
    btnBgColor={yellow}/>

    {/* chaibala */}
    <Section h3={chaiwala.heading} 
    text={chaiwala.text}
    btnTxt={chaiwala.btn} 
    imgSrc={chaiwalaimg}
    backgroundColor={white} 
    headingColor={pink} 
    textColor={brown}
    btnColor={brown}
    btnBgColor={yellow}/>

    <Footer />
    
    <Misc />
    
    
    </>
}

export default App;
