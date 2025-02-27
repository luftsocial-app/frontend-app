import { Label } from "@/components/ui/label";


interface LabelProps {
  label: string;
  classname?: string;
}

export function InputLabel({ label,classname }:LabelProps) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="terms" className={classname}>{label}</Label>
      </div>
    </div>
  );
}