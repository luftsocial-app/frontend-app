import { Label } from "@/components/ui/label";

export function InputLabel() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  );
}
