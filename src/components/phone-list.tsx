import PhoneCall from './phone-call';
import { Call } from '@/types/schema';
import { Card } from './ui/card';

const phoneList = ({ data }: { data: Call[] }) => {
  return (
    <div className="space-y-5 md:hidden">
      {data.map((item) => {
        return <PhoneCall {...item} key={item.id} />
      })}
      {data.length == 0 && <Card className='text-center p-5'>
        <p>No data found</p>
      </Card>}
      <br />
      <br />
      <br />
    </div>
  )
}

export default phoneList