import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center border-b mt-5 py-3">
        <h2 className="text-2xl font-bold">Knowledge Cafe</h2>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
