import React, { useContext, createContext, ReactNode, useState, useEffect } from 'react'
import { InterfaceMilks } from '../types'

interface IMilkContext {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  milks: InterfaceMilks
  allMilksData: InterfaceMilks,
  getMilksPage: (page: string | undefined, limit:string) => void
  toFilterItems: string[]
 }

export const MilkContext = createContext({} as IMilkContext)
export const useMilkContext = () => useContext(MilkContext)

interface MilkProviderProps {
  children: ReactNode
}

export const MilkProvider = ({ children }: MilkProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [milks, setMilks] = useState<InterfaceMilks>({} as InterfaceMilks)
  const [allMilksData, setallMilksData] = useState<InterfaceMilks>({} as InterfaceMilks)

  const toFilterItems: string[] = []

  const getAllMilks = (): void => {
    fetch(`http://localhost:8080/api/milk`, {
      method: 'GET',
    })
      .then(response => {
        if(!response.ok) {
          throw new Error();
        }
        return response.json()
      })
      .then(data => {
        setallMilksData(data)
      })
      .catch(_error => {

      }) 
  }

  const getMilksPage = (page: string | undefined, limit: string):void => {
    fetch(`http://localhost:8080/api/milk?page=${page}&limit=${limit}`, {
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
    getMilksPage('1', '9')
    getAllMilks()
  }, [])

  return (
    <MilkContext.Provider
      value={{
        setIsOpen,
        isOpen,
        milks,
        allMilksData,
        getMilksPage,
        toFilterItems
      }}
    >
      {children}
    </MilkContext.Provider>
  );
}
