import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shared/ui/tabs'
import { DataPricingPlanList } from '@marketing/pricing/_ui/data-pricing-plan-list'
import { Alert, AlertDecoration } from '@shared/ui/alert'
import { AlertTriangle } from 'lucide-react'

export default async function Page() {
  return (
    <article className="py-12 md:py-24">
      <article className="flex flex-col gap-8">
        <header>
          <hgroup className="container text-center">
            <h1 className="font-semibold text-highlight-blue-content dark:text-highlight-blue md:text-3xl">
              Pricing
            </h1>
            <p className="text-4xl font-bold tracking-tight md:text-6xl">
              Find out which plan is right for you
            </p>
          </hgroup>
        </header>
        <aside className="container">
          <Alert
            color="destructive"
            variant="subtle"
            size="large"
            className="mx-auto max-w-fit"
          >
            <AlertDecoration>
              <AlertTriangle />
            </AlertDecoration>
            PanKit is a demo app. You can test the upgrade and won`t be charged.
          </Alert>
        </aside>
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
