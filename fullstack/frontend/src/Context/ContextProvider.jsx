import React, { useState } from 'react'

import { createContext } from "react";
export const mainContext = createContext(null)
const ContextProvider = ({children}) => {
    const [state,setState]=useState([])

    const values = {
       state,setState
    }

  return (
    <mainContext.Provider value={values}>
    {children}
   </mainContext.Provider>
  )
}

export default ContextProvider      