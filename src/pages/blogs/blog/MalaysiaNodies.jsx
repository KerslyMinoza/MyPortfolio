
import '../blogs.css';
import Nav from '../../../components/layout/Nav/Nav.jsx';

import Pic1 from "../../../assets/images/blog/malaysia/pic1.jpg";
import Pic2 from "../../../assets/images/blog/malaysia/pic2.jpg";
import Pic3 from "../../../assets/images/blog/malaysia/pic3.jpg";
import Pic4 from "../../../assets/images/blog/malaysia/pic4.jpg";
import Pic5 from "../../../assets/images/blog/malaysia/pic5.jpg";
import Pic6 from "../../../assets/images/blog/malaysia/pic6.jpg";
import Pic7 from "../../../assets/images/blog/malaysia/pic7.jpg";
import Pic8 from "../../../assets/images/blog/malaysia/pic8.jpg";
import Pic9 from "../../../assets/images/blog/malaysia/pic9.jpg";
import Pic10 from "../../../assets/images/blog/malaysia/pic10.jpg";
import Pic11 from "../../../assets/images/blog/malaysia/pic11.jpg";
import Pic12 from "../../../assets/images/blog/malaysia/pic12.jpg";
import Pic13 from "../../../assets/images/blog/malaysia/pic13.jpg";
import Pic14 from "../../../assets/images/blog/malaysia/pic14.jpg";
import Pic15 from "../../../assets/images/blog/malaysia/pic15.jpg";
import Pic16 from "../../../assets/images/blog/malaysia/pic16.jpg";
import Pic17 from "../../../assets/images/blog/malaysia/pic17.jpg";
import Pic18 from "../../../assets/images/blog/malaysia/pic18.jpg";
import Pic19 from "../../../assets/images/blog/malaysia/pic19.jpg";
import Pic20 from "../../../assets/images/blog/malaysia/pic20.jpg";
import Pic21 from "../../../assets/images/blog/malaysia/pic21.jpg";
import Pic22 from "../../../assets/images/blog/malaysia/pic22.jpg";
import Pic23 from "../../../assets/images/blog/malaysia/pic23.jpg";
import Pic27 from "../../../assets/images/blog/malaysia/pic27.jpg";
import Pic28 from "../../../assets/images/blog/malaysia/pic28.jpg";
import Pic30 from "../../../assets/images/blog/malaysia/pic30.jpg";
import Pic31 from "../../../assets/images/blog/malaysia/pic31.jpg";
import Pic29 from "../../../assets/images/blog/malaysia/pic29.png";
import Pic33 from "../../../assets/images/blog/malaysia/pic33.jpg";
import Pic34 from "../../../assets/images/blog/malaysia/pic34.jpg";
import Pic35 from "../../../assets/images/blog/malaysia/pic35.png";
import Pic36 from "../../../assets/images/blog/malaysia/pic36.png";
import Pic37 from "../../../assets/images/blog/malaysia/pic37.jpg";
import Pic38 from "../../../assets/images/blog/malaysia/pic38.jpg";
import Pic39 from "../../../assets/images/blog/malaysia/pic39.jpg";
import Pic40 from "../../../assets/images/blog/malaysia/pic40.jpg";
import Pic41 from "../../../assets/images/blog/malaysia/pic41.jpg";
import Pic42 from "../../../assets/images/blog/malaysia/pic42.png";
import Pic43 from "../../../assets/images/blog/malaysia/pic43.png";
import Pic44 from "../../../assets/images/blog/malaysia/pic44.png";
import Pic45 from "../../../assets/images/blog/malaysia/pic45.png";




import Footer from '../../../components/layout/footer/Footer';

import NextPreviousBlog from '../../../components/common/NextPreviousBlog';
import { useLocation } from 'react-router-dom';
import { BLOG } from '../../../data/blogs.js';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

function MalaysiaNodies(){

    const location = useLocation();
    const blogId = location.state?.blogId || BLOG.find(b => b.path === '/malaysia_nodies')?.id;

    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeModal();
    };

    return (
        <>
            <Nav/>
            <div className="blog" id="pokfund">
                
                <div className="blog_name"> Exploring Malaysia with Nodies Team 2025! </div>
                <div className="margin-s"></div>

                <div className="content">
                    <div className="section_title">Team Gathering in Malaysia ✈️</div>

                    <div className="blog_content">
                   The main goal of our team gathering was to experience Network School located in Johor, Malaysia. But since it was also Blockchain Week in Kuala Lumpur, we tried to join as well. Unfortunately, tickets were already sold out, so we only managed to attend an afterparty event. Still, it turned out to be one of the most unforgettable and fun team trips ever. Big thanks to Nodies for generously sponsoring the whole week in Malaysia.
                    </div>

                    <div className="image_holder">
                        <img src={Pic29} onClick={() => openModal(Pic29)}></img>
                    </div>  


                    <div className="section_title">Life in Kuala Lumpur 🏙️</div>                  
                    <div className="blog_content">
                    Aside from exploring the city, some of the best moments happened in our Airbnb—late night talks, bonding over food, and even working together. Yes, we worked hard too! It was a great collaboration, and honestly, sometimes just being together in person makes problem-solving easier (though I’ll admit… we didn’t really finish everything we planned lol).
                    
                    <br/><br/>
                    One of the highlights in KL was the night we played laser tag. It was so much fun and actually felt like a great exercise in teamwork. Everyone got competitive, but in the best way—it really brought out our playful side.
                    </div>


                    <div className="masonry_images">
                        <img src={Pic9} onClick={() => openModal(Pic9)}></img>
                        <img src={Pic16} onClick={() => openModal(Pic16)}></img>
                        <img src={Pic27} onClick={() => openModal(Pic27)}></img>
                        <img src={Pic28} onClick={() => openModal(Pic28)}></img>
                         <img src={Pic31} onClick={() => openModal(Pic31)}></img>
                         <img src={Pic11} onClick={() => openModal(Pic11)}></img>
                         <img src={Pic12} onClick={() => openModal(Pic12)}></img>
                         <img src={Pic23} onClick={() => openModal(Pic23)}></img>
                         <img src={Pic34} onClick={() => openModal(Pic34)}></img>
                          <img src={Pic15} onClick={() => openModal(Pic15)}></img>
                          <img src={Pic33} onClick={() => openModal(Pic33)}></img>

                    </div>


                <div className="section_title">Yesss Hardworking peeps</div>    

                    <div className="masonry_images">
                        <img src={Pic35} onClick={() => openModal(Pic35)}></img>
                        <img src={Pic36} onClick={() => openModal(Pic36)}></img>
                    </div>
                
                <div className="section_title">Why I Love Malaysia 🌍</div> 

                <div className="blog_content">
                Malaysia quickly became my favorite country I’ve visited so far. It’s well established, diverse, and the people are very welcoming. I admire how people from different cultures work together so seamlessly. Personally, I’m a bit biased since I’ve always loved India, and Malaysia gave me a similar vibe.
                I especially loved the walking culture—being able to safely explore the streets made the trip feel even more exciting. The food was also amazing, and every meal was something to look forward to.
                <br/><br/>
                Malaysia is colorful in every sense. As a designer, I felt inspired just staying there. The blend of different cultures, art, and architecture gives Malaysia such a unique identity. Everything feels diverse but harmonious.
                </div>


                <div className="masonry_images">
                    <img src={Pic10} onClick={() => openModal(Pic10)}></img>
                    <img src={Pic5} onClick={() => openModal(Pic5)}></img>
                    <img src={Pic19} onClick={() => openModal(Pic19)}></img>
                    <img src={Pic17} onClick={() => openModal(Pic17)}></img>
                    <img src={Pic41} onClick={() => openModal(Pic41)}></img>
                    <img src={Pic40} onClick={() => openModal(Pic40)}></img>
                    <img src={Pic39} onClick={() => openModal(Pic39)}></img>
                    <img src={Pic38} onClick={() => openModal(Pic38)}></img>
                    <img src={Pic37} onClick={() => openModal(Pic37)}></img>
                    <img src={Pic18} onClick={() => openModal(Pic18)}></img>
                    <img src={Pic20} onClick={() => openModal(Pic20)}></img>
                </div>


                <div className="section_title">Experiencing Network School 🌲</div>               
                <div className="blog_content">
                After a few days in KL, we traveled five hours to Forest City in Johor. The main reason was to experience Network School, a place designed to help teams focus, collaborate, and learn without distractions.
                <br/> <br/>

                Forest City itself felt a bit eerie and quiet, but it made sense. The idea behind Network School is to create a space where you can focus, learn, and live a healthier lifestyle. They host different programs almost daily, promoting both personal growth and collaboration.
                It’s also a hub to meet other people in tech, share projects, and exchange ideas. The environment is inspiring, and I can imagine how productive we’d be staying there for a month. I’m really grateful that Nodies is giving us the opportunity to experience it more in the future.
                </div>



                <div className="masonry_images">
                    <img src={Pic43} onClick={() => openModal(Pic43)}></img>
                    <img src={Pic42} onClick={() => openModal(Pic42)}></img>
                    <img src={Pic44} onClick={() => openModal(Pic44)}></img>
                    <img src={Pic1} onClick={() => openModal(Pic1)}></img>
                    <img src={Pic2} onClick={() => openModal(Pic2)}></img>
                </div>


                <div className="section_title">What I’m Taking Home ❤️</div> 

                <div className="blog_content">
               Aside from the Kashmir rugs and a stash of Malaysian snacks, what I’m truly bringing home are the memories. Late-night conversations, laughter, and the chance to know my teammates on a deeper level made this trip so refreshing.
               <br/><br/>
               This experience made me even more comfortable working with them and reminded me how much I value being part of this team. I also saw how many learning opportunities Asia has to offer—spaces like Network School prove that there are amazing environments designed for growth, learning, and living well.
                </div>



                <div className="image_holder">
                    <img src={Pic45} onClick={() => openModal(Pic45)}></img>
                </div>
             <NextPreviousBlog blog_id={blogId}/>
            </div>


        </div>

      {/* Modal */}
      <AnimatePresence>
          {selectedImage && (
              <motion.div
                  className="modal-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeModal}
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
              >
                  <button className="modal-close" onClick={closeModal}>
                      <XMarkIcon className="icon" />
                  </button>

                  <motion.div
                      className="modal-content"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      onClick={(e) => e.stopPropagation()}
                  >
                      <div className="modal-image-container">
                          <img src={selectedImage} alt="Full size" />
                      </div>
                  </motion.div>
              </motion.div>
          )}
      </AnimatePresence>

      <Footer/>

    </>

    );
}

export default MalaysiaNodies