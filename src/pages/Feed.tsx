
import { callSchema } from "@/types/schema";
import axios from 'axios';
import { Helmet } from "react-helmet";
import { z } from "zod";

import { BASE_URL } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import ShowDataList from "@/components/show-data-list";



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
      <ShowDataList data={data} isLoading={isLoading} />
    </>
  )
}