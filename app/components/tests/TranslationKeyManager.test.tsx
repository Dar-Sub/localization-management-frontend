import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TranslationKeyManager from '../TranslationKeyManager'

// Use "mock" prefix to satisfy Jest rules
const mockUpdateTranslation = jest.fn()

// 🧠 Mock Zustand Store
jest.mock('../../store/translationStore', () => ({
  useTranslationStore: () => ({
    locale: 'en',
    projectId: 'test_project',
    keys: [
      {
        id: '1',
        key: 'button.save',
        category: 'buttons',
        translations: {
          en: {
            value: 'Save',
            updatedAt: '',
            updatedBy: 'system',
          },
        },
      },
      {
        id: '2',
        key: 'menu.exit',
        category: 'menus',
        translations: {
          en: {
            value: 'Exit',
            updatedAt: '',
            updatedBy: 'system',
          },
        },
      },
    ],
    updateTranslation: mockUpdateTranslation,
    setLocale: jest.fn(),
    setProjectId: jest.fn(),
    setKeys: jest.fn(),
  }),
}))

// Mock React Query hook
jest.mock('../../hooks/useTranslationKeys', () => ({
  useTranslationKeys: () => ({
    isLoading: false,
    error: null,
  }),
}))

describe('TranslationKeyManager', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders translation keys from Zustand store', () => {
    render(<TranslationKeyManager />)

    expect(screen.getByText('button.save')).toBeInTheDocument()
    expect(screen.getByText('menu.exit')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Save')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Exit')).toBeInTheDocument()
  })

  it('updates translation value on input change', () => {
    render(<TranslationKeyManager />)

    const input = screen.getByDisplayValue('Save')
    fireEvent.change(input, { target: { value: 'Save Now' } })

    expect(mockUpdateTranslation).toHaveBeenCalledWith('1', 'en', 'Save Now')
  })

  it('filters translation keys based on search input', () => {
    render(<TranslationKeyManager />)

    const searchInput = screen.getByPlaceholderText('Search translation keys...')
    fireEvent.change(searchInput, { target: { value: 'exit' } })

    expect(screen.queryByText('button.save')).toBeNull()
    expect(screen.getByText('menu.exit')).toBeInTheDocument()
  })
})
