import {
  BentoGrid,
  BentoItem,
  BentoItemContent,
  BentoItemHeader,
  BentoItemIcon,
  BentoItemTitle,
} from '@shared/ui/bento-grid'
import { Spotlight, SpotlightItem } from '@shared/ui/spotlight'
import { featureSections } from '@marketing/(home)/_lib/data'
import { Badge } from '@shared/ui/badge'

export function Features() {
  return (
    <div className="py-16 md:py-32">
      <h2
        className="sr-only"
        id="features"
      >
        Features
      </h2>
      {featureSections.map((section) => (
        <article
          className="space-y-4 py-8 md:space-y-16 md:py-16 lg:py-32"
          key={section.title}
        >
          <header className="container">
            <h3 className="text-center text-3xl font-bold md:text-5xl">
              {section.title}
            </h3>
          </header>
          <Spotlight
            size="large"
            color={section.spotlightColor}
          >
            <BentoGrid
              className="container max-w-7xl"
              variant={section.bentoVariant}
            >
              {section.items.map((feature) => (
                <SpotlightItem key={feature.title}>
                  <BentoItem className="relative">
                    {feature.comingSoon && (
                      <Badge
                        className="absolute right-4 top-4"
                        color={section.spotlightColor}
                      >
                        Coming Soon
                      </Badge>
                    )}
                    <BentoItemHeader>
                      <BentoItemIcon>{feature.icon}</BentoItemIcon>
                      <BentoItemTitle>
                        <h4>{feature.title}</h4>
                      </BentoItemTitle>
                    </BentoItemHeader>
                    <BentoItemContent>{feature.content}</BentoItemContent>
                  </BentoItem>
                </SpotlightItem>
              ))}
            </BentoGrid>
          </Spotlight>
        </article>
      ))}
    </div>
  )
}
