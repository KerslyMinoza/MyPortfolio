import '../blogs.css';
import Backbutton from '../../../components/ui_components/Backbutton';

import Devcon from "../../../assets/images/blog/devcon/devcon.jpg";
import Pic1 from "../../../assets/images/blog/devcon/Pic1.jpg";
import Pic2 from "../../../assets/images/blog/devcon/pic2.jpg";
import Pic3 from "../../../assets/images/blog/devcon/pic3.jpg";
import Pic4 from "../../../assets/images/blog/devcon/pic4.jpg";
import Pic5 from "../../../assets/images/blog/devcon/pic5.jpg";
import Pic6 from "../../../assets/images/blog/devcon/pic6.jpg";
import Pic7 from "../../../assets/images/blog/devcon/pic7.jpg";
import Pic8 from "../../../assets/images/blog/devcon/pic8.jpg";
import Pic9 from "../../../assets/images/blog/devcon/pic9.jpg";
import Pic10 from "../../../assets/images/blog/devcon/pic10.jpg";
import Pic11 from "../../../assets/images/blog/devcon/pic11.jpg";
import Pic12 from "../../../assets/images/blog/devcon/pic12.jpg";
import Pic13 from "../../../assets/images/blog/devcon/pic13.jpg";
import Pic14 from "../../../assets/images/blog/devcon/pic14.jpg";
import Pic15 from "../../../assets/images/blog/devcon/pic15.jpg";
import Pic16 from "../../../assets/images/blog/devcon/pic16.jpg";
import Pic17 from "../../../assets/images/blog/devcon/pic17.jpg";
import Pic18 from "../../../assets/images/blog/devcon/pic18.jpg";
import Pic19 from "../../../assets/images/blog/devcon/pic19.jpg";
import Pic20 from "../../../assets/images/blog/devcon/pic20.jpg";
import Pic21 from "../../../assets/images/blog/devcon/pic21.jpg";
import Pic22 from "../../../assets/images/blog/devcon/pic22.jpg";
import Pic23 from "../../../assets/images/blog/devcon/pic23.jpg";
import Pic24 from "../../../assets/images/blog/devcon/pic24.jpg";
import Pic25 from "../../../assets/images/blog/devcon/pic25.jpg";
import Pic27 from "../../../assets/images/blog/devcon/pic27.jpg";
import Pic28 from "../../../assets/images/blog/devcon/pic28.jpg";
import Pic29 from "../../../assets/images/blog/devcon/pic29.jpg";
import Pic30 from "../../../assets/images/blog/devcon/pic30.jpg";
import Pic31 from "../../../assets/images/blog/devcon/pic31.jpg";
import Pic32 from "../../../assets/images/blog/devcon/pic32.jpg";
import Pic33 from "../../../assets/images/blog/devcon/pic33.jpg";
import Pic34 from "../../../assets/images/blog/devcon/pic34.jpg";



import Footer from '../../../components/footer/Footer';

import NextPrevious from '../../../components/ui_components/NextPrevious';
import { useLocation } from 'react-router-dom';

function DevconBangkok(){

    const location = useLocation();
    const blogId = location.state?.blogId;

    return (
        <>
            <Backbutton page="blog"/>
            <div className="blog" id="pokfund">
                <div className="blog_name"> Devcon + Team Building in Bangkok </div>
                

                <div className="content">
                    <div className="section_title">A Week to Remember. Sawadeeka! ✈️</div>

                    <div className="blog_content">
                    Indeed, it was a week full of learning and fun. I really enjoyed our Bangkok get-together in 2024. It was such a privilege to be sponsored by Nodies and Tensova Inc. for this trip. What made it extra special was finally meeting again my remote workmates and boss outside the country.
                    </div>

                    <div className="image_holder">
                        <img src={Pic1}></img>
                    </div>  


                    <div className="section_title">Diving into Devcon SEA 💡</div>                  
                    <div className="blog_content">
                    The main reason for our trip was to attend Devcon SEA. The purpose of this event is to bring together the global Ethereum community—developers, researchers, creators, and thinkers—to learn, collaborate, and advance the decentralized ecosystem in a region that’s rapidly becoming a hub for blockchain innovation.
                    Since we’re not really deep in the space yet, it became a great opportunity to connect with people and absorb more about the community. I learned about the massive possibilities of innovation coming from different startups.
                    </div>


                    <div className="masonry_images">
                        <img src={Pic15}></img>
                        <img src={Pic14}></img>
                        <img src={Pic17}></img>
                        <img src={Pic18}></img>
                        <img src={Pic16}></img>
                        <img src={Pic21}></img>
                    </div>


                    <div className="section_title">Learning the Art of Networking 🤝</div> 
                    
                   <div className="blog_content">
                   One thing our boss emphasized during the event was the confidence to network. Not in the sense of selling, but sharing. Sharing our ideas, our projects, and learning about what others are building too. It’s a culture that’s still very new to me—I’ve always been more on the design side than the talking side—but this gave me a new perspective.
                   </div>

                    <div className="masonry_images">
                        <img src={Pic24}></img>
                        <img src={Pic23}></img>
                        <img src={Pic22}></img>
                        <img src={Pic8}></img>
                        <img src={Pic9}></img>
                        <img src={Pic19}></img>
                        <img src={Pic7}></img>
                        <img src={Pic11}></img>
                        <img src={Pic10}></img>
                    </div>


                    <div className="section_title">Sharing Function Network 🚀</div>

                   <div className="blog_content">
                   Another highlight for me was getting the chance to share Function Network, our newest GenAI network project, in a small presentation during the event. Such a great opportunity to introduce what we’re building and exchange ideas with others in the community. At the same time, I also listened to several talks about AI within decentralized networks, which gave me fresh insights and inspiration.
                   </div>

                    <div className="masonry_images">
                        <img src={Pic25}></img>
                        <img src={Pic29}></img>
                         <img src={Pic28}></img>
                        <img src={Pic27}></img>
                    </div>

                    <div className="section_title">Team Building Adventures 🐅 </div>

                   <div className="blog_content">
                    Our team building was just as memorable. From riding tuk-tuks and going on long walks, to experiencing Bangkok’s nightlife (the details stay off the blog 😉), every moment was unforgettable. One of my favorite parts was visiting the zoo and getting up close with tigers. Well probably the different zoo hehehe eyyyyyy.
                    I never imagined these kinds of experiences could happen in a remote setup. Nodies has truly been generous in giving us these opportunities to bond as a team.
                   </div>

                    <div className="masonry_images">
                        <img src={Pic31}></img>
                        <img src={Pic33}></img>
                         <img src={Pic2}></img>
                        <img src={Pic3}></img>
                        <img src={Pic4}></img>
                        <img src={Pic5}></img>
                        <img src={Pic32}></img>
                        <img src={Pic30}></img>
   
                    </div>

                    <div className="section_title">What I’m Taking Home </div>

                   <div className="blog_content">
                    This trip inspired me to dig deeper into understanding Web3 and AI. Between the talks, the people I met, and the experiences with my teammates, I came home motivated and curious to keep exploring the possibilities in this space.
                    Aside from shopping, I also got to go home with Mr. Nodie ❤️
                   </div>

                    <div className="image_holder">
                        <img src={Pic34}></img>
                    </div>   
            </div>
             
        </div>

      <Footer/>  

    </>   
        
    );
}

export default DevconBangkok