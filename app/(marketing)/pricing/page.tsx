import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shared/ui/tabs'
import { DataPricingPlanList } from '@marketing/pricing/_ui/data-pricing-plan-list'

export default async function Page() {
  return (
    <article className="py-12 md:py-24">
      <article className="flex flex-col gap-8">
        <header>
          <hgroup className="container text-center">
            <h1 className="font-semibold text-highlight-blue-content">
              Pricing
            </h1>
            <p className="text-4xl font-bold tracking-tight">
              Find out which plan is right for you
            </p>
          </hgroup>
        </header>
        <Tabs
          defaultValue="annually"
          className="container"
        >
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annually">Annually</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly">
            <DataPricingPlanList frequency="monthly" />
          </TabsContent>
          <TabsContent value="annually">
            <DataPricingPlanList frequency="annually" />
          </TabsContent>
        </Tabs>
      </article>
    </article>
  )
}
