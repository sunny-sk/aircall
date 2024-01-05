import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames';
import { FileArchive, Phone } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="hidden md:block w-20 lg:w-24 border-gray-200 border-r fixed left-0 h-screen top-0 pt-20 bg-white z-20">
      <div className="w-full h-full p-2 flex flex-col items-center pt-5 space-y-3">
        <Link to={'/'} className={classnames('rounded-full p-2 transition-all ease-in-out', { 'bg-primary': location.pathname == '/', 'hover:bg-gray-200': location.pathname != '/' })}><Phone color={location.pathname == '/' ? "white" : "black"} /></Link>
        <Link to={'/archive'} className={classnames('rounded-full p-2 transition-all ease-in-out ', { 'bg-primary': location.pathname == '/archive', 'hover:bg-gray-200': location.pathname != '/archive' })}><FileArchive color={location.pathname == '/archive' ? "white" : "black"} /></Link>
      </div>
    </aside >
  )
}

export default Sidebar