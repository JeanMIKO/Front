'use client'

import { useState } from "react"
import {
  Calendar,
  BarChart3,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MonthlyUsersChart } from "@/components/monthlyuserschart"
import { CircularProgress } from "@/components/circularprogress"
import { Layout } from "./Layout"

export function HealthEaseDashboard() {
  const [selectedTab, setSelectedTab] = useState("hebdomadaire")

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">Tableau de bord</h1>
        <span className="text-rose-500">Tableau de bord</span>
      </div>

      {/* First row of cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Rendez-vous</p>
              <p className="text-2xl font-bold mt-1">499</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-md">
              <Calendar className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Revenu</p>
              <p className="text-2xl font-bold mt-1">582 441 618,80 $</p>
            </div>
            <div className="bg-green-500 p-3 rounded-md">
              <FileText className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Gains d&apos;aujourd&apos;hui</p>
              <p className="text-2xl font-bold mt-1">0,00 $</p>
            </div>
            <div className="bg-yellow-500 p-3 rounded-md">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Second row of cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Rendez-vous d&apos;aujourd&apos;hui</p>
              <p className="text-2xl font-bold mt-1">0</p>
            </div>
            <div className="bg-yellow-500 p-3 rounded-md">
              <Calendar className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Rendez-vous de demain</p>
              <p className="text-2xl font-bold mt-1">0</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-md">
              <Calendar className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Prochains rendez-vous</p>
              <p className="text-2xl font-bold mt-1">8</p>
            </div>
            <div className="bg-green-500 p-3 rounded-md">
              <Calendar className="h-6 w-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-3 gap-6">
        <Card className="p-4 col-span-2">
          <h3 className="text-lg font-medium mb-4">Utilisateurs enregistrés mensuels</h3>
          <div className="h-64">
            <MonthlyUsersChart type="bar" period="weekly" />
          </div>
        </Card>
      </div>
    </Layout>
  )
}
