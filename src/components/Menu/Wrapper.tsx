import { MENU } from './constants'
import { DesktopMenu } from './DesktopMenu'
import { ItemMenu } from './ItemMenu'
import { MobileDrawer } from './MobileDrawer'

export const Wrapper = () => {
  return (
    <>
      <MobileDrawer>
        <ItemMenu itens={MENU} />
      </MobileDrawer>
      <DesktopMenu>
        <ItemMenu itens={MENU} />
      </DesktopMenu>
    </>
  )
}
