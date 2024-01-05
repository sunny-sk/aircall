import { DataTable } from "@/components/table/components/data-table"
import { columns } from "@/components/table/components/columns"
import { callSchema } from "@/types/schema"
import { z } from "zod";
import { Helmet } from "react-helmet";
import axios from 'axios';
import PhoneList from "@/components/phone-list"

import { useQuery } from "@tanstack/react-query"
import { BASE_URL } from "@/constants"
import DataTableLoader from "@/components/loaders/data-table-loader"


export default function Archive() {
  const { isLoading, data } = useQuery({
    queryKey: ['activities-archived'], queryFn: () =>
      axios
        .get(BASE_URL + '/activities')
        .then((res) => z.array(callSchema).parse(res.data.filter((item: z.infer<typeof callSchema>) => item.is_archived))),
  })

  return (
    <>
      <Helmet>
        <title>Archive | Aircall</title>
      </Helmet>
      {/* table */}
      {!isLoading && data && <>
        <div className="md:hidden">
          <PhoneList data={data} />
        </div>
        <div className="hidden md:block">
          <DataTable data={data} columns={columns} />
        </div>
      </>
      }
      {isLoading && <DataTableLoader />}
    </>
  )
}