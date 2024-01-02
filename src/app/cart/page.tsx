import CartPageComponent from "@/components/CartPageComponent";
import { useCartStore } from "@/utils/store";

import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  const { data: session } = useSession();
  const router = useRouter();

  const handleCheckout = async () => {
    "use server";
    if (!session) {
      router.push("/login");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Preparing",
            userEmail: session.user.email,
          }),
        });
        const data = await res.json();
        router.push(`/pay/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return <CartPageComponent handleCheckout={handleCheckout} />;
};

export default CartPage;
