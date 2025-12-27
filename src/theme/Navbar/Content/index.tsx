import React, {type ReactNode} from "react"
import {useThemeConfig} from "@docusaurus/theme-common"
import {splitNavbarItems, useNavbarMobileSidebar} from "@docusaurus/theme-common/internal"
import NavbarItem, {type Props as NavbarItemConfig} from "@theme/NavbarItem"

import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle"
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle"
import NavbarLogo from "@theme/Navbar/Logo"
import GithubStarsButton from "@site/src/components/shared/GithubStarsButton"
import styles from "./styles.module.css"

const useNavbarItems = () => {
  // TODO temporary casting until ThemeConfig type is improved (added by docusaurus)
  return useThemeConfig().navbar.items as NavbarItemConfig[]
}

const NavbarItems = ({items}: {items: NavbarItemConfig[]}) => {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem key={i} {...item} />
      ))}
    </>
  )
}

const NavbarContentLayout = ({left, right}: {left: ReactNode; right: ReactNode}) => {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  )
}


const NavbarContent = () => {
  // @ts-ignore - useNavbarMobileSidebar doesn't require arguments in this Docusaurus version
  const mobileSidebar = useNavbarMobileSidebar()

  const items = useNavbarItems()
  const [leftItems, rightItems] = splitNavbarItems(items)

  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items? (added by docusaurus)
        // Render left navbar items
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items? (added by docusaurus)
        // Render right navbar items
        <>
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </>
      }
    />
  )
}

export default NavbarContent
