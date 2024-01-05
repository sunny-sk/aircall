import { DataTable } from "@/components/table/components/data-table"
import { columns } from "@/components/table/components/columns"
import { callSchema } from "@/types/schema"
import { z } from "zod";
import { Helmet } from "react-helmet";
import axios from 'axios';

import { useQuery } from "@tanstack/react-query"
import { BASE_URL } from "@/constants"
import DataTableLoader from "@/components/loaders/data-table-loader"


export default function Feed() {
  const { isLoading, data } = useQuery({
    queryKey: ['activities'], queryFn: () =>
      axios
        .get(BASE_URL + '/activities')
        .then((res) => z.array(callSchema).parse(res.data.filter((item: z.infer<typeof callSchema>) => !item.is_archived))),
  })

  return (
    <>
      <Helmet>
        <title>Home | Aircall</title>
      </Helmet>
      {/* table */}
      {!isLoading && data && <DataTable data={data} columns={columns} />}
      {isLoading && <DataTableLoader />}
    </>
  )
}