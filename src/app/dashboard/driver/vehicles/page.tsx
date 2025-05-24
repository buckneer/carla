"use client"

import type React from "react"

import { useState } from "react"
import { Car, Plus, Edit, Trash2, Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react"

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
    status: "pending",
  },
]

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState(mockVehicles)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingVehicle, setEditingVehicle] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    licensePlate: "",
    make: "",
    model: "",
    year: "",
    color: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingVehicle) {
      // Update existing vehicle
      setVehicles(
        vehicles.map((v) =>
          v.id === editingVehicle ? { ...v, ...formData, year: Number.parseInt(formData.year) } : v,
        ),
      )
      setEditingVehicle(null)
    } else {
      // Add new vehicle
      const newVehicle = {
        id: vehicles.length + 1,
        ...formData,
        year: Number.parseInt(formData.year),
        registeredDate: new Date().toISOString().split("T")[0],
        lastUsed: "-",
        totalEntries: 0,
        status: "pending" as const,
      }
      setVehicles([...vehicles, newVehicle])
    }

    setFormData({ licensePlate: "", make: "", model: "", year: "", color: "" })
    setShowAddForm(false)
  }

  const handleEdit = (vehicle: any) => {
    setFormData({
      licensePlate: vehicle.licensePlate,
      make: vehicle.make,
      model: vehicle.model,
      year: vehicle.year.toString(),
      color: vehicle.color,
    })
    setEditingVehicle(vehicle.id)
    setShowAddForm(true)
  }

  const handleDelete = (id: number) => {
    setVehicles(vehicles.filter((v) => v.id !== id))
  }

  const handleCancel = () => {
    setShowAddForm(false)
    setEditingVehicle(null)
    setFormData({ licensePlate: "", make: "", model: "", year: "", color: "" })
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Vehicles</h1>
        <p className="text-gray-600 mt-2">Manage your registered vehicles and track their status</p>
      </div>

      {/* Add Vehicle Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowAddForm(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Register New Vehicle
        </button>
      </div>

      {/* Add/Edit Vehicle Form */}
      {showAddForm && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              {editingVehicle ? "Edit Vehicle" : "Register New Vehicle"}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {editingVehicle ? "Update your vehicle information" : "Add a new vehicle to your account"}
            </p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700 mb-2">
                    License Plate *
                  </label>
                  <input
                    type="text"
                    id="licensePlate"
                    placeholder="e.g., ABC-123"
                    value={formData.licensePlate}
                    onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value.toUpperCase() })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-2">
                    Make *
                  </label>
                  <input
                    type="text"
                    id="make"
                    placeholder="e.g., Toyota"
                    value={formData.make}
                    onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
                    Model *
                  </label>
                  <input
                    type="text"
                    id="model"
                    placeholder="e.g., Camry"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                    Year *
                  </label>
                  <input
                    type="number"
                    id="year"
                    placeholder="e.g., 2022"
                    min="1900"
                    max={new Date().getFullYear() + 1}
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-2">
                    Color *
                  </label>
                  <input
                    type="text"
                    id="color"
                    placeholder="e.g., Silver"
                    value={formData.color}
                    onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-900">Registration Process</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      After submitting, your vehicle will be pending approval from parking operators. You'll receive a
                      notification once it's approved and ready to use.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingVehicle ? "Update Vehicle" : "Register Vehicle"}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Vehicles List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Registered Vehicles</h2>
          <p className="text-sm text-gray-600 mt-1">
            {vehicles.length} vehicle{vehicles.length !== 1 ? "s" : ""} registered
          </p>
        </div>

        {vehicles.length === 0 ? (
          <div className="p-12 text-center">
            <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No vehicles registered</h3>
            <p className="text-gray-600 mb-6">Get started by registering your first vehicle</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-4 w-4 mr-2" />
              Register Vehicle
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="px-6 py-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Car className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-semibold text-gray-900">{vehicle.licensePlate}</h3>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full ${
                            vehicle.status === "active"
                              ? "bg-green-100 text-green-800"
                              : vehicle.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {vehicle.status === "active" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {vehicle.status === "pending" && <Clock className="h-3 w-3 mr-1" />}
                          {vehicle.status === "active"
                            ? "Active"
                            : vehicle.status === "pending"
                              ? "Pending Approval"
                              : "Inactive"}
                        </span>
                      </div>
                      <p className="text-lg text-gray-600 mt-1">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                      </p>
                      <p className="text-sm text-gray-500">Color: {vehicle.color}</p>
                      <div className="flex items-center space-x-6 mt-3">
                        <span className="inline-flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          Registered: {vehicle.registeredDate}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          Last used: {vehicle.lastUsed}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{vehicle.totalEntries}</p>
                      <p className="text-sm text-gray-500">Total entries</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(vehicle)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(vehicle.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
