import CreateServiceCard from "@/components/shared/serviceCard/createCardForm";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#EAF4F1]">
      <div>
        <div className="p-6">
          <CreateServiceCard />
          {children}
        </div>
      </div>
    </div>
  );
}
