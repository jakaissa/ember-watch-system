
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Map as MapIcon, 
  MapPin, 
  AlertTriangle,
  Shield,
  Thermometer,
  Wind,
  Droplets,
  Eye
} from "lucide-react"

const ForestMap = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null)

  const zones = [
    { 
      id: "A-12", 
      name: "Pine Valley North", 
      risk: "High", 
      temperature: "28°C", 
      humidity: "35%", 
      windSpeed: "15 km/h",
      coordinates: { x: 20, y: 15 },
      staff: 3,
      lastInspection: "2 hours ago"
    },
    { 
      id: "B-8", 
      name: "Cedar Mountain East", 
      risk: "Medium", 
      temperature: "24°C", 
      humidity: "45%", 
      windSpeed: "8 km/h",
      coordinates: { x: 45, y: 25 },
      staff: 2,
      lastInspection: "4 hours ago"
    },
    { 
      id: "C-15", 
      name: "Oak Ridge Valley", 
      risk: "Low", 
      temperature: "22°C", 
      humidity: "60%", 
      windSpeed: "5 km/h",
      coordinates: { x: 70, y: 40 },
      staff: 2,
      lastInspection: "1 day ago"
    },
    { 
      id: "D-7", 
      name: "Maple Creek Basin", 
      risk: "Low", 
      temperature: "20°C", 
      humidity: "65%", 
      windSpeed: "3 km/h",
      coordinates: { x: 30, y: 60 },
      staff: 1,
      lastInspection: "6 hours ago"
    },
    { 
      id: "E-22", 
      name: "Birch Hill Ridge", 
      risk: "Medium", 
      temperature: "26°C", 
      humidity: "40%", 
      windSpeed: "12 km/h",
      coordinates: { x: 60, y: 70 },
      staff: 2,
      lastInspection: "3 hours ago"
    }
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return { bg: "bg-red-500", text: "text-red-800", badge: "bg-red-100 text-red-800" }
      case "Medium": return { bg: "bg-yellow-500", text: "text-yellow-800", badge: "bg-yellow-100 text-yellow-800" }
      default: return { bg: "bg-green-500", text: "text-green-800", badge: "bg-green-100 text-green-800" }
    }
  }

  const selectedZoneData = zones.find(zone => zone.id === selectedZone)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Forest Monitoring Map</h1>
          <p className="text-gray-600">Real-time zone monitoring and risk assessment</p>
        </div>
        <Button variant="outline">
          <Eye className="h-4 w-4 mr-2" />
          Satellite View
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Area */}
        <div className="lg:col-span-2">
          <Card className="h-[600px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapIcon className="h-5 w-5 text-green-600" />
                Forest Zones Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative w-full h-full bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden">
                {/* Simulated terrain background */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <pattern id="trees" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="#22c55e" opacity="0.3"/>
                        <circle cx="7" cy="4" r="1" fill="#16a34a" opacity="0.3"/>
                        <circle cx="4" cy="7" r="1" fill="#15803d" opacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#trees)"/>
                  </svg>
                </div>

                {/* Zone markers */}
                {zones.map((zone) => (
                  <div
                    key={zone.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:scale-110 ${
                      selectedZone === zone.id ? 'scale-125 z-10' : ''
                    }`}
                    style={{
                      left: `${zone.coordinates.x}%`,
                      top: `${zone.coordinates.y}%`,
                    }}
                    onClick={() => setSelectedZone(zone.id)}
                  >
                    <div className={`w-6 h-6 ${getRiskColor(zone.risk).bg} rounded-full shadow-lg border-2 border-white flex items-center justify-center`}>
                      <MapPin className="h-3 w-3 text-white" />
                    </div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs font-medium whitespace-nowrap">
                      {zone.id}
                    </div>
                  </div>
                ))}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                  <p className="text-xs font-semibold mb-2">Risk Levels</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-xs">High Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-xs">Medium Risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs">Low Risk</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Zone Details */}
        <div className="space-y-4">
          {selectedZoneData ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Zone {selectedZoneData.id}</span>
                  <Badge className={getRiskColor(selectedZoneData.risk).badge}>
                    {selectedZoneData.risk} Risk
                  </Badge>
                </CardTitle>
                <p className="text-sm text-gray-600">{selectedZoneData.name}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-red-500" />
                    <div>
                      <p className="text-xs text-gray-500">Temperature</p>
                      <p className="font-semibold">{selectedZoneData.temperature}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-blue-500" />
                    <div>
                      <p className="text-xs text-gray-500">Humidity</p>
                      <p className="font-semibold">{selectedZoneData.humidity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500">Wind Speed</p>
                      <p className="font-semibold">{selectedZoneData.windSpeed}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <div>
                      <p className="text-xs text-gray-500">Staff</p>
                      <p className="font-semibold">{selectedZoneData.staff} assigned</p>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-gray-500">Last Inspection</p>
                  <p className="font-semibold">{selectedZoneData.lastInspection}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Update Status
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                <p>Click on a zone marker to view details</p>
              </CardContent>
            </Card>
          )}

          {/* Risk Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Risk Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">High Risk Zones</span>
                  <Badge className="bg-red-100 text-red-800">
                    {zones.filter(z => z.risk === "High").length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Medium Risk Zones</span>
                  <Badge className="bg-yellow-100 text-yellow-800">
                    {zones.filter(z => z.risk === "Medium").length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Low Risk Zones</span>
                  <Badge className="bg-green-100 text-green-800">
                    {zones.filter(z => z.risk === "Low").length}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ForestMap
