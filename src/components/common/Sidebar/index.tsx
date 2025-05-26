"use client";

import { Car, X, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import UserInfo from "./UserInfo";
import Logout from "./Logout";

interface SidebarProps {
	links: React.ReactNode;
}

export default function Sidebar({ links }: SidebarProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Overlay backdrop when sidebar is open on mobile */}
			<div
				className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 transition-opacity duration-300 md:hidden ${
					isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				}`}
				onClick={() => setIsOpen(false)}
			/>

			{/* Toggle button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
				className="fixed top-4 right-4 z-40 p-2 bg-white shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
			>
				{isOpen ? (
					<X className="w-6 h-6 text-gray-800" />
				) : (
					<Menu className="w-6 h-6 text-gray-800" />
				)}
			</button>

			{/* Sidebar container */}
			<aside
				className={`fixed top-0 left-0 z-40 h-full w-64 bg-white border-r border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:flex md:flex-col md:w-64 md:h-auto`}
			>
				<div className="flex items-center justify-between p-6 border-b border-gray-100">
					<Link href="/" className="flex items-center">
						<Car className="h-8 w-8 text-blue-600" />
						<span className="ml-2 text-2xl font-extrabold text-gray-900">Carla</span>
					</Link>
				</div>

				<nav className="flex-1 overflow-y-auto p-6 space-y-4">
					<UserInfo />
					{links}
					<Logout />
				</nav>
			</aside>
		</>
	);
}
