"use client"

import * as React from "react"
import {
  BookText,
  House,
  Smile,
  Video,
  Music,
  Camera,
  Trophy,
  Cpu,
  Plane,
  NotebookPen,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
      isActive : true,
    },
    {
      title: "Book Categories",
      url: "/allBook",
      icon: BookText,
    },
    {
      title: "Old-School Cartoons",
      url: "/oldSchoolCarton",
      icon: Smile,
    },
    {
      title: "Movie & TV Shows",
      url: "#",
      icon: Video,
    },
    {
      title: "Music",
      url: "#",
      icon: Music,
    },
    {
      title: "Photography",
      url: "#",
      icon: Camera,
    },
    {
      title: "Sports & Fitness",
      url: "#",
      icon: Trophy,
    },
    {
      title: "Technology & Gadgets",
      url: "#",
      icon: Cpu,
    },
    {
      title: "Travel & Exploration",
      url: "#",
      icon: Plane,
    },
    {
      title: "Writing & Journaling",
      url: "#",
      icon: NotebookPen,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  const [activeItem, setActiveItem] = React.useState("/") // Default to "Home"

  const handleItemClick = (url) => {
    // Only update the active item if the URL is not "#"
    if (url !== "#") {
      setActiveItem(url)
    }
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center gap-2  text-center ">
          {/* User Avatar */}
          <img
            src="/profile.jpg"
            alt="Som phors"
            className="h-20 w-20 rounded-full"
          />
          {/* User Name and Email */}
          <div>
            <p className="font-medium">Som phors</p>
            <p className="text-md text-[var(--steel)]">leezoa2102@gmail.com</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="ml-5">
          <NavMain
            items={data.navMain.map((item) => ({
              ...item,
              // Only set isActive if the URL is not "#"
              isActive: item.url !== "#" && activeItem === item.url,
              icon: (props) => React.createElement(item.icon, { ...props, className: "text-red-400" }),
            }))}
            onItemClick={handleItemClick} // Pass the click handler to NavMain
          />
        </div>
      </SidebarContent>
      <SidebarFooter>
        {/* Footer content (if any) */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}