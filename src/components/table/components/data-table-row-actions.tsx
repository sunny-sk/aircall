/* eslint-disable @typescript-eslint/no-explicit-any */

import { toast } from "sonner";
import { Button } from "@/components/ui/button"
import { BASE_URL } from "@/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';

export function DataTableRowActions({ row, className }: any) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ id, val }: { id: string; val: boolean }) => {
      return axios.patch(BASE_URL + "/activities/" + id, {
        is_archived: !val,
      })
    },

    onSuccess: (res) => {
      toast(res.data);
      queryClient.invalidateQueries({ queryKey: ["activities"] });
      queryClient.invalidateQueries({ queryKey: ["archived"] });
    },
    onError: () => {
      toast('Error occured, please try again later!');
    }

  });
  return (
    <Button
      disabled={mutation.isPending}
      onClick={() => {
        mutation.mutate({ id: row.original.id, val: row.original.is_archived });
      }}
      variant="outline"
      className={`flex h-8  w-[90px] ${className}`}
    >
      {mutation.isPending ? '...' : <>{row.original.is_archived ? 'Unarchive' : "Archive"}</>}
    </Button>
  )
}
