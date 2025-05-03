import Link from "next/link";

const AdminSideNavbar = () => {
  return (
    <nav className="w-48 bg-primary h-screen flex flex-col justify-between items-center py-6">
      <div className="w-full flex flex-col items-center">
        {/* Business Name Section */}
        <div className="mb-10 text-white flex items-center flex-col">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
          <span className="text-lg font-semibold">Test</span>
        </div>

        {/* Navigation NavLinks */}
        <ul className="w-full space-y-6">
          <Link href={"/admin-overview"} className="buttonStyle">
            <span className="mainStyle">Overview</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default AdminSideNavbar;
