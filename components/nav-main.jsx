"use client"

import Link from "next/link"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({ items, onItemClick }) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <Link href={item.url}>
              <SidebarMenuButton
                tooltip={item.title}
                className={`flex items-center p-2 rounded-lg transition-colors ${
                  item.isActive
                    ? "bg-gray-200 font-semibold text-black" // Active state styling
                    : "text-gray-700 hover:bg-gray-200" // Default state styling
                }`}
                onClick={() => onItemClick(item.url)} // Call the click handler
              >
                {/* Display the icon */}
                {item.icon && <item.icon className="mr-3 h-5 w-5 text-purple-500" />}
                {/* Display the text label */}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}