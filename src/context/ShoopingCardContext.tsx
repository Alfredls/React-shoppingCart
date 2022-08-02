import { createContext, ReactNode, useContext } from 'react'

type ShoppingCartProviderProps = {
  children: ReactNode
}

const ShoppingCardContext = createContext({})

export function useShoppingCart(){
  return useContext(ShoppingCardContext)
}

export function ShoopingCardProvider({children}: ShoppingCartProviderProps){
  return(
    <ShoppingCardContext.Provider value={{}} >
      {children}
    </ShoppingCardContext.Provider>
  )
}
