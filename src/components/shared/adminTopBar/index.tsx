import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppointmentForm from "./appointmentForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AdminTitleBar = ({ pageTitle }: { pageTitle: string }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => setIsDialogOpen(false);

  return (
    <header className="w-full bg-primary h-20 flex items-center justify-between px-6 shadow-lg">
      <h1 className="text-black text-xl font-medium">{pageTitle}</h1>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button size={"lg"} variant={"appointment"}>
            <CalendarDays size={18} className=" mr-2" /> New Appointment
          </Button>
        </DialogTrigger>
        <DialogContent
          className="bg-white p-6 rounded shadow-lg"
          aria-describedby={undefined}
        >
          <DialogHeader>
            <DialogTitle className="text-xl mb-4 text-iconColor">
              Create a New Appointment
            </DialogTitle>
          </DialogHeader>
          <AppointmentForm closeDialog={closeDialog} />
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default AdminTitleBar;
