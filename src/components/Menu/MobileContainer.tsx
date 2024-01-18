'use client'
import { MENU } from './constants'
import { ItemMenu } from './ItemMenu'
import { MobileDrawer } from './MobileDrawer'

export const MobileContainer = () => {
  return (
    <MobileDrawer>
      {({ handleToggle }) => (
        <ItemMenu itens={MENU} handleToggle={handleToggle} />
      )}
    </MobileDrawer>
  )
}
