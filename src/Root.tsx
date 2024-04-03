import '@tamagui/core/reset.css'

import { TamaguiProvider } from 'tamagui'

import config from './tamagui.config'

import App from './App'

export const Root = () => {
  return (
    <TamaguiProvider config={config} defaultTheme="dark" >
      <App />
    </TamaguiProvider>
  )
}
