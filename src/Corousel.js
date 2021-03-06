import { useState } from 'react';
import './Corousel.scss';


//This Functional Component is used for rendering the Slide Indicators based on the props passed.
const CorouselNav = ({imgs})=>{
  return(
    <ol className="carousel-indicators">
        {
            imgs.map((index,i)=>(
                <li key={i} data-target="#myCarousel" data-slide-to={i} className={`${i===0?'active':''}`}></li>
            ))
        }    
    </ol>
  )
}

/*This is a Functional Component which i I have used in the CorouselWrapper Component.All it dies is ti render the slides
with the images. The Props I have used here is passed as Destructured Object.*/
const CorouselWrapper = ({imgs})=>{
        
    return(
    <div className="carousel-inner">
        {
            imgs.map((images,i)=>(
                <div key={i} className={`item my-container ${i===0?'active':'' }`} >
                     <img clasname="corousel-img"src={images} alt="Not Available"/>
                     <div className="carousel-caption">
                        <h3>SmartCow Challenge</h3>
                        <p>We love React!!</p>
                    </div>
                </div>
            ))
        }
    </div>
    )
}

/* This is the main Component for the Corousel which renders the Corousel Texts, Slides and the Indicators.
I have used states here for the Images which are being passed as props to the Functional Component.*/

/* To achieve the text-image constrast problem, the idea I have is to change the Opacity of the Image ( which I have set to 0.5), so 
to make the Text more readable everytime.*/

const Corousel = () => 
{
    const [imgs] = useState(['../../assets/imgs/img1.jpg','../../assets/imgs/img2.jpg','../../assets/imgs/img3.jpg','../../assets/imgs/img4.jpg','../../assets/imgs/img5.jpg','../../assets/imgs/img6.jpg','../../assets/imgs/img7.jpg','../../assets/imgs/img8.jpg','../../assets/imgs/img9.jpg','../../assets/imgs/img10.jpg']);
    return ( 
        <div className="container">
            <h1>SmartCow Assigment - 2</h1>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
            
            <CorouselNav imgs={imgs}></CorouselNav>
            <CorouselWrapper imgs={imgs}></CorouselWrapper>

            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
     );
}
 
export default Corousel;