import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { 
  TreePine, 
  Plus, 
  MapPin, 
  Calendar,
  Users,
  Ruler,
  Leaf,
  Info
} from "lucide-react"

const ForestRegistry = () => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    area: "",
    forestType: "",
    establishedDate: "",
    description: "",
    dominantSpecies: "",
    elevation: "",
    annualRainfall: "",
    soilType: "",
    averageAge: "",
    managementPlan: ""
  })

  const forests = [
    {
      id: 1,
      name: "Pine Valley National Forest",
      location: "Northern Region",
      area: "15,420 hectares",
      type: "Coniferous",
      established: "1985",
      zones: 45,
      staff: 12,
      dominantSpecies: "Pinus sylvestris",
      riskLevel: "Medium",
      lastSurvey: "2024-01-15"
    },
    {
      id: 2,
      name: "Cedar Mountain Reserve",
      location: "Eastern Highlands",
      area: "8,750 hectares",
      type: "Mixed",
      established: "1992",
      zones: 32,
      staff: 8,
      dominantSpecies: "Cedrus atlantica",
      riskLevel: "Low",
      lastSurvey: "2024-02-20"
    },
    {
      id: 3,
      name: "Oak Ridge Forest",
      location: "Central Valley",
      area: "12,300 hectares",
      type: "Deciduous",
      established: "1978",
      zones: 28,
      staff: 10,
      dominantSpecies: "Quercus robur",
      riskLevel: "High",
      lastSurvey: "2024-01-08"
    }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Forest data:", formData)
    setShowForm(false)
    setFormData({
      name: "",
      location: "",
      area: "",
      forestType: "",
      establishedDate: "",
      description: "",
      dominantSpecies: "",
      elevation: "",
      annualRainfall: "",
      soilType: "",
      averageAge: "",
      managementPlan: ""
    })
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return "bg-red-100 text-red-800"
      case "Medium": return "bg-yellow-100 text-yellow-800"
      default: return "bg-green-100 text-green-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Forest Registry</h1>
          <p className="text-gray-600">Manage forest characteristics and information</p>
        </div>
        <Button 
          onClick={() => setShowForm(!showForm)}
          className="bg-green-600 hover:bg-green-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          {showForm ? "Cancel" : "Register New Forest"}
        </Button>
      </div>

      {/* Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TreePine className="h-5 w-5 text-green-600" />
              Forest Registration Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
                  
                  <div>
                    <Label htmlFor="name">Forest Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter forest name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="Geographic location"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="area">Total Area (hectares) *</Label>
                    <Input
                      id="area"
                      value={formData.area}
                      onChange={(e) => handleInputChange("area", e.target.value)}
                      placeholder="e.g., 15420"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="forestType">Forest Type *</Label>
                    <Input
                      id="forestType"
                      value={formData.forestType}
                      onChange={(e) => handleInputChange("forestType", e.target.value)}
                      placeholder="e.g., Coniferous, Deciduous, Mixed"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="establishedDate">Established Date</Label>
                    <Input
                      id="establishedDate"
                      type="date"
                      value={formData.establishedDate}
                      onChange={(e) => handleInputChange("establishedDate", e.target.value)}
                    />
                  </div>
                </div>

                {/* Characteristics */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Forest Characteristics</h3>
                  
                  <div>
                    <Label htmlFor="dominantSpecies">Dominant Species</Label>
                    <Input
                      id="dominantSpecies"
                      value={formData.dominantSpecies}
                      onChange={(e) => handleInputChange("dominantSpecies", e.target.value)}
                      placeholder="Scientific name of dominant tree species"
                    />
                  </div>

                  <div>
                    <Label htmlFor="elevation">Average Elevation (meters)</Label>
                    <Input
                      id="elevation"
                      value={formData.elevation}
                      onChange={(e) => handleInputChange("elevation", e.target.value)}
                      placeholder="e.g., 850"
                    />
                  </div>

                  <div>
                    <Label htmlFor="annualRainfall">Annual Rainfall (mm)</Label>
                    <Input
                      id="annualRainfall"
                      value={formData.annualRainfall}
                      onChange={(e) => handleInputChange("annualRainfall", e.target.value)}
                      placeholder="e.g., 1200"
                    />
                  </div>

                  <div>
                    <Label htmlFor="soilType">Soil Type</Label>
                    <Input
                      id="soilType"
                      value={formData.soilType}
                      onChange={(e) => handleInputChange("soilType", e.target.value)}
                      placeholder="e.g., Sandy loam, Clay, Peat"
                    />
                  </div>

                  <div>
                    <Label htmlFor="averageAge">Average Tree Age (years)</Label>
                    <Input
                      id="averageAge"
                      value={formData.averageAge}
                      onChange={(e) => handleInputChange("averageAge", e.target.value)}
                      placeholder="e.g., 45"
                    />
                  </div>
                </div>
              </div>

              {/* Description and Management */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="description">Forest Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Detailed description of the forest..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="managementPlan">Management Plan</Label>
                  <Textarea
                    id="managementPlan"
                    value={formData.managementPlan}
                    onChange={(e) => handleInputChange("managementPlan", e.target.value)}
                    placeholder="Management strategies and conservation plans..."
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                  Register Forest
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Existing Forests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {forests.map((forest) => (
          <Card key={forest.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <TreePine className="h-8 w-8 text-green-600" />
                  <div>
                    <CardTitle className="text-lg">{forest.name}</CardTitle>
                    <p className="text-sm text-gray-600">{forest.type} Forest</p>
                  </div>
                </div>
                <Badge className={getRiskColor(forest.riskLevel)}>
                  {forest.riskLevel} Risk
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span>{forest.location}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Ruler className="h-4 w-4 text-gray-500" />
                <span>{forest.area}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>Established {forest.established}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Leaf className="h-4 w-4 text-gray-500" />
                <span className="italic">{forest.dominantSpecies}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-gray-500" />
                <span>{forest.staff} staff • {forest.zones} zones</span>
              </div>

              <div className="pt-2 text-xs text-gray-500">
                Last survey: {forest.lastSurvey}
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Info className="h-3 w-3 mr-1" />
                  Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ForestRegistry
