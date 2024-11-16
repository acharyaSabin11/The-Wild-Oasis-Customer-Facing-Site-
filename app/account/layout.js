import SideNavigation from "../_components/SideNavigation"

function layout({ children }) {
    return (
        <div className="grid grid-cols-[16rem_1fr] h-full">
            <SideNavigation />
            <div className="mx-8 ">

                {children}
            </div>
        </div>
    )
}

export default layout
