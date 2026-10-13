import { Button } from "@/components/ui/button";
import { navigation } from "../../data/navigation";
import { Download } from "lucide-react";

export default function Nav() {
  return (
    <div className="flex justify-between px-4 py-4">
      <div>N</div>
      <div>
        {navigation.map((item, index) => {
          return <Button key={index}>{item.name}</Button>;
        })}
      </div>
      <Button>
        Cv <Download />
      </Button>
    </div>
  );
}
