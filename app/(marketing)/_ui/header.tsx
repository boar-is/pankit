import Link from 'next/link'
import { env } from '@/env.mjs'
import { SessionButton } from '@/app/(marketing)/_ui/session-button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuIcon,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shared/ui/dropdown'
import {
  BugIcon,
  CoinsIcon,
  GraduationCapIcon,
  LifeBuoyIcon,
  MenuIcon,
  NewspaperIcon,
  XIcon,
  ZapIcon,
} from 'lucide-react'
import { Header as SharedHeader, HeaderContainer } from '@shared/ui/header'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuNextLink,
} from '@shared/ui/navigation-menu'
import { Button } from '@shared/ui/button'
import { ThemeToggle } from '@shared/ui/theme-toggle'
import { BrandPanKit } from '@shared/ui/brand-pankit'
import { GitHubIcon } from '@shared/ui/icons'

export function Header() {
  return (
    <SharedHeader>
      <HeaderContainer>
        <Link href="/">
          <BrandPanKit />
        </Link>
        <NavigationMenu className="mr-auto hidden flex-1 text-muted-foreground lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuNextLink href="/#features">
                Features
              </NavigationMenuNextLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuNextLink href="/pricing">
                Pricing
              </NavigationMenuNextLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuNextLink href="/Blog">Blog</NavigationMenuNextLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuNextLink href="/docs">Docs</NavigationMenuNextLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <menu className="flex items-center gap-1 lg:gap-2">
          <li>
            <Button
              variant="tertiary"
              asChild
            >
              <Link
                href={env.NEXT_PUBLIC_GITHUB_REPO_URL}
                target="_blank"
              >
                <GitHubIcon />
              </Link>
            </Button>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li className="ml-8 hidden lg:block">
            <SessionButton variant="primary" />
          </li>
          <li className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="group"
                asChild
              >
                <Button
                  type="button"
                  variant="tertiary"
                >
                  <MenuIcon className="rotate-0 scale-100 transition-transform group-data-[state=open]:-rotate-90 group-data-[state=open]:-scale-0" />
                  <XIcon className="absolute rotate-90 scale-0 transition-transform group-data-[state=open]:rotate-0 group-data-[state=open]:scale-100" />
                  <span className="sr-only">Open/Close Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-4">
                <DropdownMenuLabel>
                  <SessionButton variant="primary" />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/#features">
                      <DropdownMenuIcon>
                        <ZapIcon />
                      </DropdownMenuIcon>
                      Features
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/pricing">
                      <DropdownMenuIcon>
                        <CoinsIcon />
                      </DropdownMenuIcon>
                      Pricing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/blog">
                      <DropdownMenuIcon>
                        <NewspaperIcon />
                      </DropdownMenuIcon>
                      Blog
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/docs">
                      <DropdownMenuIcon>
                        <GraduationCapIcon />
                      </DropdownMenuIcon>
                      Docs
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <a
                      href={env.NEXT_PUBLIC_GITHUB_REPO_URL + '/discussions'}
                      target="_blank"
                    >
                      <DropdownMenuIcon>
                        <LifeBuoyIcon />
                      </DropdownMenuIcon>
                      Support
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href={env.NEXT_PUBLIC_GITHUB_REPO_URL + '/issues'}
                      target="_blank"
                    >
                      <DropdownMenuIcon>
                        <BugIcon />
                      </DropdownMenuIcon>
                      Found a bug?
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </menu>
      </HeaderContainer>
    </SharedHeader>
  )
}
