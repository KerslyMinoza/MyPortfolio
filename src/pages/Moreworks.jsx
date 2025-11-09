
import Footer from '../components/layout/footer/Footer';
import Nav from '../components/layout/Nav/Nav.jsx';
import './moreworks.css';
import { WORKS } from '../data/works.js';
import { motion, AnimatePresence } from 'framer-motion';
import { bounceUp } from "../components/utils/animation.js";
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

function Moreworks(){

    const [selectedWork, setSelectedWork] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (work, index) => {
        setSelectedWork(work);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedWork(null);
    };

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % WORKS.length;
        setCurrentIndex(nextIndex);
        setSelectedWork(WORKS[nextIndex]);
    };

    const goToPrevious = () => {
        const prevIndex = (currentIndex - 1 + WORKS.length) % WORKS.length;
        setCurrentIndex(prevIndex);
        setSelectedWork(WORKS[prevIndex]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrevious();
    };

    const { variants, initial, whileInView, transition } = bounceUp(0.3);
    return (
        <>
            <Nav/>
            <motion.div
            variants={variants}
            initial={initial}
            animate="visible"
            transition={transition}
            viewport={{ once: true, amount: 0.2 }}
            className="mansory_moreworks">

            {WORKS.map((work, index) => (
                <div className="box" key={work.id}>
                    <div className="image_box" onClick={() => openModal(work, index)}>
                        <img src={work.image} alt={work.name}/>
                    </div>

                    <div className="image_title">
                        {work.name}
                    </div>

                    <div className="image_type">
                        {work.type}
                    </div>

                </div>
            ))}
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selectedWork && (
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

                        <button className="modal-nav-btn prev" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>
                            <ChevronLeftIcon className="icon" />
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
                                <img src={selectedWork.image} alt={selectedWork.name} />
                            </div>

                            <div className="modal-title">{selectedWork.name}</div>
                        </motion.div>

                        <button className="modal-nav-btn next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
                            <ChevronRightIcon className="icon" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer/>
        </>
    );
}

export default Moreworks