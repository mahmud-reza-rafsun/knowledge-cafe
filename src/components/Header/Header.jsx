import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center p-4 mt-4 border-b">
        <h2 className="text-2xl font-bold">Knowledge Cafe</h2>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
