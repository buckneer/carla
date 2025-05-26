"use client";
import { BarChart3, Home, Settings, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function OperatorLinks() {

	const pathname = usePathname();

	return (
		<div className="space-y-1 px-3">
			<Link
				href="/dashboard/operator"
				className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
					pathname === "/dashboard/operator"
						? "bg-blue-100 text-blue-700"
						: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
				}`}
			>
				<Home className="h-5 w-5 mr-3" />
				Overview
			</Link>
			<Link
				href="/dashboard/operator/users"
				className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
					pathname === "/dashboard/operator/users"
						? "bg-blue-100 text-blue-700"
						: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
				}`}
			>
				<Users className="h-5 w-5 mr-3" />
				Users
			</Link>
			<Link
				href="/dashboard/operator/analytics"
				className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
					pathname === "/dashboard/operator/analytics"
						? "bg-blue-100 text-blue-700"
						: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
				}`}
			>
				<BarChart3 className="h-5 w-5 mr-3" />
				Analytics
			</Link>
			<Link
				href="/dashboard/operator/settings"
				className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
					pathname === "/dashboard/operator/settings"
						? "bg-blue-100 text-blue-700"
						: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
				}`}
			>
				<Settings className="h-5 w-5 mr-3" />
				Settings
			</Link>
		</div>
	);
}

export default OperatorLinks;
