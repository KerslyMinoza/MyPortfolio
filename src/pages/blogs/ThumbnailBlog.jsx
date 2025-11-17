import './blogs.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function ThumbnailBlog(blog){

    let my_blog = blog.blog

    console.log(my_blog);

    return (
        <Link
        to={my_blog.path}
        state={{ blogId: my_blog.id }}
        className="thumbnailblog">
            <motion.img 
            src={my_blog.image} 
            alt="Tilted Image"
            className="w-64 h-64 object-cover rounded-xl"
            whileHover={{ rotate: -1 }}
            transition={{ type: "spring", stiffness: 400 }}

            ></motion.img>

            <div className = "title">{my_blog.title}</div>
            <div className = "description">{my_blog.description}</div>

            
        </Link>
    );
}

export default ThumbnailBlog