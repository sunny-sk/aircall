import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const Header = () => {
  return (
    <header className="bg-white h-18 border-gray-200 shadow-lg border-b flex items-center justify-between pl-5 pr-5 sm:pl-6 sm:pr-6 md:pr-14 fixed top-0 w-full z-30">
      <img src="/src/assets/aircall-logo-vector.png" className="w-24 md:w-28" alt="logo" />
      <div className="flex items-center justify-end space-x-3">
        <Avatar className="h-8 w-8 md:h-12 md:w-12">
          <AvatarImage src="https://media.licdn.com/dms/image/C5603AQHvK1BK9pzx5g/profile-displayphoto-shrink_200_200/0/1636993728551?e=1709769600&v=beta&t=dG8Hw_JB2J7d5HPQpxm10zp1HLREgXwPWFOujLirmNE" />
          <AvatarFallback className="text-sm font-bold">S</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-md md:text-lg text-primary"><strong>Sunny</strong></p>
          <p className="text-[11px] md:text-sm text-slate-700">+91 7836072135</p>
        </div>
      </div>
    </header>
  )
}

export default Header