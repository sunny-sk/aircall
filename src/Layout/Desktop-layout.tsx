import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import classnames from 'classnames';

import { RefreshCcwDot, Heart, Phone, FileArchive } from 'lucide-react'
import SearchBar from "@/components/searchBar"
import PhoneList from "@/components/phoneList"

import { Helmet } from "react-helmet";

import { Link, Outlet, useLocation } from "react-router-dom"


export default function DesktopLayout() {
  const location = useLocation();



  return (
    <>
      <Helmet>
        <title>Home | Aircall</title>
      </Helmet>
      <div className="container md:hidden">
        <br />
        <SearchBar />
        <Tabs defaultValue="recents" className="w-full sm:w-[400px] mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="recents" className="space-x-2"><RefreshCcwDot size="20px" /><span>Recents</span></TabsTrigger>
            <TabsTrigger value="archive" className="space-x-2"><Heart size="20px" /><span>Archive</span></TabsTrigger>
          </TabsList>
          <TabsContent value="recents" className="pt-3">
            <PhoneList />
          </TabsContent>
          <TabsContent value="archive" className="pt-3">
            <PhoneList />
          </TabsContent>
        </Tabs>
      </div>
      <div className="hidden md:flex w-full h-screen flex-col overflow-hidden">
        {/* top header */}
        <header className="bg-white h-18 border-gray-200 border-b flex items-center justify-between pl-7 pr-14 fixed top-0 w-full z-30">
          <img src="/src/assets/aircall-logo-vector.png" className="w-28" alt="logo" />
          <div className="flex items-center justify-end space-x-3">
            <Avatar>
              <AvatarImage src="https://media.licdn.com/dms/image/C5603AQHvK1BK9pzx5g/profile-displayphoto-shrink_200_200/0/1636993728551?e=1709769600&v=beta&t=dG8Hw_JB2J7d5HPQpxm10zp1HLREgXwPWFOujLirmNE" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-primary"><strong>Sunny</strong></p>
              <p className="text-sm text-slate-700">+91 7836072135</p>
            </div>
          </div>
        </header>
        <aside className="w-24 border-gray-200 border-r fixed left-0 h-screen top-0 pt-20 bg-white z-20">
          <div className="w-full h-full p-2 flex flex-col items-center pt-5 space-y-3">
            <Link to={'/'} className={classnames('rounded-full p-2 transition-all ease-in-out', { 'bg-primary': location.pathname == '/', 'hover:bg-gray-200': location.pathname != '/' })}><Phone color={location.pathname == '/' ? "white" : "black"} /></Link>
            <Link to={'/archive'} className={classnames('rounded-full p-2 transition-all ease-in-out ', { 'bg-primary': location.pathname == '/archive', 'hover:bg-gray-200': location.pathname != '/archive' })}><FileArchive color={location.pathname == '/archive' ? "white" : "black"} /></Link>
          </div>
        </aside >

        <div className="flex h-screen">
          {/* extra left space for below sidebar */}
          <div className="w-24">
          </div>
          <div className="flex-1 h-full  bg-gray-100 p-4 px-14 overflow-y-auto pt-28">
            <Outlet />
          </div>
        </div>
      </div >
    </>
  )
}