
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  History, 
  Flame, 
  Calendar,
  MapPin,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle,
  Search,
  Filter
} from "lucide-react"

const IncidentHistory = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState("2024")

  const incidents = [
    {
      id: 1,
      date: "2024-03-10",
      time: "14:23",
      title: "Oak Ridge Valley Fire",
      location: "Oak Ridge Forest - Zone C-15",
      severity: "High",
      cause: "Lightning Strike",
      area: "45 hectares",
      duration: "8 hours",
      staffDeployed: 24,
      status: "resolved",
      damages: "Moderate tree damage, no structures affected",
      responseTime: "12 minutes",
      description: "Lightning-induced fire during thunderstorm. Quick response prevented major spread."
    },
    {
      id: 2,
      date: "2024-02-28",
      time: "09:15",
      title: "Pine Valley Controlled Burn",
      location: "Pine Valley National Forest - Zone A-8",
      severity: "Low",
      cause: "Controlled Burn",
      area: "120 hectares",
      duration: "6 hours",
      staffDeployed: 12,
      status: "completed",
      damages: "Planned forest management activity",
      responseTime: "N/A",
      description: "Scheduled controlled burn for forest health management and fire prevention."
    },
    {
      id: 3,
      date: "2024-02-15",
      time: "16:45",
      title: "Cedar Mountain Campfire Incident",
      location: "Cedar Mountain Reserve - Zone B-12",
      severity: "Medium",
      cause: "Unattended Campfire",
      area: "8 hectares",
      duration: "3 hours",
      staffDeployed: 8,
      status: "resolved",
      damages: "Minor undergrowth damage",
      responseTime: "18 minutes",
      description: "Unattended campfire spread to surrounding vegetation. Contained quickly by ground crew."
    },
    {
      id: 4,
      date: "2024-01-22",
      time: "11:30",
      title: "Maple Creek Brush Fire",
      location: "Maple Creek Preserve - Zone D-5",
      severity: "Low",
      cause: "Electrical Equipment",
      area: "2 hectares",
      duration: "1.5 hours",
      staffDeployed: 6,
      status: "resolved",
      damages: "Minimal brush loss",
      responseTime: "8 minutes",
      description: "Small fire caused by faulty electrical equipment. Rapid containment prevented spread."
    },
    {
      id: 5,
      date: "2023-09-18",
      time: "13:20",
      title: "Pine Valley Major Fire",
      location: "Pine Valley National Forest - Zone A-15",
      severity: "Critical",
      cause: "Arson",
      area: "280 hectares",
      duration: "72 hours",
      staffDeployed: 45,
      status: "resolved",
      damages: "Significant forest loss, 1 structure damaged",
      responseTime: "15 minutes",
      description: "Major fire incident requiring multi-day response. Investigation confirmed arson as cause."
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "bg-red-600 text-white"
      case "High": return "bg-red-100 text-red-800"
      case "Medium": return "bg-yellow-100 text-yellow-800"
      case "Low": return "bg-green-100 text-green-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "resolved": return <CheckCircle className="h-4 w-4 text-green-600" />
      case "completed": return <CheckCircle className="h-4 w-4 text-blue-600" />
      default: return <AlertTriangle className="h-4 w-4 text-yellow-600" />
    }
  }

  const filteredIncidents = incidents.filter(incident =>
    incident.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    incident.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    incident.cause.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const stats = {
    total: incidents.length,
    resolved: incidents.filter(i => i.status === "resolved").length,
    thisYear: incidents.filter(i => i.date.startsWith("2024")).length,
    avgResponseTime: "13 minutes"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Incident History</h1>
          <p className="text-gray-600">Historical fire incidents and response records</p>
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <History className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{stats.total}</p>
                <p className="text-sm text-gray-600">Total Incidents</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{stats.resolved}</p>
                <p className="text-sm text-gray-600">Resolved</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">{stats.thisYear}</p>
                <p className="text-sm text-gray-600">This Year</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">{stats.avgResponseTime}</p>
                <p className="text-sm text-gray-600">Avg Response</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search incidents by title, location, or cause..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select 
              className="px-3 py-2 border border-gray-300 rounded-md"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="all">All Years</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Incidents Timeline */}
      <div className="space-y-4">
        {filteredIncidents.map((incident) => (
          <Card key={incident.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Flame className="h-6 w-6 text-orange-600" />
                  <div>
                    <CardTitle className="text-lg">{incident.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{incident.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{incident.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getSeverityColor(incident.severity)}>
                    {incident.severity}
                  </Badge>
                  {getStatusIcon(incident.status)}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span>{incident.location}</span>
              </div>

              <p className="text-sm text-gray-700">{incident.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Cause</p>
                  <p className="font-medium">{incident.cause}</p>
                </div>
                <div>
                  <p className="text-gray-500">Area Affected</p>
                  <p className="font-medium">{incident.area}</p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium">{incident.duration}</p>
                </div>
                <div>
                  <p className="text-gray-500">Response Time</p>
                  <p className="font-medium">{incident.responseTime}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Staff Deployed</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="font-medium">{incident.staffDeployed} personnel</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500">Damages</p>
                  <p className="font-medium">{incident.damages}</p>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Download Report
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default IncidentHistory
