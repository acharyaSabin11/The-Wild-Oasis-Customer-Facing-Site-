import Logo from "./Logo"
import Navigation from "./Navigation"

function Header() {
    return (
        <header className="px-8 py-5 border-b border-primary-900" >
            <div className="flex justify-between max-w-[120rem] mx-auto items-center gap-1 z-50 relative">
                <Logo />
                <Navigation />
            </div>
        </header>
    )
}

export default Header
