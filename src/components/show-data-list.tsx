import PhoneList from "@/components/phone-list";
import { columns } from "@/components/table/components/columns";
import { DataTable } from "@/components/table/components/data-table";


import DataLoaderSkeleton from "@/components/loaders/data-loader-skeleton";

import DataAction from "@/components/data-action";
import { Call } from "@/types/schema";
import { useLocation } from "react-router-dom";


export default function ShowDataList({ data, isLoading }: { data: Call[], isLoading: boolean }) {
  const loaction = useLocation();
  return (
    <>
      {!isLoading && data && <>
        {/* bulk action */}
        <DataAction isArchive={loaction.pathname == '/archive'} label='Archive' data={data} />
        {/* mobile view */}
        <PhoneList data={data} />
        {/* tablet + desktop view  */}
        <div className="hidden md:block space-y-3">
          <DataTable data={data} columns={columns} />
        </div>
      </>
      }
      {isLoading && <DataLoaderSkeleton />}
    </>
  )
}