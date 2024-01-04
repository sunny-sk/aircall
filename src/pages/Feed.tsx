import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { RefreshCcwDot, Heart } from 'lucide-react'
import SearchBar from "@/components/searchBar"
import PhoneList from "@/components/phoneList"
import { Voicemail, Home } from 'lucide-react';
import { DataTable } from "@/components/table/components/data-table"
import { columns } from "@/components/table/components/columns"
import { callSchema } from "@/types/schema"
import { z } from "zod";

function getTasks() {

  const tasks = [{ "direction": "outbound", "from": 100000, "to": 200000, "via": 30000000, "duration": 0, "call_type": "missed", "is_archived": false, "id": "6393bb5469073dc45849ca7a", "created_at": "2022-12-09T22:48:52.789Z" }, { "direction": "inbound", "from": 100001, "to": 200002, "via": 30000003, "duration": 10, "is_archived": true, "call_type": "answered", "id": "6393bb7b69073dc45849ca7c", "created_at": "2022-12-09T22:49:31.911Z" }, { "direction": "inbound", "from": 100001, "to": 200001, "via": 30000001, "duration": 0, "is_archived": true, "call_type": "missed", "id": "639737ac587edc08100c026f", "created_at": "2022-12-12T14:16:12.721Z" }, { "direction": "inbound", "from": 100002, "to": 200002, "via": 30000002, "duration": 20, "is_archived": true, "call_type": "voicemail", "id": "63973961362d5c09cd79364a", "created_at": "2022-12-12T14:23:29.409Z" }, { "direction": "inbound", "from": 100003, "to": 200003, "via": 30000003, "duration": 100, "is_archived": true, "call_type": "answered", "id": "639746e963147b03c894f521", "created_at": "2022-12-12T15:21:13.564Z" }, { "direction": "inbound", "from": 100004, "to": 200004, "via": 30000004, "duration": 1, "is_archived": true, "call_type": "voicemail", "id": "639747acb585e7e5526eb46a", "created_at": "2022-12-12T15:24:28.091Z" }, { "direction": "inbound", "from": 100005, "to": 200005, "via": 30000005, "duration": 2, "is_archived": true, "call_type": "voicemail", "id": "63974a811f096c984321fe0b", "created_at": "2022-12-12T15:36:33.277Z" }, { "duration": 0, "is_archived": false, "id": "639a0f0a328500b1a0fa9bf7", "created_at": "2022-12-14T17:59:38.665Z" }, { "duration": 0, "is_archived": false, "id": "639a0f11328500b1a0fa9bf9", "created_at": "2022-12-14T17:59:45.719Z" }, { "duration": 0, "is_archived": false, "id": "639a0fe5328500b1a0fa9bfe", "created_at": "2022-12-14T18:03:17.250Z" }, { "direction": "inbound", "from": 1231, "to": 12321, "via": 12312, "duration": 21312, "is_archived": true, "call_type": "missed", "id": "639a1043328500b1a0fa9c01", "created_at": "2022-12-14T18:04:51.894Z" }, { "direction": "inbound", "from": 1234, "to": 1234, "via": 1234, "duration": 21312, "is_archived": true, "call_type": "missed", "id": "639a10a9328500b1a0fa9c04", "created_at": "2022-12-14T18:06:33.291Z" }, { "direction": "inbound", "to": 1234, "via": 1234, "duration": 21312, "is_archived": false, "call_type": "missed", "id": "639a10b8328500b1a0fa9c07", "created_at": "2022-12-14T18:06:48.754Z" }, { "duration": 0, "is_archived": false, "id": "639a1411896e0d0f4bf88b2b", "created_at": "2022-12-14T18:21:05.710Z" }, { "direction": "inbound", "to": 1234, "via": 1234, "duration": 21312, "is_archived": false, "call_type": "missed", "id": "639a143c896e0d0f4bf88b2e", "created_at": "2022-12-14T18:21:48.406Z" }, { "to": 1234, "via": 1234, "duration": 21312, "is_archived": false, "call_type": "missed", "id": "639a144e896e0d0f4bf88b31", "created_at": "2022-12-14T18:22:06.485Z" }, { "direction": "inbound", "from": 1234, "to": 1234, "via": 1234, "duration": 21312, "is_archived": true, "call_type": "missed", "id": "639a177121da466572fd6bd8", "created_at": "2022-12-14T18:35:29.422Z" }, { "direction": "outbound", "from": 1234, "to": 1234, "via": 1234, "duration": 21312, "is_archived": true, "call_type": "missed", "id": "639a178921da466572fd6bdb", "created_at": "2022-12-14T18:35:53.057Z" }, { "direction": "outbound", "from": 1234, "to": 1234, "via": 1234, "duration": 21312, "is_archived": true, "call_type": "missed", "id": "639a178f21da466572fd6bdd", "created_at": "2022-12-14T18:35:59.854Z" }, { "direction": "outbound", "from": 306306306, "to": 890, "via": 600, "duration": 231, "is_archived": true, "call_type": "missed", "id": "64cd75ec11a82c708838361e", "created_at": "2023-08-04T22:04:28.098Z" }]

  return z.array(callSchema).parse(tasks)
}

export default function Feed() {
  const tasks = getTasks();
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
            <DataTable data={tasks} columns={columns} />
          </div>
        </div>
      </div>
    </>
  )
}