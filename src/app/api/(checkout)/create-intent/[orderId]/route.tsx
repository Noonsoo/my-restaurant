import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/connect";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { orderId } = req.query;

    const order = await prisma.order.findUnique({
      where: {
        id: orderId as string,
      },
    });

    if (order) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 100 * 100,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      await prisma.order.update({
        where: {
          id: orderId as string,
        },
        data: { intent_id: paymentIntent.id },
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } else {
      res.status(404).json({ message: "Order not found!" });
    }
  } else {
    // Handle any other HTTP methods
    res.status(405).end(); // Method Not Allowed
  }
}
