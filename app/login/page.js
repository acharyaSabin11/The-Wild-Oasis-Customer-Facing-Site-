import SignInWithGoogleButton from "../_components/SignInWithGoogleButton"

function page() {
    return (
        <div className=" flex flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl mb-4">Sign in to access your guest area</h1>
            <SignInWithGoogleButton />
        </div>
    )
}

export default page
