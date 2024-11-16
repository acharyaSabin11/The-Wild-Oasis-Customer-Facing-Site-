import Image from "next/image"
import { signInWithGoogle } from "../_lib/actions"

function SignInWithGoogleButton() {
    return (

        <form action={signInWithGoogle}>
            <button className="flex px-4 py-2 gap-4 border-2 border-primary-200 rounded-md">
                <div className="size-6 relative">
                    <Image src='https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA' alt="google-image" fill />
                </div>
                <p>Sign In With Google</p>
            </button>
        </form>
    )
}

export default SignInWithGoogleButton
