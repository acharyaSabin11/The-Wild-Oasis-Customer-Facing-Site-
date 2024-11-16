import Spinner from "../_components/Spinner"

function Loading() {
    return (
        <div className="grid justify-center items-center">
            <Spinner />
            <span>Loading Cabin Data...</span>
        </div>
    )
}

export default Loading
