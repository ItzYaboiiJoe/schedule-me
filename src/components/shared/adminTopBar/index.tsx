import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminTitleBar = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <header className="w-full bg-primary h-20 flex items-center justify-between px-6 shadow-lg">
      <h1 className="text-black text-xl font-medium">{pageTitle}</h1>
      <Button size={"lg"} variant={"appointment"}>
        <CalendarDays size={18} className=" mr-2" /> New Appointment
      </Button>
    </header>
  );
};

export default AdminTitleBar;
