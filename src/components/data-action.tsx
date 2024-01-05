import { useQueryClient } from '@tanstack/react-query';
import { Button } from './ui/button'
import { Call } from '@/types/schema';
import axios from 'axios';
import { BASE_URL } from '@/constants';
import { toast } from "sonner";
import { useState } from 'react';

const DataAction = ({ label, isArchive = false, data }: { label: string, isArchive?: boolean, data: Call[] }) => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const onClickHandler = async () => {
    try {
      // setting loader
      setIsLoading(true);
      // preparing bulk operation api
      await Promise.all([...data.map(item => axios.patch(BASE_URL + "/activities/" + item.id, {
        is_archived: isArchive || false,
      }))])
      setIsLoading(false);
      toast('Calls updated successfully!');
    } catch (error) {
      // on error
      setIsLoading(false);
      toast('Error occured, please try again later!');
    }
    //refetching all data
    queryClient.invalidateQueries({ queryKey: ["activities"] });
    queryClient.invalidateQueries({ queryKey: ["archived"] });
  }


  if (data.length == 0) return null;

  return (
    <div className="flex items-center justify-between mb-3">
      <p>{isArchive ? "Archive List" : "Calls List"}</p>
      <Button disabled={isLoading} onClick={onClickHandler}>{label} all</Button>
    </div>
  )
}

export default DataAction