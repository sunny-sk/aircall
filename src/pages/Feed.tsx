import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { RefreshCcwDot, Heart } from 'lucide-react'
import SearchBar from "@/components/searchBar"
import PhoneList from "@/components/phoneList"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Voicemail, Home } from 'lucide-react';

export default function Feed() {
  return (
    <>
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
      <div className="hidden md:flex w-full h-screen  flex-col">
        <div className="bg-white h-16 border-gray-200 border-b">
          {/* top bar */}
        </div>
        <div className="flex h-screen ">
          {/* left side bar */}
          <aside className="w-16 border-gray-200 border-r">
            <div className="w-full h-full p-2 flex flex-col items-center pt-5 space-y-3">
              <div className="rounded-full bg-primary p-2"><Voicemail color="white" /></div>
              <div className="rounded-full p-2"><Home color="black" /></div>
            </div>
          </aside>
          <div className="flex-1 bg-gray-100 p-4">
            {/* right list */}

            {/* table */}
            {/* pagination */}

            <Pagination className="justify-start">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  )
}