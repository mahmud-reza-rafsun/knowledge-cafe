import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmarks, handleMakeAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("author_data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          handleAddToBookmarks={handleAddToBookmarks}
          key={blog.id}
          blog={blog}
          handleMakeAsRead={handleMakeAsRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMakeAsRead: PropTypes.func.isRequired,
};

export default Blogs;
