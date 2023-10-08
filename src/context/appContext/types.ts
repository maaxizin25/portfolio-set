interface iLanguagePortFolioItens {
  navbar: Array<string>;
}

// Typagem para o children
export interface iAppContextProps {
  children: React.ReactNode;
}
export type iLanguage = "portuguese" | "english";
// Typagem para todas as funções que vamos exportar com props
export interface iAppContext {
  changeLanguage: (language: iLanguage) => void;
  languageTexts: iLanguagePortFolioItens;
}
