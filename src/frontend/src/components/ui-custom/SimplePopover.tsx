import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import React from "react"

// Menu option with optional icon
export type Option = {
  label: string
  onClick: () => void
  icon?: React.ReactNode
}

type SimplePopoverProps = {
  trigger: React.ReactNode
  options: Option[]
}

const SimplePopover = ({ trigger, options }: SimplePopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {trigger}
      </PopoverTrigger>

      <PopoverContent
        align="end"
        side="bottom"
        className="z-[9999] p-2 shadow-lg bg-white dark:bg-gray-800 rounded-md w-full sm:w-48"
      >
        <div className="flex flex-col">
          {options.map(({ label, onClick, icon }, idx) => (
            <button
              key={idx}
              onClick={onClick}
              className="flex items-center gap-2 w-full text-left p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {icon && <span className="flex-shrink-0">{icon}</span>}
              <span className="flex-1 truncate">{label}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default SimplePopover
