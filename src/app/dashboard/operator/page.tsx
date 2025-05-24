"use client"

import { useState } from "react"
import { Users, Car, Activity, TrendingUp, Search, MoreVertical } from "lucide-react"

// Mock data for demonstration
const mockStats = {
  totalUsers: 1247,
  activeVehicles: 2156,
  todayEntries: 342,
  monthlyRevenue: 45600,
  avgDailyEntries: 287,
  peakHour: "2:00 PM - 3:00 PM",
}

const mockUsers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    vehicles: 2,
    totalEntries: 68,
    lastEntry: "2024-01-20 14:30",
    joinDate: "2024-01-15",
    status: "active",
    avatar: "JS",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    vehicles: 1,
    totalEntries: 45,
    lastEntry: "2024-01-19 16:45",
    joinDate: "2024-01-10",
    status: "active",
    avatar: "SJ",
  },
  {
    id: 3,
    name: "Mike Davis",
    email: "mike.davis@email.com",
    vehicles: 3,
    totalEntries: 123,
    lastEntry: "2024-01-20 09:15",
    joinDate: "2023-12-20",
    status: "active",
    avatar: "MD",
  },
  {
    id: 4,
    name: "Emily Chen",
    email: "emily.chen@email.com",
    vehicles: 1,
    totalEntries: 89,
    lastEntry: "2024-01-18 11:30",
    joinDate: "2024-01-05",
    status: "inactive",
    avatar: "EC",
  },
]

const mockRecentEntries = [
  { id: 1, licensePlate: "ABC-123", user: "John Smith", time: "14:30", gate: "A", avatar: "JS" },
  { id: 2, licensePlate: "XYZ-789", user: "Sarah Johnson", time: "14:25", gate: "B", avatar: "SJ" },
  { id: 3, licensePlate: "DEF-456", user: "Mike Davis", time: "14:20", gate: "A", avatar: "MD" },
  { id: 4, licensePlate: "GHI-321", user: "Emily Chen", time: "14:15", gate: "C", avatar: "EC" },
  { id: 5, licensePlate: "JKL-654", user: "Alex Wilson", time: "14:10", gate: "B", avatar: "AW" },
]

export default function OperatorDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Monitor your parking facility performance and user activity</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Users</p>
              <p className="text-3xl font-bold mt-1">{mockStats.totalUsers.toLocaleString()}</p>
              <p className="text-blue-100 text-sm mt-2">+12% from last month</p>
            </div>
            <div className="p-3 bg-white/20 rounded-lg">
              <Users className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Active Vehicles</p>
              <p className="text-3xl font-bold mt-1">{mockStats.activeVehicles.toLocaleString()}</p>
              <p className="text-green-100 text-sm mt-2">+8% from last month</p>
            </div>
            <div className="p-3 bg-white/20 rounded-lg">
              <Car className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Today's Entries</p>
              <p className="text-3xl font-bold mt-1">{mockStats.todayEntries}</p>
              <p className="text-purple-100 text-sm mt-2">+15% from yesterday</p>
            </div>
            <div className="p-3 bg-white/20 rounded-lg">
              <Activity className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Monthly Revenue</p>
              <p className="text-3xl font-bold mt-1">${mockStats.monthlyRevenue.toLocaleString()}</p>
              <p className="text-orange-100 text-sm mt-2">+22% from last month</p>
            </div>
            <div className="p-3 bg-white/20 rounded-lg">
              <TrendingUp className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Users Table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Recent Users</h2>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vehicles
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Entries
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Entry
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-semibold text-sm">{user.avatar}</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.vehicles}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.totalEntries}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.lastEntry}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Recent Entries */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Live Entries</h3>
              <p className="text-sm text-gray-500 mt-1">Real-time vehicle entries</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {mockRecentEntries.map((entry) => (
                  <div key={entry.id} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-xs">{entry.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{entry.licensePlate}</p>
                      <p className="text-xs text-gray-500 truncate">{entry.user}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-900">{entry.time}</p>
                      <p className="text-xs text-gray-500">Gate {entry.gate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Quick Stats</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Daily Average</span>
                <span className="text-sm font-semibold text-gray-900">{mockStats.avgDailyEntries}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Peak Hour</span>
                <span className="text-sm font-semibold text-gray-900">2-3 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Occupancy Rate</span>
                <span className="text-sm font-semibold text-green-600">87%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">System Uptime</span>
                <span className="text-sm font-semibold text-green-600">99.9%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>
            <div className="p-6 space-y-3">
              <button className="w-full px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Generate Report
              </button>
              <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                Export Data
              </button>
              <button className="w-full px-4 py-3 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                System Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
