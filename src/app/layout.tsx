import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Notifications from "@/components/Notifications";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nonso's Restaurant",
  description: "Best Food in town",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <div>
              <Notifications />
              <Navbar />
              {children}
              <Footer />
              <ToastContainer
                position="bottom-right"
                theme="dark"
                autoClose={3000}
                className="toast-message"
              />
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
