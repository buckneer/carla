"use client"

import type React from "react"

import { useState } from "react"
import { Car, Plus, Edit, Trash2, Calendar, Clock, MapPin, TrendingUp, Activity } from "lucide-react"

// Mock data for demonstration
const mockVehicles = [
  {
    id: 1,
    licensePlate: "ABC-123",
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    registeredDate: "2024-01-15",
    lastUsed: "2024-01-20",
    totalEntries: 45,
    status: "active",
  },
  {
    id: 2,
    licensePlate: "XYZ-789",
    make: "Honda",
    model: "Civic",
    year: 2021,
    color: "Blue",
    registeredDate: "2024-01-10",
    lastUsed: "2024-01-18",
    totalEntries: 23,
    status: "active",
  },
]

const mockStats = {
  totalVehicles: 2,
  totalEntries: 68,
  favoriteLocation: "Downtown Plaza",
  avgEntriesPerWeek: 12,
}

const mockRecentActivity = [
  { id: 1, vehicle: "ABC-123", location: "Downtown Plaza", time: "2024-01-20 14:30", type: "entry" },
  { id: 2, vehicle: "ABC-123", location: "Downtown Plaza", time: "2024-01-20 18:45", type: "exit" },
  { id: 3, vehicle: "XYZ-789", location: "Mall Parking", time: "2024-01-19 10:15", type: "entry" },
  { id: 4, vehicle: "XYZ-789", location: "Mall Parking", time: "2024-01-19 15:20", type: "exit" },
]

export default function DriverDashboard() {
  const [vehicles, setVehicles] = useState(mockVehicles)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newVehicle, setNewVehicle] = useState({
    licensePlate: "",
    make: "",
    model: "",
    year: "",
    color: "",
  })

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault()
    const vehicle = {
      id: vehicles.length + 1,
      ...newVehicle,
      year: Number.parseInt(newVehicle.year),
      registeredDate: new Date().toISOString().split("T")[0],
      lastUsed: "-",
      totalEntries: 0,
      status: "active",
    }
    setVehicles([...vehicles, vehicle])
    setNewVehicle({ licensePlate: "", make: "", model: "", year: "", color: "" })
    setShowAddForm(false)
  }

  const handleDeleteVehicle = (id: number) => {
    setVehicles(vehicles.filter((v) => v.id !== id))
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
        <p className="text-gray-600 mt-2">Manage your vehicles and track your parking activity</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Car className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Vehicles</p>
              <p className="text-2xl font-bold text-gray-900">{mockStats.totalVehicles}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Entries</p>
              <p className="text-2xl font-bold text-gray-900">{mockStats.totalEntries}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <MapPin className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Favorite Location</p>
              <p className="text-lg font-bold text-gray-900">{mockStats.favoriteLocation}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Weekly Average</p>
              <p className="text-2xl font-bold text-gray-900">{mockStats.avgEntriesPerWeek}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Vehicles List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">My Vehicles</h2>
              <button
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Vehicle
              </button>
            </div>

            {showAddForm && (
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <form onSubmit={handleAddVehicle} className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="License Plate"
                    value={newVehicle.licensePlate}
                    onChange={(e) => setNewVehicle({ ...newVehicle, licensePlate: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Make"
                    value={newVehicle.make}
                    onChange={(e) => setNewVehicle({ ...newVehicle, make: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Model"
                    value={newVehicle.model}
                    onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Year"
                    value={newVehicle.year}
                    onChange={(e) => setNewVehicle({ ...newVehicle, year: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Color"
                    value={newVehicle.color}
                    onChange={(e) => setNewVehicle({ ...newVehicle, color: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <div className="flex space-x-2">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="divide-y divide-gray-200">
              {vehicles.map((vehicle) => (
                <div key={vehicle.id} className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Car className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{vehicle.licensePlate}</h3>
                        <p className="text-sm text-gray-600">
                          {vehicle.year} {vehicle.make} {vehicle.model} • {vehicle.color}
                        </p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="inline-flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            Registered: {vehicle.registeredDate}
                          </span>
                          <span className="inline-flex items-center text-xs text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            Last used: {vehicle.lastUsed}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{vehicle.totalEntries} entries</p>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            vehicle.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {vehicle.status}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteVehicle(vehicle.id)}
                          className="p-2 text-gray-400 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {mockRecentActivity.map((activity) => (
                <div key={activity.id} className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${activity.type === "entry" ? "bg-green-500" : "bg-red-500"}`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.vehicle}</p>
                      <p className="text-xs text-gray-600">{activity.location}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        activity.type === "entry" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {activity.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
