'use client'

import { Layout } from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Plus, Filter, Eye, Pencil, Trash2, CheckCircle, XCircle, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RendezVousPage() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilter, setShowFilter] = useState(false)
  const [filterData, setFilterData] = useState({
    patient: '',
    date: '',
    statut: ''
  })

  return (
    <Layout>
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="solid"
            color="success"
            className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
            onClick={() => router.push('/rendez-vous/ajouter')}
          >
            <Plus className="h-4 w-4" />
            Ajouter Un Rendez-vous
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setShowFilter(!showFilter)}
          >
            <Filter className="h-4 w-4" />
            Filtres
          </Button>
        </div>

        {/* Filter Form */}
        {showFilter && (
          <Card className="p-4 mb-6">
            <form className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Patient</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                  value={filterData.patient}
                  onChange={(e) => setFilterData({ ...filterData, patient: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded"
                  value={filterData.date}
                  onChange={(e) => setFilterData({ ...filterData, date: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Statut</label>
                <select
                  className="w-full px-3 py-2 border rounded"
                  value={filterData.statut}
                  onChange={(e) => setFilterData({ ...filterData, statut: e.target.value })}
                >
                  <option value="">Tous</option>
                  <option value="confirme">Confirmé</option>
                  <option value="en_attente">En attente</option>
                  <option value="annule">Annulé</option>
                </select>
              </div>
            </form>
          </Card>
        )}

        {/* Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heure</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#12345</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Monsieur Patient</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-03-20</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">14:30</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Confirmé
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-700">
            Affichage de 1 à 10 sur 100 résultats
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Précédent
            </Button>
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Suivant
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
} 