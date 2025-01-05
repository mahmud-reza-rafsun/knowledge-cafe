import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="p-4 my-2 rounded-xl bg-slate-200">
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
