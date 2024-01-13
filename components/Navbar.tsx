import { UserButton } from "@clerk/nextjs";
import ModileSidebar from "./mobile-sidebar";

const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <ModileSidebar />
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default Navbar;