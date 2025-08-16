import '../blogs.css';
import Backbutton from '../../../components/ui_components/Backbutton';


import Pic1 from "../../../assets/images/blog/ux_conference/Pic1.jpg";
import Pic2 from "../../../assets/images/blog/ux_conference/Pic2.jpg";
import Pic3 from "../../../assets/images/blog/ux_conference/Pic3.jpg";
import Pic4 from "../../../assets/images/blog/ux_conference/Pic4.jpg";
import Pic5 from "../../../assets/images/blog/ux_conference/Pic5.jpg";
import Pic6 from "../../../assets/images/blog/ux_conference/Pic6.jpg";
import Pic7 from "../../../assets/images/blog/ux_conference/Pic7.jpg";
import Pic8 from "../../../assets/images/blog/ux_conference/Pic8.jpeg";
import Pic9 from "../../../assets/images/blog/ux_conference/Pic9.jpeg";
import hands from "../../../assets/images/blog/ux_conference/hands.jpeg";
import Pic10 from "../../../assets/images/blog/ux_conference/Pic10.jpeg";
import Pic12 from "../../../assets/images/blog/ux_conference/Pic12.jpeg";
import Pic13 from "../../../assets/images/blog/ux_conference/Pic13.jpg";
import Pic14 from "../../../assets/images/blog/ux_conference/Pic14.jpg";
import Pic15 from "../../../assets/images/blog/ux_conference/Pic15.jpg";

import Footer from '../../../components/footer/Footer';

import NextPrevious from '../../../components/ui_components/NextPrevious';
import { useLocation } from 'react-router-dom';

function Uxconference(){

    const location = useLocation();
    const blogId = location.state?.blogId;

    return (
        <>
            <Backbutton page ="home"/>
            <div className="blog" id="pokfund">
                <div className="blog_name"> UX+ Conference 2024 Manila </div>
                

                <div className="content">
                    <div className="section_title">From Cebu to Manila! ✈️</div>

                    <div className="blog_content">
                    I’m so happy that our company Nodies sponsored me and my project manager to attend the UX+ Conference 2024 in Manila. Coming from Cebu, the one-hour flight was definitely worth it. This was actually my first UX conference. I’ve joined a few design conferences before, but this one was different. It felt more personal and inspiring.
                    </div>


                    <div className="masonry_images">
                        <img src={Pic13}></img>
                        <img src={Pic1}></img>
                        <img src={Pic14}></img>
                    </div>

                    <div className="section_title">Networking or Meatballs? 🍴</div>

                    <div className="blog_content">
                    The event itself was very insightful. I have to admit though, I totally missed out on the networking part (which is supposed to be one of the main highlights of the conference). Instead, we ended up enjoying IKEA meatballs a little too much. No regrets, but still a bit of a shame.
                    </div>

                    <div className="masonry_images">
                        <img src={Pic10}></img>
                        <img src={Pic15}></img>
                    </div>


                    <div className="section_title">Stories That Inspire! 🎤</div>

                    <div className="blog_content">
                        What stood out the most to me was how the speakers shared not just their expertise, but also their journeys. They talked about where they started, the struggles they faced, and how passion fueled their projects. It wasn’t just about design as visuals. It was about the experience, the logic behind decisions, and the impact it can create.
                    </div>

                    <div className="masonry_images">
                        <img src={Pic2}></img>
                        <img src={Pic3}></img>
                        <img src={Pic4}></img>
                        <img src={Pic6}></img>
                        <img src={Pic7}></img>
                        <img src={Pic8}></img>
                    </div>


                    <div className="section_title">My Favorite Talk 🌟 </div>
                    <div className="blog_content">
                       One of my favorite talks was by Alex Skougarevskaya, who shared her journey to becoming the Head of Design at Canva. I loved her energy. Quirky, fun, and playful, yet deeply thoughtful in her approach to design. She made me realize that design isn’t just about following rules. It’s also about bringing your personality into the work.
                    </div>



                    <div className="image_holder">
                        <img src={Pic5}></img>
                    </div>


                    <div className="section_title">Meeting Old and New Friends 🤝 </div>

                    <div className="blog_content">
                      Another highlight for me was reconnecting with my ex-colleague, who’s actually one of the people who inspired me to pursue this career in the first place. On top of that, I had the chance to meet and bond with other UX designers from Accenture, which was such a fun and meaningful experience.
                    </div>

                    <div className="image_holder">
                        <img src={hands}></img>
                    </div>


                    <div className="section_title"> Leaving Inspired ❤️ </div>
                    <div className="blog_content">
                    Even though the conference wasn’t as technical as I originally expected, it sparked something in me. It reignited my passion for UX and reminded me why I chose this path. I’m leaving this experience inspired to build a stronger portfolio, one that truly reflects my journey and growth as a designer.
                    </div>
            </div>
             
        </div>

      <Footer/>  

    </>   
        
    );
}

export default Uxconference