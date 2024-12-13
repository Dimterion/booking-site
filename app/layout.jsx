import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthWrapper from "@/components/AuthWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Booking Site",
  description:
    "Book a meeting place or add your own place to book for meetings.",
};

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang="en">
        <body className={`${inter.className} flex min-h-screen flex-col`}>
          <Header />
          <main className="mx-auto w-full max-w-7xl flex-grow px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthWrapper>
  );
}
