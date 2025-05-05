import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Binoculars,
  CalendarDays,
  Database,
  Clipboard,
  Settings,
} from "lucide-react";

const AdminSideNavbar = () => {
  const pathname = usePathname();

  // Navigation items array
  const navItems = [
    { href: "/admin/overview", label: "Overview", icon: Binoculars },
    { href: "/admin/calendar", label: "Calendar", icon: CalendarDays },
    { href: "/admin/services", label: "Services", icon: Database },
    { href: "/admin/reports", label: "Reports", icon: Clipboard },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ];

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
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href} className="w-full shadow-lg">
              <Link
                href={href}
                className={`buttonStyle ${
                  pathname === href ? "bg-hoverShade text-white" : ""
                }`}
              >
                <Icon size={18} className="iconStyle mr-3" />
                <span className="mainStyle">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default AdminSideNavbar;
