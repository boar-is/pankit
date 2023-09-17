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
import { Button } from '@/components/ui/button'
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
import { GitHubButton, SignOutButton } from '@/app/(marketing)/client'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuNextLink,
} from '@/components/ui/navigation-menu'

export async function MarketingHeader() {
  const session = await getServerSession()

  return (
    <Header>
      <HeaderContainer>
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
          className="mr-auto hidden flex-1 text-muted-foreground md:block"
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
        <HeaderItem className="hidden bg-green-500 md:block">
          Actions
        </HeaderItem>
        <HeaderItem className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="group"
              asChild
            >
              <Button
                type="button"
                variant="ghost"
                size="icon"
              >
                <MenuIcon className="hidden group-data-[state=closed]:block" />
                <XIcon className="hidden group-data-[state=open]:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
              <DropdownMenuLabel>
                {session?.user ? (
                  <Button
                    variant="inverted"
                    className="w-full !rounded-md"
                    asChild
                  >
                    <Link
                      href="/dashboard"
                      className="flex gap-2"
                    >
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
                        <AvatarFallback>
                          {initials(session.user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-semibold">Go to Dashboard</span>
                    </Link>
                  </Button>
                ) : (
                  <GitHubButton />
                )}
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
                    href={env.NEXT_PUBLIC_GITHUB_REPO_URL}
                    target="_blank"
                  >
                    <DropdownMenuIcon>
                      <GitHubIcon />
                    </DropdownMenuIcon>
                    GitHub
                  </a>
                </DropdownMenuItem>
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
              {session?.user && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <SignOutButton />
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </HeaderItem>
      </HeaderContainer>
    </Header>
  )
}
