"use server";
import { prisma } from "@/utils/connect";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

async function PUT(
  request: NextRequest,
  { params }: { params: { intentId: string } }
) {
  "use server";
  const { intentId } = params;

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "Being prepared!" },
    });
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { paymentIntent },
  } = req;

  if (req.method === "PUT") {
    try {
      // Your logic to confirm payment
      // For example, updating a database record
      await prisma.order.update({
        where: {
          intent_id: paymentIntent as string,
        },
        data: { status: "Confirmed" },
      });
      res.status(200).json({ message: "Payment confirmed" });
    } catch (error) {
      console.error("Error confirming payment:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
