import {createContext} from 'react'

export const DeviceContext = createContext({
    currentDevice: {},
    setCurrentDevice: () => {},
})