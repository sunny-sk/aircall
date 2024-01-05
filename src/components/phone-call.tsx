import { ChevronRight, Voicemail } from 'lucide-react';
import { Link } from 'react-router-dom'
import { callSchema } from '@/types/schema';
import z from 'zod'

const PhoneCall = (props: z.infer<typeof callSchema>) => {
  return (
    <Link to={`/details/${props.id}`} className='block'>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start space-x-3">
          <div className="p-2 rounded-full bg-slate-200">
            <Voicemail />
          </div>
          <div>
            <p className="font-semibold">{props.via}</p>
            <p className="font-light text-slate-500 text-xs">{props.call_type} call {new Date(props.created_at).toLocaleDateString()}</p>
          </div>
        </div>
        <ChevronRight strokeWidth={1} />
      </div>
    </Link>
  )
}

export default PhoneCall;