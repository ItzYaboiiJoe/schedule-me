"use client";
import { usePathname } from "next/navigation";
import AdminSideNavbar from "@/components/shared/adminSideBar";
import AdminTitleBar from "@/components/shared/adminTopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1];

  const pageTitleMap: Record<string, string> = {
    overview: "Overview",
    calendar: "Calendar",
    services: "Services",
    reports: "Reports",
    settings: "Settings",
  };

  const pageTitle = pageTitleMap[currentPage] || "Admin";

  return (
    <div className="bg-[#EAF4F1]">
      <div className="flex h-screen">
        <AdminSideNavbar />
        <div className="flex-1 flex flex-col">
          <AdminTitleBar pageTitle={pageTitle} />
          <div className="p-6">
            <h1 className="text-gray-700 text-xl font-bold">{children}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
