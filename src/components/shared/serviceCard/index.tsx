"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DeleteConfirmation from "./deleteAlert";
import EditServiceCard from "./editCardForm";
import { useState } from "react";

const ServiceCard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => setIsDialogOpen(false);
  return (
    <Card className="max-w-sm bg-hoverShade rounded-lg shadow-xl hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="mb-2 text-xl font-bold tracking-tight text-iconColor">
          Test
          <div className="float-right">
            <DeleteConfirmation />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <p className="cardsHeadersStyle">Price:</p>
          <p className="cardsInfoStyle">$30</p>
        </div>
        <div className="flex justify-between">
          <p className="cardsHeadersStyle">Duration:</p>
          <p className="cardsInfoStyle">30 mins</p>
        </div>
        <div className="flex justify-between">
          <p className="cardsHeadersStyle">Category:</p>
          <p className="cardsInfoStyle">Haircut</p>
        </div>
        <div className="flex justify-between">
          <p className="cardsHeadersStyle">Description:</p>
          <p className="cardsInfoStyle">Test</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size={"sm"} variant={"cardEdit"} className="text-base">
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent
            className="bg-white p-6 rounded shadow-lg"
            aria-describedby={undefined}
          >
            <DialogHeader>
              <DialogTitle className="text-xl mb-4 text-iconColor">
                Edit Appointment
              </DialogTitle>
            </DialogHeader>
            <EditServiceCard closeDialog={closeDialog} />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
