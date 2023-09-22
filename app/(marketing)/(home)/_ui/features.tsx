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

export function Features() {
  return (
    <div>
      {featureSections.map((section) => (
        <article
          className="space-y-8 py-16"
          key={section.title}
        >
          <header className="container prose-2xl">
            <h3 className="text-center font-bold ">{section.title}</h3>
          </header>
          <Spotlight
            size="large"
            color={section.spotlightColor}
          >
            <BentoGrid
              className="container max-w-4xl"
              variant={section.bentoVariant}
            >
              {section.items.map((feature) => (
                <SpotlightItem key={feature.title}>
                  <BentoItem>
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
