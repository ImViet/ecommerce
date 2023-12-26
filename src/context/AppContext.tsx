import { ReactNode, createContext, useContext, useState } from "react";
import SideBar from "../containers/Layout/SideBar";

interface AppProviderProps {
  children: ReactNode;
}

interface AppContext {
  closeSideBar: () => void;
  openSideBar: () => void;
}

const AppContext = createContext({} as AppContext);

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }: AppProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openSideBar = () => setIsOpen(true);
  const closeSideBar = () => setIsOpen(false);
  return (
    <AppContext.Provider value={{ openSideBar, closeSideBar }}>
      {children}
      <SideBar isOpen={isOpen} />
    </AppContext.Provider>
  );
}
