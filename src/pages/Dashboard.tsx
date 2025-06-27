
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  TreePine, 
  Users, 
  Shield, 
  AlertTriangle,
  Activity,
  Flame,
  MapPin,
  Clock
} from "lucide-react"

const Dashboard = () => {
  const stats = [
    {
      title: "Total Forests",
      value: "12",
      icon: TreePine,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Active Staff",
      value: "48",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Monitoring Zones",
      value: "156",
      icon: Shield,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Active Alerts",
      value: "3",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ]

  const recentAlerts = [
    {
      id: 1,
      forest: "Pine Valley National Forest",
      zone: "Zone A-12",
      type: "High Risk",
      time: "2 hours ago",
      status: "active"
    },
    {
      id: 2,
      forest: "Cedar Mountain Reserve",
      zone: "Zone B-8",
      type: "Medium Risk",
      time: "4 hours ago",
      status: "monitoring"
    },
    {
      id: 3,
      forest: "Oak Ridge Forest",
      zone: "Zone C-15",
      type: "Fire Detected",
      time: "1 day ago",
      status: "resolved"
    }
  ]

  const forestStats = [
    { name: "Pine Valley National Forest", zones: 45, staff: 12, risk: "Low" },
    { name: "Cedar Mountain Reserve", zones: 32, staff: 8, risk: "Medium" },
    { name: "Oak Ridge Forest", zones: 28, staff: 10, risk: "High" },
    { name: "Maple Creek Preserve", zones: 22, staff: 6, risk: "Low" }
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return "bg-red-100 text-red-800"
      case "Medium": return "bg-yellow-100 text-yellow-800"
      default: return "bg-green-100 text-green-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-red-100 text-red-800"
      case "monitoring": return "bg-yellow-100 text-yellow-800"
      default: return "bg-green-100 text-green-800"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Forest Management Dashboard</h1>
        <p className="text-green-100">Real-time monitoring and management of forest resources</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 ${stat.bgColor} rounded-full`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <p className="font-medium text-sm">{alert.forest}</p>
                    </div>
                    <p className="text-sm text-gray-600">{alert.zone} - {alert.type}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(alert.status)}>
                    {alert.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Forest Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TreePine className="h-5 w-5 text-green-600" />
              Forest Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {forestStats.map((forest, index) => (
                <div key={index} className="p-3 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-sm">{forest.name}</p>
                    <Badge className={getRiskColor(forest.risk)}>
                      {forest.risk} Risk
                    </Badge>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>{forest.zones} zones</span>
                    <span>{forest.staff} staff assigned</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-600" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">New staff member assigned to Pine Valley</p>
                <p className="text-xs text-gray-500">30 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">Zone B-8 risk level updated to Medium</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">Weekly forest inspection completed</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">Fire incident resolved in Oak Ridge</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard
