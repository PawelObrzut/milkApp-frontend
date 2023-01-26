import React, { useContext, createContext, ReactNode, useState, useEffect } from 'react'
import { InterfaceMilks } from '../types'

interface IMilkContext {
  isOpen: boolean
  milkTypes: string[]
  filter: string[]
  milks: InterfaceMilks
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  getMilksPage: (page: string | undefined) => void
  setMilks: React.Dispatch<React.SetStateAction<InterfaceMilks>>
  setFilter:  React.Dispatch<React.SetStateAction<string[]>>
 }

export const MilkContext = createContext({} as IMilkContext)
export const useMilkContext = () => useContext(MilkContext)

interface MilkProviderProps {
  children: ReactNode
}

export const MilkProvider = ({ children }: MilkProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [milks, setMilks] = useState<InterfaceMilks>({} as InterfaceMilks)
  const [filter, setFilter] = useState([] as string[])

  const milkTypes: string[] = ['Cashew milk', 'Pea milk', 'Walnut milk', 'Rice milk', 'Coconut milk', 'Soy milk', 'Hemp milk', 'Almond milk', 'Oat milk', 'Macademia milk', 'Whole milk']

  const getMilksPage = (page: string | undefined):void => {
    fetch(`http://localhost:8080/api/milk?page=${page}&limit=9`, {
      method: 'GET',
    })
      .then(response => {
        if(!response.ok) {
          throw new Error();
        }
        return response.json()
      })
      .then(data => {
        setMilks(data)
      })
      .catch(_error => {

      }) 
  }

  useEffect(() => {
    getMilksPage('1')
  }, [])

  useEffect(() => {
    console.log(filter)
  }, [filter])

  return (
    <MilkContext.Provider
      value={{
        isOpen,
        milkTypes,
        filter,
        milks,
        setIsOpen,
        getMilksPage,
        setMilks,
        setFilter,
      }}
    >
      {children}
    </MilkContext.Provider>
  );
}
