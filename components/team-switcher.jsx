"use client"

import * as React from "react"

export function TeamSwitcher({ teams }) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 p-2">
      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <activeTeam.logo className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{activeTeam.name}</span>
        <span className="truncate text-xs">{activeTeam.plan}</span>
      </div>
    </div>
  );
}