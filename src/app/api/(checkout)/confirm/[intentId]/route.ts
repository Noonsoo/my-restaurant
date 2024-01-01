import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/connect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { intentId },
  } = req;

  if (req.method !== "PUT") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId as string, // Type casting
      },
      data: { status: "Being prepared!" },
    });
    return res.status(200).json({ message: "Order has been updated" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Something went wrong!" });
  }
}
