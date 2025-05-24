"use client"

import { useState } from "react"
import { Save, Bell, Shield, Camera, Clock, DollarSign, Users, AlertTriangle } from "lucide-react"

export default function OperatorSettingsPage() {
  const [settings, setSettings] = useState({
    // General Settings
    facilityName: "Downtown Plaza Parking",
    facilityAddress: "123 Main Street, Downtown",
    contactEmail: "admin@downtownplaza.com",
    contactPhone: "+1 (555) 123-4567",

    // System Settings
    recognitionSensitivity: "high",
    autoApproval: false,
    maxVehiclesPerUser: 3,
    sessionTimeout: 30,

    // Pricing Settings
    hourlyRate: 4.5,
    dailyMaxRate: 25.0,
    monthlyRate: 150.0,

    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    systemAlerts: true,
    userRegistrations: true,

    // Security Settings
    requirePhoneVerification: true,
    allowGuestAccess: false,
    dataRetentionDays: 90,

    // Operating Hours
    operatingHours: {
      monday: { open: "06:00", close: "22:00", enabled: true },
      tuesday: { open: "06:00", close: "22:00", enabled: true },
      wednesday: { open: "06:00", close: "22:00", enabled: true },
      thursday: { open: "06:00", close: "22:00", enabled: true },
      friday: { open: "06:00", close: "23:00", enabled: true },
      saturday: { open: "08:00", close: "23:00", enabled: true },
      sunday: { open: "08:00", close: "20:00", enabled: true },
    },
  })

  const [activeTab, setActiveTab] = useState("general")

  const handleSave = () => {
    // Handle save logic here
    console.log("Settings saved:", settings)
    alert("Settings saved successfully!")
  }

  const tabs = [
    { id: "general", label: "General", icon: Users },
    { id: "system", label: "System", icon: Camera },
    { id: "pricing", label: "Pricing", icon: DollarSign },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "hours", label: "Operating Hours", icon: Clock },
  ]

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Configure your parking facility settings and preferences</p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            {/* General Settings */}
            {activeTab === "general" && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">General Settings</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Facility Name</label>
                      <input
                        type="text"
                        value={settings.facilityName}
                        onChange={(e) => setSettings({ ...settings, facilityName: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                      <input
                        type="email"
                        value={settings.contactEmail}
                        onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Facility Address</label>
                    <input
                      type="text"
                      value={settings.facilityAddress}
                      onChange={(e) => setSettings({ ...settings, facilityAddress: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
                    <input
                      type="tel"
                      value={settings.contactPhone}
                      onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* System Settings */}
            {activeTab === "system" && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">System Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Recognition Sensitivity</label>
                    <select
                      value={settings.recognitionSensitivity}
                      onChange={(e) => setSettings({ ...settings, recognitionSensitivity: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="low">Low - More permissive</option>
                      <option value="medium">Medium - Balanced</option>
                      <option value="high">High - Strict recognition</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Max Vehicles per User</label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={settings.maxVehiclesPerUser}
                        onChange={(e) =>
                          setSettings({ ...settings, maxVehiclesPerUser: Number.parseInt(e.target.value) })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                      <input
                        type="number"
                        min="5"
                        max="120"
                        value={settings.sessionTimeout}
                        onChange={(e) => setSettings({ ...settings, sessionTimeout: Number.parseInt(e.target.value) })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="autoApproval"
                      checked={settings.autoApproval}
                      onChange={(e) => setSettings({ ...settings, autoApproval: e.target.checked })}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="autoApproval" className="ml-2 text-sm text-gray-700">
                      Auto-approve new vehicle registrations
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Pricing Settings */}
            {activeTab === "pricing" && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Pricing Settings</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate ($)</label>
                      <input
                        type="number"
                        step="0.25"
                        min="0"
                        value={settings.hourlyRate}
                        onChange={(e) => setSettings({ ...settings, hourlyRate: Number.parseFloat(e.target.value) })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Daily Maximum ($)</label>
                      <input
                        type="number"
                        step="0.50"
                        min="0"
                        value={settings.dailyMaxRate}
                        onChange={(e) => setSettings({ ...settings, dailyMaxRate: Number.parseFloat(e.target.value) })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Rate ($)</label>
                      <input
                        type="number"
                        step="5.00"
                        min="0"
                        value={settings.monthlyRate}
                        onChange={(e) => setSettings({ ...settings, monthlyRate: Number.parseFloat(e.target.value) })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-blue-900">Pricing Information</h4>
                        <p className="text-sm text-blue-700 mt-1">
                          Changes to pricing will take effect immediately for new parking sessions. Existing sessions
                          will continue at their original rate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === "notifications" && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Settings</h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                        <p className="text-sm text-gray-500">Receive notifications via email</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.emailNotifications}
                        onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">SMS Notifications</h3>
                        <p className="text-sm text-gray-500">Receive notifications via SMS</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.smsNotifications}
                        onChange={(e) => setSettings({ ...settings, smsNotifications: e.target.checked })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">System Alerts</h3>
                        <p className="text-sm text-gray-500">Critical system notifications</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.systemAlerts}
                        onChange={(e) => setSettings({ ...settings, systemAlerts: e.target.checked })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">User Registrations</h3>
                        <p className="text-sm text-gray-500">New user registration requests</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.userRegistrations}
                        onChange={(e) => setSettings({ ...settings, userRegistrations: e.target.checked })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Require Phone Verification</h3>
                        <p className="text-sm text-gray-500">Users must verify phone numbers during registration</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.requirePhoneVerification}
                        onChange={(e) => setSettings({ ...settings, requirePhoneVerification: e.target.checked })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Allow Guest Access</h3>
                        <p className="text-sm text-gray-500">Allow temporary access for unregistered vehicles</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.allowGuestAccess}
                        onChange={(e) => setSettings({ ...settings, allowGuestAccess: e.target.checked })}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Data Retention (days)</label>
                    <input
                      type="number"
                      min="30"
                      max="365"
                      value={settings.dataRetentionDays}
                      onChange={(e) => setSettings({ ...settings, dataRetentionDays: Number.parseInt(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">How long to keep user activity data</p>
                  </div>
                </div>
              </div>
            )}

            {/* Operating Hours */}
            {activeTab === "hours" && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Operating Hours</h2>
                <div className="space-y-4">
                  {Object.entries(settings.operatingHours).map(([day, hours]) => (
                    <div key={day} className="flex items-center space-x-4">
                      <div className="w-20">
                        <input
                          type="checkbox"
                          id={day}
                          checked={hours.enabled}
                          onChange={(e) =>
                            setSettings({
                              ...settings,
                              operatingHours: {
                                ...settings.operatingHours,
                                [day]: { ...hours, enabled: e.target.checked },
                              },
                            })
                          }
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-2"
                        />
                        <label htmlFor={day} className="text-sm font-medium text-gray-900 capitalize">
                          {day}
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="time"
                          value={hours.open}
                          onChange={(e) =>
                            setSettings({
                              ...settings,
                              operatingHours: {
                                ...settings.operatingHours,
                                [day]: { ...hours, open: e.target.value },
                              },
                            })
                          }
                          disabled={!hours.enabled}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                        />
                        <span className="text-gray-500">to</span>
                        <input
                          type="time"
                          value={hours.close}
                          onChange={(e) =>
                            setSettings({
                              ...settings,
                              operatingHours: {
                                ...settings.operatingHours,
                                [day]: { ...hours, close: e.target.value },
                              },
                            })
                          }
                          disabled={!hours.enabled}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
