import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmarks, handleMakeAsRead }) => {
  const { id, cover_img, title, author, author_img, post_date, time, hashtag } =
    blog;
  return (
    <div className="my-4">
      <div className="w-full">
        <img className="object-cover w-full rounded h-72" src={cover_img} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-5 py-3">
          <img
            className="object-cover rounded-full w-14 h-14"
            src={author_img}
            alt=""
          />
          <div>
            <h4 className="font-bold">{author}</h4>
            <p>{post_date}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p className="text-gray-600">{time} min read</p>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="text-lg"
          >
            <IoBookmarkOutline />
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="my-3 text-gray-600">
        {hashtag.map((hash, idx) => (
          <span key={idx}>
            <a href="#">{hash}</a>
          </span>
        ))}
      </p>
      <div className="my-3">
        <button
          onClick={() => handleMakeAsRead(id, time)}
          className="font-semibold text-purple-800 underline"
          href="$"
        >
          Make as Read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMakeAsRead: PropTypes.func.isRequired,
};

export default Blog;
