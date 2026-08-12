import { Children, isValidElement } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { settleIn } from '../utils/animation.js';

/* The body of a case study or a journal entry, revealed a block at a time as it
   is scrolled to — the same lift the cards on the index pages arrive on, held
   right down (see settleIn).

   It stands in for the <div> that used to hold the page's content, and gives
   each of that div's own children the animation rather than wrapping them:
   `motion.div` and a plain `div` render the same element, so every selector,
   margin and layout rule on these pages still lands where it did. Anything that
   is not a plain element — a component like NextPrevious, or a stray line of
   text — is passed through untouched, since there is no tag to animate.

   The first few blocks come in one after another, which reads as the page
   arriving; past that the delay is dropped, because a block being scrolled to
   should answer straight away rather than wait its turn.

   Someone who has asked their system for less movement gets none of it: the
   page renders as the plain div it stands in for. */
function Reveal({ className, id, children, stagger = 0.06, cascade = 4 }) {

    const reduced = useReducedMotion();

    if (reduced) {
        return <div className={className} id={id}>{children}</div>;
    }

    // counted over the blocks that actually take the animation, so a component
    // sitting among them does not eat one of the opening beats
    let step = -1;

    return (
        <div className={className} id={id}>
            {Children.map(children, (child) => {
                if (!isValidElement(child) || typeof child.type !== 'string') return child;

                const Block = motion[child.type];
                if (!Block) return child;

                step += 1;
                return <Block {...child.props} {...settleIn(step < cascade ? step * stagger : 0)} />;
            })}
        </div>
    );
}

export default Reveal;
