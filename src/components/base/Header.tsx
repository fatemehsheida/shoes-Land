import { Link, Outlet } from "react-router-dom";
function Header() {
  return (
    <>
            <div className="bg-red-500">footer</div>

      <Outlet />
    </>
  );
}
export default Header;