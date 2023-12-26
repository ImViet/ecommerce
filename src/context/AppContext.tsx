import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import SideBar from "../containers/Layout/SideBar";
import { ICategory } from "../interfaces/ICategory";
import { getAllCategory } from "../api/categories";
import { IResponseData } from "../interfaces/IResponseData";

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
  const [categories, setCategories] = useState<ICategory[]>([]);
  const openSideBar = () => setIsOpen(true);
  const closeSideBar = () => setIsOpen(false);
  useEffect(() => {
    getAllCategory()
      .then((res: IResponseData<ICategory[]>) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <AppContext.Provider value={{ openSideBar, closeSideBar }}>
      {children}
      <SideBar isOpen={isOpen} categories={categories} />
    </AppContext.Provider>
  );
}
