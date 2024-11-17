import Spinner from "../_components/Spinner";

function Loading() {
    return (
        <div className="grid items-center justify-center">
            <Spinner />
            Loading...
        </div>
    )
}

export default Loading;
