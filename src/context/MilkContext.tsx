import { useContext, createContext, ReactNode } from 'react';

interface IMilkContext {
  printHello: () => void
}

export const MilkContext = createContext({} as IMilkContext);
export const useMilkContext = () => useContext(MilkContext);

interface MilkProviderProps {
  children: ReactNode
}

export const MilkProvider = ({ children }: MilkProviderProps) => {
  const printHello = () => {
    console.log('hello world')
  } 

  return (
    <MilkContext.Provider
      value={{
        printHello
      }}
    >
      {children}
    </MilkContext.Provider>
  );
}
