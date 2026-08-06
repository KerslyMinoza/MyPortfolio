import ux_conference_preview from "../assets/images/blog/ux_thumbnail.jpg";
import devcon_thumbnail from "../assets/images/blog/devcon_thumbnail.jpg";
import malaysia_thumbnail from "../assets/images/blog/malaysia_thumbnail.jpg";

/* `legacyPath` is where the entry used to answer, before the journal was given
   a section of its own and the slugs lost their underscores. App.jsx turns each
   one into a redirect, so anything already linked or indexed still lands. */
export const BLOG = [

    {
        id: 1,
        title: 'Exploring Malaysia with Nodies Team',
        image: malaysia_thumbnail,
        description:
            'From Kuala Lumpur  to Johor’s Network School, our Malaysia trip was unforgettable—thanks to Nodies’ support.',
        path: '/journal/malaysia-nodies',
        legacyPath: '/malaysia_nodies',
    },



    {
        id: 2,
        title: 'Devcon + Team Building in Bangkok',
        image: devcon_thumbnail,
        description:
            'A week in Bangkok filled with learning at Devcon SEA, team bonding, and unforgettable adventures with the team.',
        path: '/journal/devcon-bangkok',
        legacyPath: '/devcon_bangkok',
    },



    {
        id: 3,
        title: 'UX+ Conference Manila Experience',
        image: ux_conference_preview,
        description:
            'A fulfilling journey held in Manila connecting with UI/UX professionals and finding my path in design.',
        path: '/journal/ux-conference',
        legacyPath: '/uxplusconference',
    },

  
]