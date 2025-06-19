import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useTranslationStore, TranslationKey } from '../store/translationStore'

export const useTranslationKeys = () => {
  const { projectId, locale, setKeys } = useTranslationStore()

  return useQuery({
    queryKey: ['translations', projectId, locale],
    queryFn: async (): Promise<TranslationKey[]> => {
      if (!projectId || !locale) return []
      const response = await axios.get(`/localizations/${projectId}/${locale}`)
      const { localizations } = response.data

      // Convert to TranslationKey[] shape with only values for current locale
      return Object.entries(localizations).map(([key, value], index) => ({
        id: `temp-${index}`, // Replace with real ID if needed
        key,
        category: '',
        translations: {
          [locale]: {
            value,
            updatedAt: new Date().toISOString(),
            updatedBy: 'server'
          }
        }
      }))
    },
    enabled: !!projectId && !!locale,
    onSuccess: (data) => {
      setKeys(data)
    }
  })
}
