import { Skeleton } from "@/components/ui/skeleton"
const DataTableLoader = () => {
  return (
    <div className="space-y-2">
      {new Array(10).fill(0).map((_, index) => {
        return <Skeleton key={index} className="w-full h-12 rounded-sm bg-white" />
      })}
      <div className="flex items-center justify-end space-x-4">
        <div>
          <Skeleton className="w-[30px] h-[20px] rounded-sm bg-white" />
        </div>
        <div>
          <Skeleton className="w-[30px] h-[20px] rounded-sm bg-white" />
        </div>
        <div>
          <Skeleton className="w-[30px] h-[20px] rounded-sm bg-white" />
        </div>
      </div>
    </div>
  )
}

export default DataTableLoader