/* eslint-disable @typescript-eslint/no-explicit-any */

import { toast } from "sonner";
import { Button } from "@/components/ui/button"
import { BASE_URL } from "@/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';

export function DataTableRowActions({ row }: any) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ id, val }: { id: string; val: boolean }) => {
      return axios.patch(BASE_URL + "/activities/" + id, {
        is_archived: !val,
      })
    },
    onMutate: () => {
    },
    onSuccess: (a, b) => {
      console.log(a, b)
      toast(a.data);
      queryClient.invalidateQueries({ queryKey: ["activities"] });
      queryClient.invalidateQueries({ queryKey: ["activities-archived"] });
    },
    onError: () => {

    },
  });
  return (
    <Button
      onClick={() => {
        mutation.mutate({ id: row.original.id, val: row.original.is_archived });
      }}
      variant="outline"
      className="flex h-8  "
    >
      {row.original.is_archived ? 'Unarchive' : "Archive"}
    </Button>
  )
}
