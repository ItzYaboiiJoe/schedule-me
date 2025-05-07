import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#EAF4F1]">
      <div>
        <div className="p-6">
          <Dialog>
            <DialogTrigger asChild>
              <Plus className="text-primary float-right cursor-pointer w-6 h-6" />
            </DialogTrigger>
            <DialogContent aria-describedby={undefined}>
              <DialogHeader>
                <DialogTitle className="text-xl mb-4 text-iconColor">
                  Create a New Service Card
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          {children}
        </div>
      </div>
    </div>
  );
}
