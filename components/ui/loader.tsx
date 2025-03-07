import type React from "react"

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <span className="loader"></span>
    </div>
  )
}

