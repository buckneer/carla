import { BarChart3, Car, Home, LogOut, Settings, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Operator() {
	const pathname = usePathname();

	return (
		<div className="w-64 bg-white shadow-sm border-r border-gray-200">
			<div className="p-6">
				<Link href="/" className="flex items-center">
					<Car className="h-8 w-8 text-blue-600" />
					<span className="ml-2 text-xl font-bold text-gray-900">Carla</span>
				</Link>
				<p className="text-xs text-gray-500 mt-1">Operator Portal</p>
			</div>
			<nav className="mt-6">
				<div className="px-6 mb-6">
					<div className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
							<span className="text-purple-600 font-semibold text-sm">DP</span>
						</div>
						<div>
							<p className="text-sm font-medium text-gray-900">Downtown Plaza</p>
							<p className="text-xs text-gray-500">Parking Operator</p>
						</div>
					</div>
				</div>
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

export default Operator;
