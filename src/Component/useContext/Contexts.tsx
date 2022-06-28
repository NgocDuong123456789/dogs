import  { ReactNode, useState } from 'react'
import { createContext } from 'react'
import {data} from '../Interface'


export const Themes =createContext<any>(
  {
    copy:[],
    setCopy:() =>{},
  }
)
export const Contexts:React.FC<{children:ReactNode}> = ({children}) => {
  const [dataContext , setDataContext] = useState<data[]>([])
  
  return (
    <Themes.Provider value={{dataContext , setDataContext}} >
        {children}
    </Themes.Provider>
  )
}
