
import { useState } from "react"
import { 
  TreePine, 
  Users, 
  Map, 
  Shield, 
  Flame, 
  History, 
  LayoutDashboard,
  Plus
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Forest Map", url: "/map", icon: Map },
  { title: "Staff Management", url: "/staff", icon: Users },
  { title: "Forest Registry", url: "/forests", icon: TreePine },
]

const monitoringItems = [
  { title: "Fire Detection", url: "/detection", icon: Shield },
  { title: "Incident History", url: "/incidents", icon: History },
  { title: "Fire Reports", url: "/fires", icon: Flame },
]

export function AppSidebar() {
  const { collapsed } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path || (path === "/" && currentPath === "/")
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-green-100 text-green-800 font-medium" : "hover:bg-green-50 text-gray-700"

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible>
      <SidebarContent className="bg-white border-r border-green-100">
        <div className="p-4 border-b border-green-100">
          <div className="flex items-center gap-3">
            <TreePine className="h-8 w-8 text-green-600" />
            {!collapsed && (
              <div>
                <h1 className="font-bold text-green-800">ForestGuard</h1>
                <p className="text-xs text-green-600">Management System</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-green-700 font-semibold">
            {!collapsed && "Main Menu"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-orange-700 font-semibold">
            {!collapsed && "Monitoring"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {monitoringItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
