import './testimonials.css';
import { motion } from 'framer-motion';
import { riseIn } from '../../utils/animation.js';

/* The card is the column item itself — .testimonial_box carries break-inside,
   so it must not be wrapped in anything the masonry could split instead. */
function Testimonials({ clients, index = 0 }){

    let client = clients;

    // cards cascade rather than the whole wall arriving at once
    const { variants, initial, whileInView, viewport, transition } = riseIn((index % 3) * 0.14);

    return (
        <motion.div
        className="testimonial_box"
        variants={variants}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}>

            <div className="client_comment">
                {client.comment}
            </div>

            <div className="client">
               <div className="client_photo">
                    <img
                        src={client.image}
                        alt={client.name}
                    />
                </div>
               <div className="client_name">{client.name}</div>
               <div className="client_company">{client.company}</div>
            </div>

        </motion.div>
    );
}

export default Testimonials
