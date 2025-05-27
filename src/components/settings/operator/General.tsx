"use client";
import { Facility } from "@/utils/supabase/types";
import { Building2, Edit, Mail, MapPin, Phone, Plus, Settings, Users } from "lucide-react";
import React, { useState } from "react";
import FacilityItem from "./facility/FacilityItem";

interface FacilityWithStats extends Facility {
	user_count?: number;
}

// Mock data
const mockFacilities: FacilityWithStats[] = [
	{
		id: "facility-1",
		name: "Downtown Plaza Parking",
		address: "123 Main Street, Downtown",
		contact_email: "admin@downtownplaza.com",
		contact_phone: "+1 (555) 123-4567",
		operator_id: "user-2",
		hourly_rate: 4.5,
		daily_max_rate: 25.0,
		monthly_rate: 150.0,
		recognition_sensitivity: "medium",
		auto_approval: false,
		max_vehicles_per_user: 3,
		user_count: 45,
		created_at: "2024-01-10T00:00:00Z",
		updated_at: "2024-01-10T00:00:00Z",
	},
	{
		id: "facility-2",
		name: "Mall Parking Center",
		address: "456 Shopping Blvd, Mall District",
		contact_email: "parking@mall.com",
		contact_phone: "+1 (555) 234-5678",
		operator_id: "user-2",
		hourly_rate: 3.0,
		daily_max_rate: 20.0,
		monthly_rate: 120.0,
		recognition_sensitivity: "high",
		auto_approval: true,
		max_vehicles_per_user: 2,
		user_count: 32,
		created_at: "2024-01-12T00:00:00Z",
		updated_at: "2024-01-12T00:00:00Z",
	},
];

function General() {
	const [facilities, setFacilities] = useState<FacilityWithStats[]>(mockFacilities);
	const [showAddForm, setShowAddForm] = useState(false);
	const [editingFacility, setEditingFacility] = useState<string | null>(null);
	const [formData, setFormData] = useState({
		name: "",
		address: "",
		contact_email: "",
		contact_phone: "",
		hourly_rate: "",
		daily_max_rate: "",
		monthly_rate: "",
	});
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitting(true);
		setError("");

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));

			const facilityData = {
				name: formData.name,
				address: formData.address,
				contact_email: formData.contact_email || undefined,
				contact_phone: formData.contact_phone || undefined,
				hourly_rate: Number.parseFloat(formData.hourly_rate),
				daily_max_rate: Number.parseFloat(formData.daily_max_rate),
				monthly_rate: Number.parseFloat(formData.monthly_rate),
			};

			if (editingFacility) {
				// Update existing facility
				setFacilities(
					facilities.map(f =>
						f.id === editingFacility
							? {
									...f,
									...facilityData,
									updated_at: new Date().toISOString(),
							  }
							: f
					)
				);
			} else {
				// Create new facility
				const newFacility: FacilityWithStats = {
					id: `facility-${Date.now()}`,
					...facilityData,
					operator_id: "user-2",
					recognition_sensitivity: "medium",
					auto_approval: false,
					max_vehicles_per_user: 3,
					user_count: 0,
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
				};
				setFacilities([...facilities, newFacility]);
			}

			handleCancel();
		} catch (error: any) {
			console.error("Error saving facility:", error);
			setError(error.message || "Failed to save facility");
		} finally {
			setSubmitting(false);
		}
	};

	const handleEdit = (facility: Facility) => {
		setFormData({
			name: facility.name,
			address: facility.address,
			contact_email: facility.contact_email || "",
			contact_phone: facility.contact_phone || "",
			hourly_rate: facility.hourly_rate.toString(),
			daily_max_rate: facility.daily_max_rate.toString(),
			monthly_rate: facility.monthly_rate.toString(),
		});
		setEditingFacility(facility.id);
		setShowAddForm(true);
	};

	const handleCancel = () => {
		setShowAddForm(false);
		setEditingFacility(null);
		setFormData({
			name: "",
			address: "",
			contact_email: "",
			contact_phone: "",
			hourly_rate: "",
			daily_max_rate: "",
			monthly_rate: "",
		});
		setError("");
	};

	return (
		<div className="p-6">
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-900">My Facilities</h1>
				<p className="text-gray-600 mt-2">
					Manage your parking facilities and their settings
				</p>
			</div>
			{/* Add Facility Button */}
			<div className="mb-6">
				<button
					onClick={() => setShowAddForm(true)}
					className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
				>
					<Plus className="h-4 w-4 mr-2" />
					Add New Facility
				</button>
			</div>

			{showAddForm && (
				<div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
					<div className="px-6 py-4 border-b border-gray-200">
						<h2 className="text-lg font-semibold text-gray-900">
							{editingFacility ? "Edit Facility" : "Add New Facility"}
						</h2>
					</div>
					<div className="p-6">
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Facility Name *
									</label>
									<input
										type="text"
										id="name"
										placeholder="Downtown Plaza Parking"
										value={formData.name}
										onChange={e =>
											setFormData({ ...formData, name: e.target.value })
										}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="address"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Address *
									</label>
									<input
										type="text"
										id="address"
										placeholder="123 Main Street, Downtown"
										value={formData.address}
										onChange={e =>
											setFormData({ ...formData, address: e.target.value })
										}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="contact_email"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Contact Email
									</label>
									<input
										type="email"
										id="contact_email"
										placeholder="admin@facility.com"
										value={formData.contact_email}
										onChange={e =>
											setFormData({
												...formData,
												contact_email: e.target.value,
											})
										}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<label
										htmlFor="contact_phone"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Contact Phone
									</label>
									<input
										type="tel"
										id="contact_phone"
										placeholder="+1 (555) 123-4567"
										value={formData.contact_phone}
										onChange={e =>
											setFormData({
												...formData,
												contact_phone: e.target.value,
											})
										}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<label
										htmlFor="hourly_rate"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Hourly Rate ($) *
									</label>
									<input
										type="number"
										step="0.25"
										min="0"
										id="hourly_rate"
										placeholder="4.50"
										value={formData.hourly_rate}
										onChange={e =>
											setFormData({
												...formData,
												hourly_rate: e.target.value,
											})
										}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="daily_max_rate"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Daily Maximum ($) *
									</label>
									<input
										type="number"
										step="0.50"
										min="0"
										id="daily_max_rate"
										placeholder="25.00"
										value={formData.daily_max_rate}
										onChange={e =>
											setFormData({
												...formData,
												daily_max_rate: e.target.value,
											})
										}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>
								<div className="md:col-span-2">
									<label
										htmlFor="monthly_rate"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Monthly Rate ($) *
									</label>
									<input
										type="number"
										step="5.00"
										min="0"
										id="monthly_rate"
										placeholder="150.00"
										value={formData.monthly_rate}
										onChange={e =>
											setFormData({
												...formData,
												monthly_rate: e.target.value,
											})
										}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>
							</div>

							<div className="flex space-x-3">
								<button
									type="submit"
									disabled={submitting}
									className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
								>
									{submitting
										? editingFacility
											? "Updating..."
											: "Creating..."
										: editingFacility
										? "Update Facility"
										: "Create Facility"}
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

			{/* Facilities List */}
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
				{facilities.length === 0 ? (
					<div className="col-span-full">
						<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
							<Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
							<h3 className="text-lg font-medium text-gray-900 mb-2">
								No facilities yet
							</h3>
							<p className="text-gray-600 mb-6">
								Create your first parking facility to get started
							</p>
							<button
								onClick={() => setShowAddForm(true)}
								className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
							>
								<Plus className="h-4 w-4 mr-2" />
								Add Facility
							</button>
						</div>
					</div>
				) : (
					facilities.map(facility => (
						<FacilityItem key={facility.id} facility={facility} handleEdit={handleEdit} />
					))
				)}
			</div>
		</div>
	);
}

export default General;
