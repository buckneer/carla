"use client";
import { BarChart3, Car, Home, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Driver() {
	const pathname = usePathname();

	return (
		<div className="w-64 bg-white shadow-sm border-r border-gray-200">
			<div className="p-6">
				<Link href="/" className="flex items-center">
					<Car className="h-8 w-8 text-blue-600" />
					<span className="ml-2 text-xl font-bold text-gray-900">Carla</span>
				</Link>
			</div>
			<nav className="mt-6">
				<div className="px-6 mb-6">
					<div className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
							<span className="text-blue-600 font-semibold text-sm">JS</span>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-900">John Smith</p>
							<p className="text-xs text-gray-500">Driver</p>
						</div>
					</div>
				</div>
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
				<div className="absolute bottom-0 w-64 p-3">
					<Link
						href="/"
						className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors w-full"
					>
						<LogOut className="h-5 w-5 mr-3" />
						Logout
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Driver;
