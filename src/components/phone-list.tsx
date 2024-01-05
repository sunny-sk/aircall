import PhoneCall from './phone-call';
import z from 'zod';
import { callSchema } from '@/types/schema';

const phoneList = ({ data }: { data: z.infer<typeof callSchema>[] }) => {
  return (
    <div className="space-y-5">
      {data.map((item) => {
        return <PhoneCall {...item} key={item.id} />
      })}
    </div>
  )
}

export default phoneList