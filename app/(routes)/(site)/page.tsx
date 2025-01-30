import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import ImageVawes from "@/components/ImageWaves";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-600">
      <Button variant="destructive" size="icon">ABC</Button>

      <ModeToggle />

      <ImageWaves />
    </div>
  );
}
