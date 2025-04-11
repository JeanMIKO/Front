'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Eye, Pencil, Trash2, Download, Filter } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Patients() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilter, setShowFilter] = useState(false)
  const [filterData, setFilterData] = useState({
    nom: '',
    email: '',
    telephone: ''
  })

  const patients = [
    { id: 1, nom: 'Monsieur Patient', email: 'patient@ambitousit.com', telephone: '(406) 555-0120', statut: 'Actif' },
    { id: 2, nom: 'Monsieur Patient X', email: 'patient@ambitousit.com', telephone: '(406) 555-0121', statut: 'Actif' },
    { id: 3, nom: 'Monsieur Patient Y', email: 'patient@ambitousit.com', telephone: '(406) 555-0122', statut: 'Actif' },
    { id: 4, nom: 'Monsieur Patient Z', email: 'patient@ambitousit.com', telephone: '(406) 555-0123', statut: 'Actif' },
    { id: 5, nom: 'Monsieur Patient', email: 'patient@ambitousit.com', telephone: '(406) 555-0124', statut: 'Actif' },
    { id: 6, nom: 'Monsieur Patient', email: 'patient@ambitousit.com', telephone: '(406) 555-0125', statut: 'Actif' },
    { id: 7, nom: 'Monsieur Patient', email: 'patient@ambitousit.com', telephone: '(406) 555-0126', statut: 'Actif' },
    { id: 8, nom: 'Monsieur Patient', email: 'patient@ambitousit.com', telephone: '(406) 555-0127', statut: 'Actif' },
    { id: 9, nom: 'Monsieur Patient', email: 'patient@ambitousit.com', telephone: '(406) 555-0128', statut: 'Actif' },
    { id: 10, nom: 'Monsieur Patient', email: 'patient@ambitousit.com', telephone: '(406) 555-0129', statut: 'Actif' },
  ]

  const totalPages = Math.ceil(patients.length / 10)

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Filter data:', filterData)
    setShowFilter(false)
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="solid"
          color="success"
          className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
          onClick={() => router.push('/patients/ajouter')}
        >
          + Ajouter Un Patient
        </Button>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Tableau De Bord</span>
          <span className="text-black">Liste des patients</span>
        </div>
      </div>

      {/* Table Header */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium text-black">Liste des patients</h2>
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
                <label className="block text-sm mb-1 text-black font-medium">Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black bg-white text-black"
                  value={filterData.nom}
                  onChange={(e) => setFilterData({ ...filterData, nom: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black font-medium">E-mail</label>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black bg-white text-black"
                  value={filterData.email}
                  onChange={(e) => setFilterData({ ...filterData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-black font-medium">Téléphone</label>
                <input
                  type="text"
                  placeholder="Votre numéro"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black bg-white text-black"
                  value={filterData.telephone}
                  onChange={(e) => setFilterData({ ...filterData, telephone: e.target.value })}
                />
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
                <th className="px-6 py-3 text-sm font-medium text-black">IDENTIFIANT</th>
                <th className="px-6 py-3 text-sm font-medium text-black">Nom</th>
                <th className="px-6 py-3 text-sm font-medium text-black">E-mail</th>
                <th className="px-6 py-3 text-sm font-medium text-black">Téléphone</th>
                <th className="px-6 py-3 text-sm font-medium text-black">Statut</th>
                <th className="px-6 py-3 text-sm font-medium text-black">Actes</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={patient.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 text-sm text-black">{patient.id}</td>
                  <td className="px-6 py-4 text-sm text-black">{patient.nom}</td>
                  <td className="px-6 py-4 text-sm text-black">{patient.email}</td>
                  <td className="px-6 py-4 text-sm text-black">{patient.telephone}</td>
                  <td className="px-6 py-4">
                    <span className="text-rose-500 text-sm">{patient.statut}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye className="h-4 w-4 text-black" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Pencil className="h-4 w-4 text-black" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
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
