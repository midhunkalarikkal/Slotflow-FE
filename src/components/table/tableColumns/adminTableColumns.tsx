import { format } from "date-fns";
import { Button } from "../../ui/button";
import { MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../DataTableColumnHeader";
import { DropDownItemChangeUserStatus } from "../adminTableOptions/AdminUserTableOptions";
import { DropDownItemChangePlanBlockStatus } from "../adminTableOptions/AdminPlansTableOptions";
import { DropDownItemChangeServiceBlockStatus } from "../adminTableOptions/AdminSerivceTableOptions";
import { DropDownMenuItemGetSubscriptionDetails } from "../adminTableOptions/AddminProviderSubscriptionsTableOptions";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../ui/dropdown-menu";
import { DropDownItemApproveProvider, DropDownItemChangeProviderBlockStatus, DropDownItemChangeProviderTrustTag, DropDownItemGetProviderDetailPage } from "../adminTableOptions/AdminProviderTableOptions";
import { AdminAllPaymentsTableColumnsProps, AdminAppServicesTableColumnsProps, AdminPlansTableColumnsProps, AdminProvidersSubscriptionsTableColumnsProps, AdminProvidersTableColumnsProps, AdminUsersTableColumnsProps } from "@/utils/interface/tableColumnInterface";

export const AdminProvidersTableColumns: ColumnDef<AdminProvidersTableColumnsProps>[] = [
  {
    accessorKey: "isAdminVerified",
    header: "Admin Verication",
    cell: ({ row }) => {
      const isVerified = row.original.isAdminVerified;
      return <span>{isVerified ? "verified" : "Pending"}</span>;
    },
  },
  {
    accessorKey: "username",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Username" />)
  },
  {
    accessorKey: "email",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Email" />)
  },
  {
    accessorKey: "isBlocked",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Status" />),
    cell: ({ row }) => {
      const isBlocked = row.original.isBlocked;
      return <span>{isBlocked ? "Blocked" : "Active"}</span>;
    },
  },
  {
    accessorKey: "trustedBySlotflow",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Slotflow Trusted" />),
    cell: ({ row }) => {
      const isTrusted = row.original.trustedBySlotflow;
      return <span>{isTrusted ? "Trusted" : "Pending"}</span>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const provider = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropDownItemGetProviderDetailPage providerId={provider._id} />
            {!provider.isAdminVerified && (
              <DropDownItemApproveProvider providerId={provider._id} />
            )}
            <DropDownItemChangeProviderBlockStatus providerId={provider._id} isBlocked={provider.isBlocked} />
            <DropDownItemChangeProviderTrustTag providerId={provider._id} trustedBySlotflow={provider.trustedBySlotflow} />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  },
]

export const AdminUsersTableColumns: ColumnDef<AdminUsersTableColumnsProps>[] = [
  {
    accessorKey: "isVerified",
    header: "Verication",
    cell: ({ row }) => {
      const isVerified = row.original.isEmailVerified;
      return <span>{isVerified ? "verified" : "Pending"}</span>;
    },
  },
  {
    accessorKey: "username",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Username" />)
  },
  {
    accessorKey: "email",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Email" />)
  },
  {
    accessorKey: "isBlocked",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Status" />),
    cell: ({ row }) => {
      const isBlocked = row.original.isBlocked;
      return <span>{isBlocked ? "Blocked" : "Active"}</span>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Details</DropdownMenuItem>
            <DropDownItemChangeUserStatus userId={user._id} isBlocked={user.isBlocked} />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]

export const AdminAppServicesTableColumns: ColumnDef<AdminAppServicesTableColumnsProps>[] = [
  {
    accessorKey: "_id",
    header: "id",
    cell: ({ row }) => {
      const id = row.original._id;
      return <span>{id.toString().slice(-4)}</span>;
    },
  },
  {
    accessorKey: "serviceName",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="ServiceName" />)
  },
  {
    accessorKey: "isBlocked",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Status" />),
    cell: ({ row }) => {
      const isBlocked = row.original.isBlocked;
      return <span>{isBlocked ? "Blocked" : "Active"}</span>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const service = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropDownItemChangeServiceBlockStatus serviceId={service._id} isBlocked={service.isBlocked} />
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]

export const AdminPlansTableColumns: ColumnDef<AdminPlansTableColumnsProps>[] = [
  {
    accessorKey: "_id",
    header: "id",
    cell: ({ row }) => {
      const id = row.original._id;
      return <span>{id.toString().slice(-4)}</span>;
    },
  },
  {
    accessorKey: "planName",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Plan" />)
  },
  {
    accessorKey: "isBlocked",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Status" />),
    cell: ({ row }) => {
      const isBlocked = row.original.isBlocked;
      return <span>{isBlocked ? "Blocked" : "Active"}</span>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const plan = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Details</DropdownMenuItem>
            <DropDownItemChangePlanBlockStatus planId={plan._id} isBlocked={plan.isBlocked} />
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]

export const AdminProvidersSubscriptionsTableColumns: ColumnDef<AdminProvidersSubscriptionsTableColumnsProps>[] = [
  {
    accessorKey: "providerId",
    header: "Provider Id",
    cell: ({ row }) => {
      const id = row.original.providerId;
      return <span>{id.toString().slice(-6)}</span>;
    },
  },
  {
    accessorKey: "subscriptionPlanId.planName",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Plan" />)
  },
  {
    accessorKey: "subscriptionPlanId.price",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Amount" />)
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Start Date" />),
    cell: ({ row }) => {
      const startDate = row.getValue("startDate");
      const formattedDate = startDate ? format(new Date(startDate as Date), "dd MMM yyyy") : "N/A";
      return <span>{formattedDate}</span>;
    }

  },
  {
    accessorKey: "endDate",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Expires on" />),
    cell: ({ row }) => {
      const endDate = row.getValue("endDate");
      const formattedDate = endDate ? format(new Date(endDate as Date), "dd MMM yyyy") : "N/A";
      return <span>{formattedDate}</span>;
    }

  },
  {
    accessorKey: "subscriptionStatus",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Status" />)
  },
  {
    accessorKey: "actions",
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const subscription = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropDownMenuItemGetSubscriptionDetails subscriptionId={subscription._id}/>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]

export const AdminAllPaymentsTableColumns: ColumnDef<AdminAllPaymentsTableColumnsProps>[] = [
  {
    accessorKey: "paymentStatus",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Status" />)
  },
  {
    accessorKey: "paymentFor",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Paid For" />)
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Paid On" />),
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt");
      const formattedDate = createdAt ? format(new Date(createdAt as Date), "dd MMM yyyy") : "N/A";
      return <span>{formattedDate}</span>;
    }

  },
  {
    accessorKey: "paymentGateway",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Gateway" />)
  },
  {
    accessorKey: "paymentMethod",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Method" />)
  },
  {
    accessorKey: "totalAmount",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Amount" />)
  }
]


