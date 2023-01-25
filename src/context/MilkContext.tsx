import React, { useContext, createContext, ReactNode, useState } from 'react'

interface IMilkContext {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
 }

export const MilkContext = createContext({} as IMilkContext)
export const useMilkContext = () => useContext(MilkContext)

interface MilkProviderProps {
  children: ReactNode
}

export const MilkProvider = ({ children }: MilkProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MilkContext.Provider
      value={{
        setIsOpen,
        isOpen,
      }}
    >
      {children}
    </MilkContext.Provider>
  );
}
