import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

const TabMenu = () => {
  const location = useLocation();
  return (
    <div className="bg-muted p-1 flex justify-between items-center rounded-sm w-full sm:w-[400px] mx-auto">
      <Link
        to="/"
        className={classnames('flex p-1 transition-all ease-in-out rounded-sm font-medium text-sm justify-center items-center w-[49%]', { 'bg-white': location.pathname == '/' })}
      >
        Recents
      </Link>
      <Link
        to="/archive"
        className={classnames('flex p-1 transition-all ease-in-out rounded-sm font-medium text-sm justify-center items-center w-[49%]', { 'bg-white': location.pathname == '/archive' })}
      >
        Archive
      </Link>
    </div>
  );
};

export default TabMenu;
