"use client"

import { useEffect, useState } from "react"

const data = [
  { name: "Jan", adventure: 4000, cultural: 2400, leisure: 2400 },
  { name: "Feb", adventure: 3000, cultural: 1398, leisure: 2210 },
  { name: "Mar", adventure: 2000, cultural: 9800, leisure: 2290 },
  { name: "Apr", adventure: 2780, cultural: 3908, leisure: 2000 },
  { name: "May", adventure: 1890, cultural: 4800, leisure: 2181 },
  { name: "Jun", adventure: 2390, cultural: 3800, leisure: 2500 },
]

export function Overview() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-[350px]">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-32 mb-4"></div>
          <div className="space-y-2">
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-[350px] w-full">
      <div className="grid grid-cols-6 gap-4 h-full">
        {data.map((item, index) => (
          <div key={item.name} className="flex flex-col justify-end items-center space-y-2">
            <div className="flex flex-col items-center space-y-1 w-full">
              <div
                className="w-full bg-primary rounded-t"
                style={{ height: `${(item.adventure / 10000) * 200}px` }}
              ></div>
              <div
                className="w-full bg-green-500 rounded-t"
                style={{ height: `${(item.cultural / 10000) * 200}px` }}
              ></div>
              <div
                className="w-full bg-blue-500 rounded-t"
                style={{ height: `${(item.leisure / 10000) * 200}px` }}
              ></div>
            </div>
            <span className="text-xs text-muted-foreground">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
