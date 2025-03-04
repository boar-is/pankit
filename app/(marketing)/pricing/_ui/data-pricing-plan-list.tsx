import {
  PricingPlan,
  PricingPlanContent,
  PricingPlanDescription,
  PricingPlanFeatureItem,
  PricingPlanFeatureList,
  PricingPlanFooter,
  PricingPlanHeader,
  PricingPlanList,
  PricingPlanPrice,
  PricingPlanPriceDescription,
  PricingPlanPriceValue,
  PricingPlanTitle,
} from '@marketing/pricing/_ui/pricing-plan'
import { Badge } from '@shared/ui/badge'
import { Spotlight, SpotlightItem } from '@shared/ui/spotlight'
import { DataPricingPlanFooterButton } from '@marketing/pricing/_ui/data-pricing-plan-footer-button'
import { cn } from '@shared/lib/utils'

export const priceByFrequency = {
  hobby: {
    monthly: {
      value: '$0',
      description: null,
    },
    annually: {
      value: '$0',
      description: null,
    },
  },
  pro: {
    monthly: {
      value: '$10',
      description: '/ month',
    },
    annually: {
      value: '$8',
      description: '/ month billed annually',
    },
  },
  lifelong: {
    monthly: {
      value: '$395',
      description: '/ one time',
    },
    annually: {
      value: '$395',
      description: '/ one time',
    },
  },
}

export type PaymentFrequency = 'monthly' | 'annually'

export type DataPricingPlanListProps = {
  frequency: PaymentFrequency
}

export function DataPricingPlanList({ frequency }: DataPricingPlanListProps) {
  const color = frequency === 'annually' ? 'blue' : 'green'

  return (
    <Spotlight
      color={color}
      size="large"
    >
      <PricingPlanList>
        <SpotlightItem>
          <PricingPlan>
            <PricingPlanHeader>
              <PricingPlanTitle>
                <h2>Hobby</h2>
              </PricingPlanTitle>
              <PricingPlanPrice>
                <PricingPlanPriceValue>
                  {priceByFrequency.hobby[frequency].value}
                </PricingPlanPriceValue>
                <PricingPlanPriceDescription>
                  {priceByFrequency.hobby[frequency].description}
                </PricingPlanPriceDescription>
              </PricingPlanPrice>
              <PricingPlanDescription>
                Start your next side project
              </PricingPlanDescription>
            </PricingPlanHeader>
            <PricingPlanContent>
              <PricingPlanFeatureList>
                <PricingPlanFeatureItem>
                  App Router with <em>Next.js</em>
                </PricingPlanFeatureItem>
                <PricingPlanFeatureItem>
                  Auth with <em>Auth.js</em>
                </PricingPlanFeatureItem>
                <PricingPlanFeatureItem>
                  Database with <em>Prisma</em> and <em>Vercel Postgres</em>
                </PricingPlanFeatureItem>
                <PricingPlanFeatureItem>
                  Component System with <em>Radix UI</em>
                </PricingPlanFeatureItem>
                <PricingPlanFeatureItem>
                  Strict Mode for <em>TypeScript</em> and <em>React</em>
                </PricingPlanFeatureItem>
                <PricingPlanFeatureItem>
                  Linters and Formatters via <em>ESLint</em> and{' '}
                  <em>Prettier</em>
                </PricingPlanFeatureItem>
              </PricingPlanFeatureList>
            </PricingPlanContent>
            <PricingPlanFooter>
              <DataPricingPlanFooterButton
                variant="outline"
                frequency={frequency}
                plan="hobby"
              >
                Start building
              </DataPricingPlanFooterButton>
            </PricingPlanFooter>
          </PricingPlan>
        </SpotlightItem>
        <SpotlightItem>
          <PricingPlan
            className={cn(
              'border',
              color === 'blue' &&
                'border-highlight-blue-content dark:border-highlight-blue',
              color === 'green' &&
                'border-highlight-green-content dark:border-highlight-green',
            )}
          >
            <PricingPlanHeader>
              <PricingPlanTitle>
                <h2 className="flex justify-between">
                  Pro
                  <Badge
                    variant="subtle"
                    color={color}
                  >
                    Most Popular
                  </Badge>
                </h2>
              </PricingPlanTitle>
              <PricingPlanPrice>
                <PricingPlanPriceValue>
                  {priceByFrequency.pro[frequency].value}
                </PricingPlanPriceValue>
                <PricingPlanPriceDescription>
                  {priceByFrequency.pro[frequency].description}
                </PricingPlanPriceDescription>
              </PricingPlanPrice>
              <PricingPlanDescription>
                Everything in Hobby, plus additional features
              </PricingPlanDescription>
            </PricingPlanHeader>
            <PricingPlanContent>
              <PricingPlanFeatureList>
                <PricingPlanFeatureItem>
                  Multi-Tenancy with <em>Vercel Domains API</em>
                </PricingPlanFeatureItem>
                <PricingPlanFeatureItem>
                  Rate-Limiting with <em>Upstash</em>
                </PricingPlanFeatureItem>
                <PricingPlanFeatureItem>
                  Docs via <em>Nextra</em>
                </PricingPlanFeatureItem>
                <PricingPlanFeatureItem>
                  Blog via <em>Plate</em> and <em>Slate</em>
                </PricingPlanFeatureItem>
                <PricingPlanFeatureItem>
                  Subscriptions via <em>Stripe</em>
                </PricingPlanFeatureItem>
              </PricingPlanFeatureList>
            </PricingPlanContent>
            <PricingPlanFooter>
              <DataPricingPlanFooterButton
                variant="solid"
                frequency={frequency}
                plan="pro"
              >
                Go Pro
              </DataPricingPlanFooterButton>
            </PricingPlanFooter>
          </PricingPlan>
        </SpotlightItem>
        <SpotlightItem>
          <PricingPlan>
            <PricingPlanHeader>
              <PricingPlanTitle>
                <h2>Life-Long</h2>
              </PricingPlanTitle>
              <PricingPlanPrice>
                <PricingPlanPriceValue>
                  {priceByFrequency.lifelong[frequency].value}
                </PricingPlanPriceValue>
                <PricingPlanPriceDescription>
                  {priceByFrequency.lifelong[frequency].description}
                </PricingPlanPriceDescription>
              </PricingPlanPrice>
              <PricingPlanDescription>
                Everything. Forever.
              </PricingPlanDescription>
            </PricingPlanHeader>
            <PricingPlanContent>
              <PricingPlanFeatureList>
                <PricingPlanFeatureItem>
                  All features forever
                </PricingPlanFeatureItem>
                <PricingPlanFeatureItem>Premium Support</PricingPlanFeatureItem>
              </PricingPlanFeatureList>
            </PricingPlanContent>
            <PricingPlanFooter>
              <DataPricingPlanFooterButton
                variant="outline"
                frequency={frequency}
                plan="lifelong"
              >
                Contact Sales
              </DataPricingPlanFooterButton>
            </PricingPlanFooter>
          </PricingPlan>
        </SpotlightItem>
      </PricingPlanList>
    </Spotlight>
  )
}
