import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '@/constants';
import { ArrowLeft, PhoneIncoming, PhoneOutgoing, UserRound } from 'lucide-react';
import { convertSecondstoTime, getNumber } from '@/lib/utils';
import { MoreVertical } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import DetailsLoader from '@/components/loaders/details-loader'

const FeedDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ['activities', params.feedId], queryFn: () =>
      axios
        .get(BASE_URL + `/activities/${params.feedId}`)
        .then((res) => res.data),
  })
  console.log(data)
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
                  <DropdownMenuItem>{
                    data.is_archived ? "Unarchive" : "Archive"
                  }</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          {/* card */}
          <div className='absolute bg-white shadow-md rounded-md w-4/5 md:w-[420px] mx-auto top-16 left-[50%] -translate-x-[50%] p-3'>
            {/* avatar */}
            <div className='h-20 w-20 bg-gray-100 absolute rounded-full -top-9 left-[50%] -translate-x-[50%] p-2 flex justify-center items-center'>
              {/* type */}
              <div className='absolute h-6 w-6 flex items-center justify-center rounded-full  -top-1 -left-0 border bottom-2 bg-primary-foreground border-gray-400'>
                {data?.direction == 'outbound' && <PhoneOutgoing color="green" className="h-3" />}
                {data?.direction == 'inbound' && <PhoneIncoming className="h-3" color="red" />}
              </div>
              <UserRound className='h-10 w-10' strokeWidth={1} />
            </div>
            <br /><br />
            {/* details */}
            <div className='text-center space-y-6'>
              <div className='space-y-1'>
                <p className='text-xl font-medium text-gray-800'> +33 {getNumber(data)}
                </p>
                <p className='text-md text-gray-600'>{convertSecondstoTime(data?.duration)}</p>
                <p className='text-sm text-gray-500'>{new Date(data?.created_at).toLocaleString()}</p>
              </div>
              <a href={`tel:+33${getNumber(data)}`} className='px-3 py-2 w-auto inline-block rounded-full bg-primary text-white'>Call back</a>
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