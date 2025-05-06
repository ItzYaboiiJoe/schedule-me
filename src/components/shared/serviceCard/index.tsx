import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ServiceCard = () => {
  return (
    <Card className="max-w-sm bg-hoverShade rounded-lg shadow-xl hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="mb-2 text-xl font-bold tracking-tight text-iconColor">
          Test
          <Button
            className="float-right text-iconColor"
            variant="cardEdit"
            size="icon"
          >
            <X />
          </Button>
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
        <Button size={"sm"} variant={"cardEdit"} className="text-base">
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
