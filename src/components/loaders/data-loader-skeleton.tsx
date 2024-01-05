import { Skeleton } from "@/components/ui/skeleton"
const DataLoaderSkeleton = () => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center mb-3">
        <Skeleton className="w-[90px] h-[20px] rounded-sm md:bg-white" />
        <Skeleton className="w-[90px] h-[40px] rounded-sm md:bg-white" />
      </div>
      {new Array(10).fill(0).map((_, index) => {
        return <Skeleton key={index} className="w-full h-12 rounded-sm md:bg-white" />
      })}
      <div className="hidden md:flex items-center justify-end space-x-4">
        <div>
          <Skeleton className="w-[30px] h-[20px] rounded-sm md:bg-white" />
        </div>
        <div>
          <Skeleton className="w-[30px] h-[20px] rounded-sm md:bg-white" />
        </div>
        <div>
          <Skeleton className="w-[30px] h-[20px] rounded-sm md:bg-white" />
        </div>
      </div>
    </div>
  )
}

export default DataLoaderSkeleton