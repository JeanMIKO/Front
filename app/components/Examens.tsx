'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Eye, Pencil, Trash2, Download, Filter, Plus, FileText, Clock, CheckCircle, XCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Examens() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilter, setShowFilter] = useState(false)
  const [filterData, setFilterData] = useState({
    patient: '',
    typeExamen: '',
    statut: ''
  })

  const examens = [
    { 
      id: 1, 
      patient: 'Monsieur Patient', 
      typeExamen: 'Analyse sanguine', 
      date: '2024-03-20',
      statut: 'En attente',
      commentaire: 'À jeun depuis 12h'
    },
    { 
      id: 2, 
      patient: 'Monsieur Patient X', 
      typeExamen: 'IRM', 
      date: '2024-03-21',
      statut: 'Confirmé',
      commentaire: 'Avec produit de contraste'
    },
    { 
      id: 3, 
      patient: 'Monsieur Patient Y', 
      typeExamen: 'Radiographie', 
      date: '2024-03-22',
      statut: 'Annulé',
      commentaire: 'Patient indisponible'
    },
    // ... autres examens
  ]

  const totalPages = Math.ceil(examens.length / 10)

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Filter data:', filterData)
    setShowFilter(false)
  }

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'Confirmé':
        return 'text-green-500'
      case 'Annulé':
        return 'text-red-500'
      case 'En attente':
        return 'text-yellow-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="solid"
          color="success"
          className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
          onClick={() => router.push('/examens/ajouter')}
        >
          <Plus className="h-4 w-4" />
          Ajouter Un Examen
        </Button>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Tableau De Bord</span>
          <span className="text-black">Liste des examens</span>
        </div>
      </div>

      {/* Table Header */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium text-black">Liste des examens</h2>
          <div className="flex gap-4">
            <Button variant="outline" className="flex items-center gap-2 border-gray-300 text-black">
              <Download className="h-4 w-4" />
              <span>Exporter</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-gray-300 text-black"
              onClick={() => setShowFilter(!showFilter)}
            >
              <Filter className="h-4 w-4" />
              <span>Filtre</span>
            </Button>
          </div>
        </div>

        {/* Filter Form */}
        {showFilter && (
          <div className="p-4 border-b bg-gray-50">
            <form onSubmit={handleFilterSubmit} className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm mb-1 text-black font-medium">Patient</label>
                <input
                  type="text"
                  placeholder="Nom du patient"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black bg-white text-black"
                  value={filterData.patient}
                  onChange={(e) => setFilterData({ ...filterData, patient: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black font-medium">Type d'examen</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black bg-white text-black"
                  value={filterData.typeExamen}
                  onChange={(e) => setFilterData({ ...filterData, typeExamen: e.target.value })}
                >
                  <option value="">Sélectionner</option>
                  <option value="Analyse sanguine">Analyse sanguine</option>
                  <option value="IRM">IRM</option>
                  <option value="Radiographie">Radiographie</option>
                  <option value="Scanner">Scanner</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1 text-black font-medium">Statut</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black bg-white text-black"
                  value={filterData.statut}
                  onChange={(e) => setFilterData({ ...filterData, statut: e.target.value })}
                >
                  <option value="">Sélectionner</option>
                  <option value="En attente">En attente</option>
                  <option value="Confirmé">Confirmé</option>
                  <option value="Annulé">Annulé</option>
                </select>
              </div>
              <div>
                <Button
                  type="submit"
                  variant="solid"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Soumettre
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b bg-gray-50">
                <th className="px-6 py-3 text-sm font-medium text-black">ID</th>
                <th className="px-6 py-3 text-sm font-medium text-black">Patient</th>
                <th className="px-6 py-3 text-sm font-medium text-black">Type d'examen</th>
                <th className="px-6 py-3 text-sm font-medium text-black">Date</th>
                <th className="px-6 py-3 text-sm font-medium text-black">Statut</th>
                <th className="px-6 py-3 text-sm font-medium text-black">Commentaire</th>
                <th className="px-6 py-3 text-sm font-medium text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {examens.map((examen, index) => (
                <tr key={examen.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 text-sm text-black">{examen.id}</td>
                  <td className="px-6 py-4 text-sm text-black">{examen.patient}</td>
                  <td className="px-6 py-4 text-sm text-black">{examen.typeExamen}</td>
                  <td className="px-6 py-4 text-sm text-black">{examen.date}</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm ${getStatutColor(examen.statut)}`}>
                      {examen.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-black">{examen.commentaire}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded" title="Voir les détails">
                        <Eye className="h-4 w-4 text-black" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Modifier">
                        <Pencil className="h-4 w-4 text-black" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded" title="Supprimer">
                        <Trash2 className="h-4 w-4 text-black" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center px-6 py-4 border-t">
          <div className="text-sm text-black">
            Affichage de 1 à 10 sur 14 entrées
          </div>
          <div className="flex gap-1">
            <button
              className="p-2 text-black hover:bg-gray-100 rounded"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            >
              «
            </button>
            <button
              className={`p-2 rounded min-w-[32px] text-black hover:bg-gray-100 ${currentPage === 1 ? 'font-medium' : ''}`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button
              className={`p-2 rounded min-w-[32px] ${currentPage === 2 ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <button
              className={`p-2 rounded min-w-[32px] text-black hover:bg-gray-100 ${currentPage === 3 ? 'font-medium' : ''}`}
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
            <button
              className="p-2 text-black hover:bg-gray-100 rounded"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 