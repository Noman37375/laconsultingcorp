import { createContext, useContext, useState } from 'react';

interface UIContextType {
  isInfoBarVisible: boolean;
  setIsInfoBarVisible: (visible: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isInfoBarVisible, setIsInfoBarVisible] = useState(true);

  return (
    <UIContext.Provider value={{ isInfoBarVisible, setIsInfoBarVisible }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
} 