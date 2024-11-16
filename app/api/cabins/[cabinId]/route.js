import { getCabinById } from "@/app/_lib/api_cabins";

export async function GET(_, { params }) {
    const { cabinId } = await params;
    try {
        const cabin = await getCabinById(cabinId);
        return Response.json(cabin);
    } catch (e) {
        return Response.json({ message: "Couldn't Load the Cabin." });
    }
}