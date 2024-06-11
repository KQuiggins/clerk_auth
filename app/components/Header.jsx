import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  const { userId } = auth();

  return (
    <>
      <nav className="bg-slate-700 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-white text-2xl font-bold uppercase">Logo</div>
          </Link>
        </div>
        <div className="text-white flex items-center">
          {!userId && (
            <>
              <Link href="/sign-in">
                <div className="text-white hover:text-gray-400 mr-4">Login</div>
              </Link>
              <Link href="/sign-up">
                <div className="text-white hover:text-gray-400">Signup</div>
              </Link>
            </>
          )}
          {userId && (
            <>
              <Link href="/dashboard">
                <div className="text-white hover:text-gray-400 mr-4">Dashboard</div>
              </Link>
              <Link href="/profile">
                <div className="text-white hover:text-gray-400 mr-4">Profile</div>
              </Link>
            </>

          )}
          <div className="ml-auto">
            <UserButton afterSignOutUrl='/'/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
