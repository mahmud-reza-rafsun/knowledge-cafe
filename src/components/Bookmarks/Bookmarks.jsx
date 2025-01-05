import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 md:1/3 rounded-xl">
      <div className="p-3 my-4 bg-[#6047EC1A] border border-[#6047EC] text-[#6047EC] rounded-xl">
        <h3 className="font-semibold">
          Spent time on read : {readingTime} min
        </h3>
      </div>
      <div className="p-3 border rounded-xl">
        <h3 className="font-bold">Bookmarked Blogs: {bookmarks.length}</h3>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
