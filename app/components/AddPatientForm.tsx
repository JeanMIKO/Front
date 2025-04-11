'use client'

import { useState } from 'react'
import { User, Mail, Lock, Phone, Users, MapPin, Calendar, Activity } from 'lucide-react'
import { Button } from './ui/button'

export function AddPatientForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: '',
    telephone: '',
    genre: '',
    groupeSanguin: '',
    photo: null as File | null,
    adresse: '',
    dateNaissance: '',
    statut: 'Actif'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', formData)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photo: e.target.files[0] })
    }
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="solid"
          color="success"
          className="flex items-center gap-2"
        >
          Ajouter Un Patient
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {/* Nom */}
          <div>
            <label className="block mb-1">
              <span className="text-rose-500 mr-1">*</span>
              Nom
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Nom"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">
              <span className="text-rose-500 mr-1">*</span>
              E-mail
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block mb-1">
              <span className="text-rose-500 mr-1">*</span>
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="••••••••••"
                value={formData.motDePasse}
                onChange={(e) => setFormData({ ...formData, motDePasse: e.target.value })}
              />
            </div>
          </div>

          {/* Téléphone */}
          <div>
            <label className="block mb-1">Téléphone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Nombre"
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              />
            </div>
          </div>

          {/* Genre */}
          <div>
            <label className="block mb-1">Genre</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 appearance-none bg-white"
                value={formData.genre}
                onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
              >
                <option value="">Sélectionner</option>
                <option value="M">Masculin</option>
                <option value="F">Féminin</option>
              </select>
            </div>
          </div>

          {/* Groupe sanguin */}
          <div>
            <label className="block mb-1">Groupe sanguin</label>
            <div className="relative">
              <Activity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 appearance-none bg-white"
                value={formData.groupeSanguin}
                onChange={(e) => setFormData({ ...formData, groupeSanguin: e.target.value })}
              >
                <option value="">Sélectionner</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>

          {/* Photo */}
          <div>
            <label className="block mb-1">Photo</label>
            <div className="relative border border-gray-300 rounded p-4 text-center">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="photo-upload"
                onChange={handleFileChange}
              />
              <label
                htmlFor="photo-upload"
                className="cursor-pointer text-sm text-gray-500"
              >
                Faites glisser et déposez un fichier ici ou cliquez
              </label>
            </div>
          </div>

          {/* Date de naissance */}
          <div>
            <label className="block mb-1">
              <span className="text-rose-500 mr-1">*</span>
              Date de naissance
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="mm/dd/yyyy"
                value={formData.dateNaissance}
                onChange={(e) => setFormData({ ...formData, dateNaissance: e.target.value })}
              />
            </div>
          </div>

          {/* Adresse */}
          <div className="col-span-2">
            <label className="block mb-1">Adresse</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <textarea
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                rows={3}
                placeholder="Adresse"
                value={formData.adresse}
                onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <Button
            type="submit"
            color="success"
          >
            Soumettre
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => window.history.back()}
          >
            Annuler
          </Button>
        </div>
      </form>
    </div>
  )
} 