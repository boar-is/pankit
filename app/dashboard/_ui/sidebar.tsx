import Link from 'next/link'
import { BrandPanKit } from '@shared/ui/brand-pankit'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuNextLink,
} from '@shared/ui/navigation-menu'

export function Sidebar() {
  return (
    <div className="flex flex-col border-r border-border">
      <header className="p-4">
        <Link href="/">
          <BrandPanKit />
        </Link>
      </header>
      <NavigationMenu orientation="vertical">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuNextLink href="/dashboard">
              Overview
            </NavigationMenuNextLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuNextLink href="/dashboard">
              Overview
            </NavigationMenuNextLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuNextLink href="/dashboard">
              Overview
            </NavigationMenuNextLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
