import { ChevronRight, PhoneIncoming, PhoneOutgoing } from 'lucide-react';
import { Link } from 'react-router-dom'
import { Call } from '@/types/schema';
import { capitalizeFirstChar, getNumber } from '@/lib/utils';

const PhoneCall = (data: Call) => {
  return (
    <Link to={`/details/${data.id}`} className='block'>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start space-x-3">
          <div className="p-2 rounded-full bg-slate-100 h-10 w-10 flex justify-center items-center">
            {data.direction == 'inbound' && <PhoneIncoming color="red" className="h-4" />}
            {data.direction == 'outbound' && <PhoneOutgoing color="green" className="h-4" />}
          </div>
          <div>
            <p className="font-semibold">{getNumber(data) ? "+33 " + getNumber(data) : '-'}</p>
            <p className="font-light text-slate-500 text-xs">{capitalizeFirstChar(data.call_type)} call {new Date(data.created_at).toLocaleString()}</p>
          </div>
        </div>
        <ChevronRight strokeWidth={1} />
      </div>
    </Link>
  )
}

export default PhoneCall;