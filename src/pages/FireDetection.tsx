
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Shield, 
  AlertTriangle, 
  Camera,
  Satellite,
  Activity,
  Clock,
  MapPin,
  Thermometer,
  Wind
} from "lucide-react"

const FireDetection = () => {
  const [detectionStatus, setDetectionStatus] = useState("active")

  const detectionSystems = [
    {
      id: 1,
      name: "AI Vision System Alpha",
      type: "Camera Network",
      location: "Pine Valley - Zone A-12",
      status: "online",
      confidence: 95,
      lastScan: "30 seconds ago",
      alerts: 2
    },
    {
      id: 2,
      name: "Thermal Detector Beta",
      type: "Thermal Imaging",
      location: "Cedar Mountain - Zone B-8",
      status: "online",
      confidence: 88,
      lastScan: "1 minute ago",
      alerts: 0
    },
    {
      id: 3,
      name: "Satellite Monitor Gamma",
      type: "Satellite Analysis",
      location: "Oak Ridge - Zone C-15",
      status: "maintenance",
      confidence: 0,
      lastScan: "2 hours ago",
      alerts: 1
    }
  ]

  const recentDetections = [
    {
      id: 1,
      timestamp: "2024-03-15 14:32:15",
      location: "Pine Valley - Zone A-12",
      confidence: 92,
      type: "Visual Detection",
      status: "investigating",
      temperature: "45°C",
      windSpeed: "12 km/h"
    },
    {
      id: 2,
      timestamp: "2024-03-15 13:18:42",
      location: "Cedar Mountain - Zone B-8",
      confidence: 78,
      type: "Thermal Anomaly",
      status: "false-positive",
      temperature: "38°C",
      windSpeed: "8 km/h"
    },
    {
      id: 3,
      timestamp: "2024-03-15 11:45:30",
      location: "Oak Ridge - Zone C-15",
      confidence: 85,
      type: "Smoke Detection",
      status: "confirmed",
      temperature: "52°C",
      windSpeed: "15 km/h"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-100 text-green-800"
      case "maintenance": return "bg-yellow-100 text-yellow-800"
      case "offline": return "bg-red-100 text-red-800"
      case "investigating": return "bg-blue-100 text-blue-800"
      case "confirmed": return "bg-red-100 text-red-800"
      case "false-positive": return "bg-gray-100 text-gray-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Fire Detection System</h1>
          <p className="text-gray-600">AI-powered fire monitoring and early warning system</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Camera className="h-4 w-4 mr-2" />
            Camera Feed
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Manual Alert
          </Button>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-600">Active Systems</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Activity className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-gray-600">Scans Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-600">Active Alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="text-2xl font-bold">98.5%</p>
                <p className="text-sm text-gray-600">System Uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Detection Systems */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-blue-600" />
              Detection Systems
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {detectionSystems.map((system) => (
              <div key={system.id} className="p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{system.name}</h4>
                    <p className="text-sm text-gray-600">{system.type}</p>
                  </div>
                  <Badge className={getStatusColor(system.status)}>
                    {system.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>{system.location}</span>
                  </div>
                  
                  {system.status === "online" && (
                    <>
                      <div className="flex items-center justify-between text-sm">
                        <span>Confidence Level</span>
                        <span className="font-medium">{system.confidence}%</span>
                      </div>
                      <Progress value={system.confidence} className="h-2" />
                    </>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Last scan: {system.lastScan}</span>
                    <span>{system.alerts} alerts today</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Detections */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Recent Detections
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentDetections.map((detection) => (
              <div key={detection.id} className="p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-mono">{detection.timestamp}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{detection.location}</span>
                    </div>
                  </div>
                  <Badge className={getStatusColor(detection.status)}>
                    {detection.status}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Detection Type: {detection.type}</span>
                    <span className="font-medium">{detection.confidence}% confidence</span>
                  </div>
                  
                  <div className="flex gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Thermometer className="h-3 w-3" />
                      <span>{detection.temperature}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Wind className="h-3 w-3" />
                      <span>{detection.windSpeed}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* AI Model Integration Ready Section */}
      <Card className="border-dashed border-2 border-gray-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-600">
            <Satellite className="h-5 w-5" />
            AI Model Integration Ready
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Ready for AI Model Integration
            </h3>
            <p className="text-gray-600 mb-4">
              This section is prepared to receive your AI fire detection model. 
              The system architecture supports real-time image analysis, thermal detection, 
              and automated alert generation.
            </p>
            <div className="flex justify-center gap-3">
              <Button variant="outline">
                <Camera className="h-4 w-4 mr-2" />
                Test Integration
              </Button>
              <Button>
                <Activity className="h-4 w-4 mr-2" />
                Configure Model
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default FireDetection
