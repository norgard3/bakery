import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Resumepdf from './LaurenNorgardResume.pdf';

function Pricing() { 
    return (
        <div>
            <div>
            <div>
            {/* heading */}
            <h1 className="text-center">Pricing</h1>
            {/* COOKIES */}
            <Card style={{ width: '40rem' }} >
                
                    <Card.Body>
                        <Card.Title className="Card-Title text-center">Cookies</Card.Title>
                        <Card.Text className="text-left">Pricing varies by cookie size, shape and complexity. Base price of cookies is 36 dollars a dozen</Card.Text>
                        <button className="center"type="button" className="btn btn-outline-dark main-btn">inquire</button>
                    </Card.Body> 

            </Card>
            </div>
            </div>
           
            {/* Cakes */}
            <div>
            <div className="col-xs-6">
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title className="text-center Card-Title ">Basic 6" Round cake</Card.Title>
                        <Card.Text>2 layers: $20 and up </Card.Text>
                        <Card.Text>3 layers: $35 and up </Card.Text>
                        <button className="center"type="button" className="btn btn-outline-dark main-btn">inquire</button>
                   
                </Card.Body>
            </Card>
            </div>
            </div>
            
                {/* second cake item */}
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                        <Card.Title className="text-center Card-Title ">Basic 8" round Cake</Card.Title>
                        <Card.Text>1 layer 25 and up</Card.Text>
                        <Card.Text>2 layer 35 and up</Card.Text>
                        <Card.Text>3 layer 50 and up</Card.Text>
                        <button className="center"type="button" className="btn btn-outline-dark main-btn">inquire</button>
                </Card.Body>
                
            </Card>    
            {/* cake flavors */}
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title className="text-center Card-Title">Cake Flavors & Frosting</Card.Title>
                        <Card.Text>At this time flavors are limited to vanilla, sprinkle aka funfetti, red velvet, and chocolate</Card.Text>
                        <Card.Text>All cakes are made with real buttercream in either vanilla or choclate</Card.Text>
                        <button className="center"type="button" className="btn btn-outline-dark main-btn">inquire</button>
                        
                </Card.Body>
            </Card>

         
            <h2 className="text-center">Disclaimer</h2>
            <p>my kitchen is cross contaminated. However, I am very familar with gluten free. Please inquire about vegan or dairy free options, they are coming soon.</p>

            <p>I am a registerd cottage food producer of MN. Food is homemade and not subject to state insepction.</p>






        </div>
    )
}

// function Resume() {
//     return(
//         <div>
//             <div className="text-center">
//                 <h1 className="h1-title pb-3">Resume</h1>
//                 <a href = {Resumepdf}><i class="fas fa-download"></i>Download Pdf</a>
//             </div>
//             <div className= "container d-flex flex-row justify-content-around align-items-center w-75 mt-5 mb-5">
//                 <div className="flex-column w-50 d-inline-flex align-content-center align-items-center align-self-start">
//                     {/* <div className="col text-center d-inline-block flex-direction-center position-relative"></div> */}
//                         <h2 className="h2-title">Front-end Proficiencies</h2>
//                             <ul className="ul">
//                                 <li>HTML</li>
//                                 <li>CSS</li>
//                                 <li>Javascript</li>
//                                 <li>JQuery</li>
//                                 <li>Responsive Design</li>
//                                 <li>React</li>
//                                 <li>Bootstrap</li>
//                         </ul>
//                     </div>
                    
//                     <div className="flex-column w-50 d-inline-flex align-items-center">
//                         {/* <div className="col w-50 d-inline-flex"></div> */}
//                             <h2 className="h2-title">Back-end Proficiencies</h2>
//                                     <ul className="ul">
//                                             <li>APIs</li>
//                                             <li>Node</li>
//                                             <li>Express</li>
//                                             <li>MySQL, Sequalize</li>
//                                             <li>MongoDb, Mongoose</li>
//                                             <li>REST</li>
//                                         </ul> 
//                     </div>  
//                </div>
//         </div>
//     )
// }
export default Pricing;
