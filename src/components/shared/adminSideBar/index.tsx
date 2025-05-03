import Link from "next/link";
import {
  Binoculars,
  CalendarDays,
  Database,
  Clipboard,
  Settings,
} from "lucide-react";

const AdminSideNavbar = () => {
  return (
    <nav className="w-48 bg-primary h-screen flex flex-col justify-between items-center py-6">
      <div className="w-full flex flex-col items-center">
        {/* Business Name Section */}
        <div className="mb-10 text-white flex items-center flex-col">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
          <span className="text-lg font-semibold">Business Name</span>
        </div>

        {/* Navigation NavLinks */}
        <ul className="w-full space-y-6">
          <li className="w-full shadow-lg">
            <Link href={"/admin/overview"} className="buttonStyle">
              <Binoculars size={18} className="iconStyle mr-3" />
              <span className="mainStyle">Overview</span>
            </Link>
          </li>
          <li className="w-full shadow-lg">
            <Link href={"/admin/calendar"} className="buttonStyle">
              <CalendarDays size={18} className="iconStyle mr-3" />
              <span className="mainStyle">Calendar</span>
            </Link>
          </li>
          <li className="w-full shadow-lg">
            <Link href={"/admin/services"} className="buttonStyle">
              <Database size={18} className="iconStyle mr-3" />
              <span className="mainStyle">Services</span>
            </Link>
          </li>
          <li className="w-full shadow-lg">
            <Link href={"/admin/reports"} className="buttonStyle">
              <Clipboard size={18} className="iconStyle mr-3" />
              <span className="mainStyle">Reports</span>
            </Link>
          </li>
          <li className="w-full shadow-lg">
            <Link href={"/admin/settings"} className="buttonStyle">
              <Settings size={18} className="iconStyle mr-3" />
              <span className="mainStyle">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminSideNavbar;
