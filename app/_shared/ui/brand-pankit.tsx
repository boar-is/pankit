import { Brand, BrandLogo, BrandName, type BrandProps } from '@shared/ui/brand'
import Image from 'next/image'
import logoImage from '@/public/logo-180x180.webp'

export function BrandPanKit(props: BrandProps) {
  return (
    <Brand {...props}>
      <BrandLogo>
        <Image
          src={logoImage}
          alt="PanKit Logo"
          priority
          fill
          className="object-cover"
        />
      </BrandLogo>
      <BrandName>PanKit</BrandName>
    </Brand>
  )
}
