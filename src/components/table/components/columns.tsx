

import { ColumnDef } from "@tanstack/react-table"

import { Call } from "../../../types/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Call>[] = [
  {
    accessorKey: "via",  // phone
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("via")}</div>,
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
            {row.getValue("direction")}
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
          <span>{row.getValue("duration")}</span>
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
          <span>{row.getValue('created_at')}</span>
        </div>
      )
    },
    filterFn: (row, value) => {
      return value.includes(row.getValue('created_at'))
    },
  },
  {
    id: "actions",
    cell: () => <DataTableRowActions />,
  },
]
