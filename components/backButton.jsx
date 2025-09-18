"use client" //for client side interactivity = onclick 

export default function BackButton() {
  return (
    <button 
      onClick={() => window.history.back()}
      className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-base-300 bg-base-content hover:scale-110 transition-all duration-150"
    >
      ← Back to Posts
    </button>
  )
}