import React from 'react'
const storeContext = React.createContext(null)
export const AlvProvider = storeContext.Provider;
export const AlvConsumer = storeContext.Consumer;
export default storeContext;