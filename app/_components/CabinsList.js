import { getCabins } from "../_lib/api_cabins";
import CabinItem from "./CabinItem"

async function CabinsList({ filter }) {
    const cabins = await getCabins();

    let displayCabins = [];
    if (filter === 'small') {
        displayCabins = cabins.filter(cabin => cabin.maxCapacity <= 3);
    } else if (filter === 'medium') {
        displayCabins = cabins.filter(cabin => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7);
    } else if (filter === 'large') {
        displayCabins = cabins.filter(cabin => cabin.maxCapacity >= 8);
    } else {
        displayCabins = cabins;
    }

    const sortedDisplayCabins = displayCabins.slice().sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className=" mt-12 grid grid-cols-[repeat(auto-fill,_minmax(420px,1fr))] gap-6 break-words grid-flow-row ">
            {sortedDisplayCabins.map(cabin => (<CabinItem key={cabin.id} cabin={cabin} />))}
        </div>
    )
}

export default CabinsList
