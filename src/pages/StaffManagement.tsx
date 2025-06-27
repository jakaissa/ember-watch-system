
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Users, 
  Plus, 
  Search,
  Phone,
  Mail,
  MapPin,
  User,
  Calendar
} from "lucide-react"

const StaffManagement = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const staff = [
    {
      id: 1,
      name: "John Rodriguez",
      role: "Forest Supervisor",
      forest: "Pine Valley National Forest",
      zone: "Zone A-12",
      phone: "+1 (555) 123-4567",
      email: "john.rodriguez@forestguard.com",
      status: "active",
      experience: "8 years",
      specialization: "Fire Prevention"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Fire Detection Specialist",
      forest: "Cedar Mountain Reserve",
      zone: "Zone B-8",
      phone: "+1 (555) 234-5678",
      email: "sarah.chen@forestguard.com",
      status: "active",
      experience: "5 years",
      specialization: "AI Detection Systems"
    },
    {
      id: 3,
      name: "Mike Thompson",
      role: "Forest Ranger",
      forest: "Oak Ridge Forest",
      zone: "Zone C-15",
      phone: "+1 (555) 345-6789",
      email: "mike.thompson@forestguard.com",
      status: "on-duty",
      experience: "12 years",
      specialization: "Wildlife Management"
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Environmental Analyst",
      forest: "Maple Creek Preserve",
      zone: "Zone D-7",
      phone: "+1 (555) 456-7890",
      email: "emma.wilson@forestguard.com",
      status: "active",
      experience: "3 years",
      specialization: "Data Analysis"
    },
    {
      id: 5,
      name: "David Garcia",
      role: "Senior Ranger",
      forest: "Pine Valley National Forest",
      zone: "Zone A-5",
      phone: "+1 (555) 567-8901",
      email: "david.garcia@forestguard.com",
      status: "off-duty",
      experience: "15 years",
      specialization: "Emergency Response"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800"
      case "on-duty": return "bg-blue-100 text-blue-800"
      case "off-duty": return "bg-gray-100 text-gray-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const filteredStaff = staff.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.forest.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Staff Management</h1>
          <p className="text-gray-600">Manage forest personnel and assignments</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New Staff
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name, role, or forest..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Staff Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">48</p>
                <p className="text-sm text-gray-600">Total Staff</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-2xl font-bold">32</p>
                <p className="text-sm text-gray-600">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-gray-600">On Duty</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-gray-600">Off Duty</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Staff List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredStaff.map((person) => (
          <Card key={person.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{person.name}</CardTitle>
                    <p className="text-sm text-gray-600">{person.role}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(person.status)}>
                  {person.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span>{person.forest} - {person.zone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-gray-500" />
                <span>{person.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="truncate">{person.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>{person.experience} experience</span>
              </div>
              <div className="pt-2">
                <Badge variant="outline" className="text-xs">
                  {person.specialization}
                </Badge>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Reassign
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default StaffManagement
