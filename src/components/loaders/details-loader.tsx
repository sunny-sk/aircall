import { Skeleton } from "@/components/ui/skeleton"

const DetailsLoader = () => {
  return (
    < div className='relative bg-primary h-[100px] md:h-[150px] lg:h-[180px] p-4'>
      <div className='flex items-center justify-between lg:px-36'>
        <Skeleton className="w-[50px] h-[10px] rounded-sm md:bg-white" />
        <Skeleton className="w-[50px] h-[10px] rounded-sm md:bg-white" />
      </div>
      {/* card */}
      <div className='absolute bg-white shadow-md rounded-md w-4/5 md:w-[420px] mx-auto top-16 left-[50%] -translate-x-[50%] p-3'>
        {/* avatar */}
        <div className='h-20 w-20 bg-gray-100 absolute rounded-full -top-9 left-[50%] -translate-x-[50%]  flex justify-center items-center'>
          {/* type */}
          <div className='absolute h-6 w-6 flex items-center justify-center rounded-full  -top-1 -left-0 border bottom-2 bg-primary-foreground border-gray-400'>
            <Skeleton className="w-full h-full rounded-full" />
          </div>
          <Skeleton className="w-full h-full rounded-full " />

        </div>
        <br /><br />
        {/* details */}
        <div className='text-center space-y-6'>
          <div className='space-y-1'>
            <p className='text-xl font-medium text-gray-800'>
              <Skeleton className="w-[100px] h-[10px] mx-auto rounded-full bg-gray-400" />
            </p>
            <p className='text-md text-gray-400'>
              <Skeleton className="w-[100px] h-[10px] mx-auto rounded-full bg-gray-400" />
            </p>
            <p className='text-sm text-gray-500'>
              <Skeleton className="w-[100px] h-[10px] mx-auto rounded-full bg-gray-400" />
            </p>
          </div>
          <Skeleton className="w-[100px] h-[10px] mx-auto rounded-full bg-gray-400" />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}

export default DetailsLoader