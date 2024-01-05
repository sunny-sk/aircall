

import { ColumnDef } from "@tanstack/react-table"

import { Call } from "../../../types/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { PhoneIncoming, PhoneOutgoing } from "lucide-react"
import { convertSecondstoTime, getNumber } from "@/lib/utils"
import { Link } from 'react-router-dom';

export const columns: ColumnDef<Call>[] = [
  {
    accessorKey: "via",  // phone
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => <div className="w-[100px] text-blue-600">
      <Link to={`/details/${row.original.id}`}>
        <u>{`+33 ${getNumber(row.original)}`}</u>
      </Link>
    </div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "direction",  // direction
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Call Type" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("direction") == 'outbound' ?
              <div className="flex items-center space-x-1">
                <PhoneOutgoing color="green" className="h-4" />
                <span>Outgoing</span>
              </div>
              :
              <div className="flex items-center space-x-1">
                <PhoneIncoming className="h-4" color="red" />
                <span>Incoming</span>
              </div>
            }
          </span>
        </div>
      )
    },
    enableSorting: false
  },
  {
    accessorKey: "duration",  // duration
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Duration" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span>{convertSecondstoTime(row.getValue("duration"))}</span>
        </div>
      )
    },
    filterFn: (row, value) => {
      return value.includes(row.getValue('duration'))
    },
  },
  {
    accessorKey: "created_at", // date & time
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date and Time" />
    ),
    cell: ({ row }) => {

      return (
        <div className="flex items-center">
          <span>{new Date(row.getValue('created_at')).toLocaleString()}</span>
        </div>
      )
    },
    filterFn: (row, value) => {
      return value.includes(row.getValue('created_at'))
    },
  },
  {
    id: "is_archived", // date & time
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
