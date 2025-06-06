export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#EAF4F1]">
      <div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
