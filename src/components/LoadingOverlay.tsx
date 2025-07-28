import { Dialog } from '@headlessui/react'
import LoadingSpinner from './LoadingSpinner'

export default function LoadingOverlay({ show = false, message = 'Loading...' }) {
  return (
    <Dialog open={show} onClose={() => {}} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center gap-3">
          <LoadingSpinner className="h-6 w-6 text-blue-600" />
          <p className="text-gray-700">{message}</p>
        </div>
      </div>
    </Dialog>
  )
}
