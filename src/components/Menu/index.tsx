import { MENU } from './constants'
import { DesktopMenu } from './DesktopMenu'
import { ItemMenu } from './ItemMenu'
import { MobileContainer } from './MobileContainer'

export const Menu = () => {
  return (
    <>
      <MobileContainer />
      <DesktopMenu>
        <ItemMenu itens={MENU} />
      </DesktopMenu>
    </>
  )
}
