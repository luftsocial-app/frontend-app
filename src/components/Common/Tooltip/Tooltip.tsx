import { FormLabel } from "@/components/ui/form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabOption {
  options: { label: string; value: string; icon?: React.ReactNode }[];
  onChange?: (value: string) => void;
}

export function Tooltip({ options, onChange }: TabOption) {
  return (
    <>
      <Tabs
        defaultValue={options[0]?.value}
        className=" shadow-none"
        onValueChange={onChange}
      >
        <TabsList className="grid w-full grid-cols-3 border-none bg-white">
          {options.map((option) => (
            <TabsTrigger
              key={option?.value}
              value={option?.value}
              className="flex items-center justify-center space-x-2"
            >
              {option?.icon}
              <span className="text-xs font-bold text-secondaryBlack2">
                {option?.label}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </>
  );
}
