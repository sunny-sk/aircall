import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BASE_URL } from '@/constants';
import { convertSecondstoTime, getNumber } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ArrowLeft, MoreVertical, PhoneIncoming, PhoneOutgoing, UserRound } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';

import DetailsLoader from '@/components/loaders/details-loader';
import { DataTableRowActions } from "@/components/table/components/data-table-row-actions";

const FeedDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ['activities', params.feedId], queryFn: () =>
      axios
        .get(BASE_URL + `/activities/${params.feedId}`)
        .then((res) => res.data),
  })


  return (
    <>
      <Helmet>
        <title>Archives | Aircall</title>
      </Helmet>
      <div>
        {isLoading && <DetailsLoader />}
        {/* top */}
        {!isLoading && < div className='relative bg-primary h-[100px] md:h-[150px] lg:h-[180px] p-4'>
          <div className='flex items-center justify-between lg:px-36 cursor-pointer'>
            <div onClick={() => {
              navigate(-1);
            }}>
              <ArrowLeft color='white' />
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger><MoreVertical color='white' /></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DataTableRowActions className='border-none w-full' row={{ original: data }} />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          {/* card */}
          <div className='absolute bg-white shadow-md rounded-md w-4/5 md:w-[420px] mx-auto top-16 md:top-24 left-[50%] -translate-x-[50%] p-3'>
            {/* avatar */}
            <div className='h-20 w-20 md:h-24 md:w-24 bg-gray-100 absolute rounded-full -top-9 md:-top-12 left-[50%] -translate-x-[50%] p-2 flex justify-center items-center'>
              {/* type */}
              <div className='absolute h-6 w-6 flex items-center justify-center rounded-full  -top-1 -left-0 border bottom-2 bg-primary-foreground border-gray-400'>
                {data?.direction == 'outbound' && <PhoneOutgoing color="green" className="h-3" />}
                {data?.direction == 'inbound' && <PhoneIncoming className="h-3" color="red" />}
              </div>
              <UserRound className='h-10 w-10' strokeWidth={1} />
            </div>
            <br /><br />
            {/* details */}
            <div className='text-center space-y-6 md:space-y-8'>
              <div className='space-y-1 md:space-y-2'>
                <p className='text-xl md:text-2xl font-medium text-gray-800'> +33 {getNumber(data)}
                </p>
                <p className='text-md md:text-lg text-gray-600'>{convertSecondstoTime(data?.duration)}</p>
                <p className='text-sm md:text-md text-gray-500'>{new Date(data?.created_at).toLocaleString()}</p>
              </div>
              <a href={`tel:+33${getNumber(data)}`} className='px-8 py-2 w-auto inline-block rounded-full bg-primary text-white md:text-2xl'>Call back</a>
              <br />
              <br />
            </div>
          </div>
        </div>
        }
      </div >

    </>
  )
}

export default FeedDetails