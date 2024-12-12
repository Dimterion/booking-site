"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaCompass } from "react-icons/fa";
import { toast } from "react-toastify";
import deleteSession from "@/app/actions/deleteSession";
import { useAuth } from "@/context/authContext";

const Header = () => {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useAuth(null);

  const handleLogout = async () => {
    const { success, error } = await deleteSession();

    if (success) {
      setIsAuthenticated(false);

      router.push("/login");
    } else {
      toast.error(error);
    }
  };

  return (
    <header className="bg-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                className="h-12 w-12"
                alt="Booking site logo"
                priority={true}
              />
            </Link>
            <div className="hidden sm:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/places"
                  className="rounded-md p-2 font-medium text-gray-800 transition-colors hover:bg-gray-700 hover:text-white"
                >
                  Places
                </Link>
                <Link
                  href="/about"
                  className="rounded-md p-2 font-medium text-gray-800 transition-colors hover:bg-gray-700 hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md p-2 font-medium text-gray-800 transition-colors hover:bg-gray-700 hover:text-white"
                >
                  Contact
                </Link>
                {isAuthenticated && (
                  <>
                    <Link
                      href="/bookings"
                      className="rounded-md p-2 font-medium text-gray-800 transition-colors hover:bg-gray-700 hover:text-white"
                    >
                      Bookings
                    </Link>
                    <Link
                      href="/places/add"
                      className="rounded-md p-2 font-medium text-gray-800 transition-colors hover:bg-gray-700 hover:text-white"
                    >
                      Add place
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              {!isAuthenticated && (
                <>
                  <Link
                    href="/login"
                    className="flex items-center text-sm text-gray-800 transition-colors hover:text-gray-600 sm:text-base"
                  >
                    <FaSignInAlt className="mr-1 inline" /> Login
                  </Link>
                  <Link
                    href="/register"
                    className="mx-3 flex items-center text-sm text-gray-800 transition-colors hover:text-gray-600 sm:text-base"
                  >
                    <FaUser className="mr-1 inline" /> Register
                  </Link>
                </>
              )}
              {isAuthenticated && (
                <>
                  <Link
                    className="flex items-center text-sm text-gray-800 transition-colors hover:text-gray-600 sm:text-base"
                    href="/places/my"
                  >
                    <FaCompass className="mr-1 inline" />
                    My places
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="mx-3 flex items-center text-sm text-gray-800 transition-colors hover:text-gray-600 sm:text-base"
                  >
                    <FaSignOutAlt className="mr-1 inline" />
                    Sign out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="sm:hidden">
        <div className="flex flex-wrap items-center justify-center px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/places"
            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-700 hover:text-white sm:text-base"
          >
            Places
          </Link>
          <Link
            href="/about"
            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-700 hover:text-white sm:text-base"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-700 hover:text-white sm:text-base"
          >
            Contact
          </Link>
          {isAuthenticated && (
            <>
              <Link
                href="/bookings"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-700 hover:text-white sm:text-base"
              >
                Bookings
              </Link>
              <Link
                href="/places/add"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-700 hover:text-white sm:text-base"
              >
                Add place
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
