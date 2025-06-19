import { create } from 'zustand'

export interface TranslationValue {
  value: string
  updatedAt: string
  updatedBy: string
}

export interface TranslationKey {
  id: string
  key: string
  category: string
  description?: string
  translations: {
    [locale: string]: TranslationValue
  }
}

interface TranslationState {
  locale: string
  projectId: string
  keys: TranslationKey[]
  setLocale: (locale: string) => void
  setProjectId: (id: string) => void
  setKeys: (keys: TranslationKey[]) => void
  updateTranslation: (keyId: string, locale: string, newValue: string) => void
}

export const useTranslationStore = create<TranslationState>((set) => ({
  locale: 'en',
  projectId: '',
  keys: [],
  setLocale: (locale) => set(() => ({ locale })),
  setProjectId: (projectId) => set(() => ({ projectId })),
  setKeys: (keys) => set(() => ({ keys })),
  updateTranslation: (keyId, locale, newValue) =>
    set((state) => ({
      keys: state.keys.map((item) =>
        item.id === keyId
          ? {
              ...item,
              translations: {
                ...item.translations,
                [locale]: {
                  ...item.translations[locale],
                  value: newValue,
                  updatedAt: new Date().toISOString(),
                  updatedBy: 'local-user', // You may replace with actual user
                },
              },
            }
          : item
      ),
    })),
}))
