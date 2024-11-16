import { auth } from "../_lib/auth"
import Logo from "./Logo"
import Navigation from "./Navigation"

async function Header() {
    const session = await auth();
    return (
        <header className="px-24 py-5 border-b border-primary-900" >
            <div className="flex justify-between max-w-[120rem] mx-auto items-center gap-1 z-50 relative">
                <Logo />
                <Navigation session={session} />
            </div>
        </header>
    )
}

export default Header
