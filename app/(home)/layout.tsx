
import { SiteFooter } from "@/components/layout/site-footer"
import SiteHeader from "@/components/layout/site-header";
import { getCurrentUser } from "@/lib/session";
interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    const session = await getCurrentUser()
    console.log('[session]', session)
    return (
        <div className="relative flex min-h-screen flex-col">
            <SiteHeader 
            // session={session}
            />
            <main className="flex-1">{children}</main>
            <SiteFooter />

        </div>
    )
}