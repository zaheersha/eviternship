import { useState } from "react"
import { Bell, X } from "lucide-react"

interface Props {
  menuOpen: boolean
}

export default function BatchNotification({ menuOpen }: Props) {

  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      className={`fixed bottom-24 transition-all duration-300 z-50
      ${menuOpen ? "right-[300px]" : "right-8"}`}
    >

      {/* CLOSED STATE */}
      {!open && (

        <button
          onClick={() => setOpen(true)}
          className="relative p-4 bg-primary text-white rounded-full shadow-2xl hover:scale-110 transition"
        >

          <Bell className="w-6 h-6"/>

          {/* Red Alert Badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
            !
          </span>

        </button>

      )}

      {/* OPEN STATE */}
      {open && (

        <div className="w-[250px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

          {/* Header */}
          <div className="bg-primary text-white p-3 flex justify-between items-center">

            <span className="font-semibold text-sm">
              New Batch Alert
            </span>

            <button
              onClick={() => setVisible(false)}
              className="hover:opacity-80"
            >
              <X size={18}/>
            </button>

          </div>

          {/* Message */}
          <div className="p-4 space-y-3 text-sm text-gray-700">

            <div>

              <strong>  Full Stack Web Development Job Bootcamp : </strong>
              March 20th 2026
            </div>

            <div>
              <strong>Python-101 : </strong> April 2026
            </div>

            <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
              Enroll Now
            </button>

          </div>

        </div>

      )}

    </div>
  )
}