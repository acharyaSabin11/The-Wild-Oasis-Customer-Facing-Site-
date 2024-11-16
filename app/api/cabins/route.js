import { getCabins } from "@/app/_lib/api_cabins";

export async function GET() {
    try {
        const cabins = await getCabins();
        return Response.json(cabins);
    } catch (e) {
        return Response.json({ message: "Couldn't Load Cabins." });
    }
}