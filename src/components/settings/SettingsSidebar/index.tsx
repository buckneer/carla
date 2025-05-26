import React from "react";
import { LucideIcon } from "lucide-react";

export interface Tab {
	id: string;
	label: string;
	icon: LucideIcon;
}

export interface SidebarProps {
	tabs: Tab[];
	activeTab: string;
	onTabClick: (tabId: string) => void;
}

const SettingsSidebar: React.FC<SidebarProps> = ({ tabs, activeTab, onTabClick }) => {
	return (
		<div className="w-full md:w-64">
			<nav className="flex flex-wrap flex-row gap-2 md:flex-col md:gap-1">
				{tabs.map(tab => {
					const Icon = tab.icon;
					const isActive = activeTab === tab.id;
					return (
						<button
							key={tab.id}
							onClick={() => onTabClick(tab.id)}
							className={`
                flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                basis-1/2 sm:basis-1/3 md:basis-full
                ${
					isActive
						? "bg-blue-100 text-blue-700"
						: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
				}
              `}
						>
							<Icon className="h-5 w-5 mr-3" />
							<span className="whitespace-nowrap">{tab.label}</span>
						</button>
					);
				})}
			</nav>
		</div>
	);
};

export default SettingsSidebar;
