import { Header, HeaderContainer, HeaderItem } from '@/components/ui/header'
import Link from 'next/link'
import { Brand, BrandLogo, BrandName } from '@/components/ui/brand'
import Image from 'next/image'
import logoImage from '@/public/images/logo-180x180.webp'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuIcon,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown'
import { Button, ButtonDecoration } from '@/components/ui/button'
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
import { GitHubIcon } from '@/components/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { initials } from '@/core/utils'
import { env } from '@/env.mjs'
import { getServerSession } from 'next-auth'
import { GitHubButton } from '@/app/(marketing)/client'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuNextLink,
} from '@/components/ui/navigation-menu'
import { ThemeToggle } from '@/components/theme-toggle'

export async function SessionButton() {
  const session = await getServerSession()

  if (session?.user) {
    return (
      <Button
        className="w-full"
        asChild
      >
        <Link
          href="/dashboard"
          className="flex gap-2"
        >
          <ButtonDecoration>
            <Avatar className="h-6 w-6">
              <AvatarImage
                src={session.user.image ?? ''}
                asChild
              >
                <Image
                  src={session.user.image ?? ''}
                  alt={`Avatar of ${session?.user.image}`}
                  fill
                />
              </AvatarImage>
              <AvatarFallback>{initials(session.user.name)}</AvatarFallback>
            </Avatar>
          </ButtonDecoration>
          Go to Dashboard
        </Link>
      </Button>
    )
  }

  return <GitHubButton />
}

export function MarketingHeader() {
  return (
    <Header>
      <HeaderContainer className="py-2 lg:py-4">
        <HeaderItem>
          <Link href="/">
            <Brand>
              <BrandLogo>
                <Image
                  src={logoImage}
                  alt="PanKit Logo"
                  fill
                  className="object-cover"
                />
              </BrandLogo>
              <BrandName>PanKit</BrandName>
            </Brand>
          </Link>
        </HeaderItem>
        <HeaderItem
          className="mr-auto hidden flex-1 text-muted-foreground lg:block"
          asChild
        >
          <NavigationMenu>
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
                <NavigationMenuNextLink href="/Blog">
                  Blog
                </NavigationMenuNextLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuNextLink href="/docs">
                  Docs
                </NavigationMenuNextLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </HeaderItem>
        <HeaderItem asChild>
          <menu className="flex items-center gap-1 lg:gap-2">
            <li>
              <Button
                variant="ghost"
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
            <li className="ml-5 hidden lg:block">
              <SessionButton />
            </li>
            <li className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="group"
                  asChild
                >
                  <Button
                    type="button"
                    variant="ghost"
                  >
                    <MenuIcon className="rotate-0 scale-100 transition-transform group-data-[state=open]:-rotate-90 group-data-[state=open]:-scale-0" />
                    <XIcon className="absolute rotate-90 scale-0 transition-transform group-data-[state=open]:rotate-0 group-data-[state=open]:scale-100" />
                    <span className="sr-only">Open/Close Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-4">
                  <DropdownMenuLabel>
                    <SessionButton />
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
        </HeaderItem>
      </HeaderContainer>
    </Header>
  )
}
