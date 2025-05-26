"use client";
import { BarChart3, Car, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function DriverLinks() {

	const pathname = usePathname();

	return (
		<div className="space-y-1 px-3">
			<Link
				href="/dashboard/driver"
				className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
					pathname === "/dashboard/driver"
						? "bg-blue-100 text-blue-700"
						: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
				}`}
			>
				<Home className="h-5 w-5 mr-3" />
				Dashboard
			</Link>
			<Link
				href="/dashboard/driver/vehicles"
				className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
					pathname === "/dashboard/driver/vehicles"
						? "bg-blue-100 text-blue-700"
						: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
				}`}
			>
				<Car className="h-5 w-5 mr-3" />
				My Vehicles
			</Link>
			<Link
				href="/dashboard/driver/activity"
				className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
					pathname === "/dashboard/driver/activity"
						? "bg-blue-100 text-blue-700"
						: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
				}`}
			>
				<BarChart3 className="h-5 w-5 mr-3" />
				Activity
			</Link>
			<Link
				href="/dashboard/driver/settings"
				className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
					pathname === "/dashboard/driver/settings"
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

export default DriverLinks;
