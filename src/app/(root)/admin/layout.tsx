import AdminSideNavbar from "@/components/shared/adminSideBar";
import AdminTitleBar from "@/components/shared/adminTopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#EAF4F1]">
      <div className="flex h-screen">
        <AdminSideNavbar />
        <div className="flex-1 flex flex-col">
          <AdminTitleBar pageTitle="Admin" />
          <div className="p-6">
            <h1 className="text-gray-700 text-xl font-bold">{children}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
