import { Input } from "@/components/ui/input";

interface InputProps {
  type: string;
  placeholder?: string;
}

export function InputField({ type, placeholder }: InputProps) {
  return <Input type={type} placeholder={placeholder} />;
}
