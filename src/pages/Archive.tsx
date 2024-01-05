
import { Call } from "@/types/schema";
import axios from 'axios';
import { Helmet } from "react-helmet";

import { BASE_URL } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import ShowDataList from "@/components/show-data-list";


export default function Archive() {
  const { isLoading, data } = useQuery({
    queryKey: ['archived'], queryFn: () =>
      axios
        .get(BASE_URL + '/activities')
        .then((res) => res.data.filter((item: Call) => item.is_archived)),
  })

  return (
    <>
      <Helmet>
        <title>Archive | Aircall</title>
      </Helmet>
      <ShowDataList data={data} isLoading={isLoading} />
    </>
  )
}