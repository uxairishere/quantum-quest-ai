import { UserButton } from "@clerk/nextjs";
import ModileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const Navbar = async () => {

    const apiLimitCount = await getApiLimitCount()

    return (
        <div className="flex items-center p-4">
            <ModileSidebar apiLimitCount={apiLimitCount} />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default Navbar;