"use client";

import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditServiceCard from "@/components/shared/serviceCard/editCardForm";
import { useState } from "react";

const CreateServiceCard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => setIsDialogOpen(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Plus className="text-primary float-right cursor-pointer w-6 h-6" />
      </DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="text-xl mb-4 text-iconColor">
            Create a New Service Card
          </DialogTitle>
        </DialogHeader>
        <EditServiceCard closeDialog={closeDialog} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateServiceCard;
