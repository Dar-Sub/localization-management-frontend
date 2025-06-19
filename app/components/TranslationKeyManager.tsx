'use client'

import React, { useState } from 'react'
import { useTranslationStore } from '../store/translationStore'
import { useTranslationKeys } from '../hooks/useTranslationKeys'

const TranslationKeyManager = () => {
  const { keys, locale, updateTranslation } = useTranslationStore()
  const { isLoading, error } = useTranslationKeys()
  const [search, setSearch] = useState('')

  const filteredKeys = keys.filter((key) =>
    key.key.toLowerCase().includes(search.toLowerCase())
  )

  if (isLoading) return <p>Loading translations...</p>
  if (error) return <p>Error loading translations.</p>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Translation Key Manager</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search translation keys..."
        className="border p-2 rounded mb-4 w-full"
      />

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Key</th>
            <th className="p-2 border">Value ({locale})</th>
          </tr>
        </thead>
        <tbody>
          {filteredKeys.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="p-2 border">{item.key}</td>
              <td className="p-2 border">
                <input
                  type="text"
                  value={item.translations[locale]?.value || ''}
                  onChange={(e) =>
                    updateTranslation(item.id, locale, e.target.value)
                  }
                  className="w-full border px-2 py-1 rounded"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TranslationKeyManager
