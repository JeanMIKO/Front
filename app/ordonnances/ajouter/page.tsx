'use client'

import { Layout } from "@/components/Layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { User, FileText, Calendar, MessageSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AddOrdonnancePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    patient: '',
    date: '',
    medicaments: '',
    instructions: '',
    duree: '',
    statut: 'Active'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', formData)
    // Ici, vous pouvez ajouter la logique pour envoyer les données au backend
  }

  return (
    <Layout>
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="solid"
            color="success"
            className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
          >
            Ajouter Une Ordonnance
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {/* Patient */}
            <div>
              <label className="block mb-1">
                <span className="text-rose-500 mr-1">*</span>
                Patient
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black bg-white text-black"
                  value={formData.patient}
                  onChange={(e) => setFormData({ ...formData, patient: e.target.value })}
                >
                  <option value="">Sélectionner un patient</option>
                  <option value="1">Monsieur Patient</option>
                  <option value="2">Monsieur Patient X</option>
                  <option value="3">Monsieur Patient Y</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block mb-1">
                <span className="text-rose-500 mr-1">*</span>
                Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="date"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black bg-white text-black"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
            </div>

            {/* Médicaments */}
            <div className="col-span-2">
              <label className="block mb-1">
                <span className="text-rose-500 mr-1">*</span>
                Médicaments
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                <textarea
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black bg-white text-black"
                  rows={3}
                  placeholder="Liste des médicaments"
                  value={formData.medicaments}
                  onChange={(e) => setFormData({ ...formData, medicaments: e.target.value })}
                />
              </div>
            </div>

            {/* Instructions */}
            <div className="col-span-2">
              <label className="block mb-1">
                <span className="text-rose-500 mr-1">*</span>
                Instructions
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                <textarea
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black bg-white text-black"
                  rows={3}
                  placeholder="Instructions pour le patient"
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                />
              </div>
            </div>

            {/* Durée */}
            <div>
              <label className="block mb-1">
                <span className="text-rose-500 mr-1">*</span>
                Durée
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black bg-white text-black"
                  placeholder="Ex: 7 jours"
                  value={formData.duree}
                  onChange={(e) => setFormData({ ...formData, duree: e.target.value })}
                />
              </div>
            </div>

            {/* Statut */}
            <div>
              <label className="block mb-1">
                <span className="text-rose-500 mr-1">*</span>
                Statut
              </label>
              <div className="relative">
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black bg-white text-black"
                  value={formData.statut}
                  onChange={(e) => setFormData({ ...formData, statut: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Expirée">Expirée</option>
                  <option value="Annulée">Annulée</option>
                </select>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Button
              type="submit"
              variant="solid"
              className="bg-black text-white hover:bg-gray-800"
            >
              Soumettre
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  )
} 