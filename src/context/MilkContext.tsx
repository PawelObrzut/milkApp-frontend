import React, {
  useContext, createContext, ReactNode, useState, useEffect,
} from 'react';
import { InterfaceMilks, InterfaceMilk } from '../types';

interface IMilkContext {
  isOpen: boolean
  milkTypes: string[]
  filter: string[]
  milks: InterfaceMilks
  milk: InterfaceMilk
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  getMilksPage: (page: string | undefined, filter?: string[]) => void
  setMilks: React.Dispatch<React.SetStateAction<InterfaceMilks>>
  setFilter: React.Dispatch<React.SetStateAction<string[]>>
  setMilk: React.Dispatch<React.SetStateAction<InterfaceMilk>>
}

export const MilkContext = createContext({} as IMilkContext);
export const useMilkContext = () => useContext(MilkContext);

interface MilkProviderProps {
  children: ReactNode
}

export const MilkProvider = ({ children }: MilkProviderProps) => {
  const milkTypes: string[] = ['Cashew milk', 'Pea milk', 'Walnut milk', 'Rice milk', 'Coconut milk', 'Soy milk', 'Hemp milk', 'Almond milk', 'Oat milk', 'Macadamia milk', 'Whole milk'];

  const [isOpen, setIsOpen] = useState(false);
  const [milks, setMilks] = useState<InterfaceMilks>({} as InterfaceMilks);
  const [milk, setMilk] = useState({} as InterfaceMilk);
  const [filter, setFilter] = useState([] as string[]);

  const getMilksPage = (page: string | undefined, typesFilter?: string[]):void => {
    let url = '';
    if (typesFilter === undefined) {
      url = `http://localhost:8080/api/milk?page=${page}&limit=9`;
    } else {
      const searchUrlFormat = typesFilter.join('%2B').replace(/ /g, '%20');
      url = `http://localhost:8080/api/milk?page=${page}&limit=9&filter=${searchUrlFormat}`;
    }

    fetch(url, {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then(data => setMilks(data));
  };

  useEffect(() => {
    getMilksPage('1', filter);
  }, [filter]);

  return (
    <MilkContext.Provider
      value={{
        isOpen,
        milkTypes,
        filter,
        milks,
        milk,
        setIsOpen,
        getMilksPage,
        setMilks,
        setFilter,
        setMilk,
      }}
    >
      {children}
    </MilkContext.Provider>
  );
};
