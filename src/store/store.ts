import { create } from 'zustand'

interface State {
  isDarkMode: boolean
  setIsDarkMode: (isDarkMode: boolean) => void
}

export const useStore = create<State>()((set) => ({
  isDarkMode: false,
  setIsDarkMode: (isDarkMode) => set((state) => ({ isDarkMode: isDarkMode })),
}))
