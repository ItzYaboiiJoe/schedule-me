const AdminTitleBar = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <header className="w-full bg-primary h-20 flex items-center justify-between px-6 shadow-lg">
      <h1 className="text-black text-xl font-medium">{pageTitle}</h1>
    </header>
  );
};

export default AdminTitleBar;
