import React from 'react'
const storeContext = React.createContext(null)
export const PokeProvider = storeContext.Provider;
export const PokeConsumer = storeContext.Consumer;
export default storeContext;