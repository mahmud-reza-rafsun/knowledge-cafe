import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between py-3 mt-5 border-b">
        <h2 className="text-2xl font-bold">Knowledge Cafe</h2>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
