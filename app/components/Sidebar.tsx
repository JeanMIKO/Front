'use client'

import Image from "next/image"
import Link from "next/link"
import {
  BarChart3,
  Users,
  FileText,
  FileSearch,
  CalendarClock,
  LogOut,
} from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-gray-200 min-h-[calc(100vh-64px)]">
      {/* Logo and Brand */}
      <div className="p-4 border-b border-gray-200 flex items-center gap-2">
        <Image 
          src="/images/logo.png" 
          alt="HealthEase" 
          width={20} 
          height={20} 
        />
        <div className="flex items-center">
          <span className="text-xl font-bold text-black">
            Renal<span className="text-rose-500">Health</span>
          </span>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-gray-200 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-100">
          <Image
            src="/images/images.jpg?height=40&width=40"
            alt="Doctor"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <span className="text-sm font-medium text-black">Monsieur Le Docteur</span>
      </div>
      
      {/* Navigation Menu */}
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link 
              href="/healtheasedashboard" 
              className="flex items-center p-2 rounded-lg hover:bg-gray-100"
            >
              <BarChart3 className="mr-2 h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-black">Tableau De Bord</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/patients" 
              className="flex items-center p-2 rounded-lg hover:bg-gray-100"
            >
              <Users className="mr-2 h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-black">Patients</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/examens" 
              className="flex items-center p-2 rounded-lg hover:bg-gray-100"
            >
              <FileSearch className="mr-2 h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-black">Examens</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/ordonnances" 
              className="flex items-center p-2 rounded-lg hover:bg-gray-100"
            >
              <FileText className="mr-2 h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-black">Ordonnances</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/rendez-vous" 
              className="flex items-center p-2 rounded-lg hover:bg-gray-100"
            >
              <CalendarClock className="mr-2 h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-black">Rendez-Vous</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/logout" 
              className="flex items-center p-2 rounded-lg text-red-500 hover:bg-red-100"
            >
              <LogOut className="mr-2 h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-black">Déconnexion</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
} 