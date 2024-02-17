import { UserButton } from "@clerk/nextjs";
import ModileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { dark } from '@clerk/themes';

const Navbar = async () => {

    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription()

    return (
        <div className="flex items-center p-4">
            <ModileSidebar apiLimitCount={apiLimitCount} isPro={isPro} />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" appearance={{baseTheme: dark}} />
            </div>
        </div>
    )
}

export default Navbar;