import {
  Card,

} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical } from 'lucide-react'
const SearchBar = () => {
  return (
    <Card className="flex px-5">
      <Input id="search" className="border-none outline-none shadow-none" placeholder="Search numbers & more" />
      <DropdownMenu>
        <DropdownMenuTrigger><MoreVertical /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Unarchive all calls</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  )
}

export default SearchBar