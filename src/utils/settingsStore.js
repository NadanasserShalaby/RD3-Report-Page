import { create } from "zustand";



export const useSettingsStore = create()((set) => ({
  lang: localStorage.getItem("i18nextLng") || "en",

  setLanguage: (lang) => {
    localStorage.setItem("i18nextLng", lang);
    set({ lang });
  },
}));
