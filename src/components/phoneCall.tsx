import { ChevronRight, Voicemail } from 'lucide-react';
import { Link } from 'react-router-dom'

interface Call {
  phone?: string
  time?: Date
  type?: string,
  id: string,
}

const PhoneCall = ({ phone, time, type, id }: Call) => {
  return (
    <Link to={`/details/${id}`} className='block'>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start space-x-3">
          <div className="p-2 rounded-full bg-slate-200">
            <Voicemail />
          </div>
          <div>
            <p className="font-semibold">{phone}</p>
            <p className="font-light text-slate-500 text-xs">{type} call {new Date(time).toLocaleDateString()}</p>
          </div>
        </div>
        <ChevronRight strokeWidth={1} />
      </div>
    </Link>
  )
}

export default PhoneCall;