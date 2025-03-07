import type React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface ShineButtonProps extends ButtonProps {
  children: React.ReactNode
}

export const ShineButton: React.FC<ShineButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-300 ease-out hover:scale-105 active:scale-100",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shine_1.5s_ease_forwards] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 hover:before:animate-[shine_1.5s_ease_infinite]",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

