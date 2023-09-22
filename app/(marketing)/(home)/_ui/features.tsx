import { featureSections } from '@marketing/(home)/_lib/data'

export function Features() {
  return (
    <div
      className="py-16 md:py-32 lg:py-48"
      id="features"
    >
      <h2 className="sr-only">Features</h2>
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
          {/*<Spotlight*/}
          {/*  size="large"*/}
          {/*  color={section.spotlightColor}*/}
          {/*>*/}
          {/*  <BentoGrid*/}
          {/*    className="container max-w-7xl"*/}
          {/*    variant={section.bentoVariant}*/}
          {/*  >*/}
          {/*    {section.items.map((feature) => (*/}
          {/*      <SpotlightItem key={feature.title}>*/}
          {/*        <BentoItem className="relative">*/}
          {/*          {feature.comingSoon && (*/}
          {/*            <Badge*/}
          {/*              className="absolute right-4 top-4"*/}
          {/*              color={section.spotlightColor}*/}
          {/*            >*/}
          {/*              Coming Soon*/}
          {/*            </Badge>*/}
          {/*          )}*/}
          {/*          <BentoItemHeader>*/}
          {/*            <BentoItemIcon>{feature.icon}</BentoItemIcon>*/}
          {/*            <BentoItemTitle>*/}
          {/*              <h4>{feature.title}</h4>*/}
          {/*            </BentoItemTitle>*/}
          {/*          </BentoItemHeader>*/}
          {/*          <BentoItemContent>{feature.content}</BentoItemContent>*/}
          {/*        </BentoItem>*/}
          {/*      </SpotlightItem>*/}
          {/*    ))}*/}
          {/*  </BentoGrid>*/}
          {/*</Spotlight>*/}
        </article>
      ))}
    </div>
  )
}
