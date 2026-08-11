'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import idDict from '@/locales/id.json'
import enDict from '@/locales/en.json'

type Lang = 'id' | 'en'
type Translations = typeof idDict

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: idDict,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('id')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('arialabs_lang') as Lang | null
      if (stored === 'en' || stored === 'id') setLangState(stored)
    } catch {}
  }, [])

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    try { localStorage.setItem('arialabs_lang', newLang) } catch {}
  }, [])

  const t = lang === 'en' ? enDict : idDict

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
