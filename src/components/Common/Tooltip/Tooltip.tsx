import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabOption {
  options: { label: string; value: string; icon?: React.ReactNode }[];
  onChange?: (value: string) => void;
  className?: string;
  tooltipStyles?: string;
}

export function Tooltip({
  options,
  onChange,
  className,
  tooltipStyles,
}: TabOption) {
  return (
    <div className={className}>
      <Tabs
        defaultValue={options[0]?.value}
        className=" shadow-none"
        onValueChange={onChange}
      >
        <TabsList
          className={`grid w-full grid-cols-2 bg-white border ${tooltipStyles}`}
        >
          {options.map((option) => (
            <TabsTrigger
              key={option.value}
              value={option.value}
              className="flex items-center justify-center space-x-[10px] data-[state=active]:border-b-[2px] data-[state=active]:border-[#0317C6] data-[state=active]:pb-[10px] rounded-none  
               data-[state=inactive]:border-b-[1px] data-[state=inactive]:border-gray-200 data-[state=inactive]:pb-[10px] mt-[15px]"
            >
              {option.icon}
              <span className="text-xs font-bold text-secondaryBlack2">
                {option.label}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
