import Image from "next/image";

export function Attachment({ label, icon }: any) {
  return (
    <button className="flex items-center">
      <div className="max-w-[9.438rem] rounded-[10px] border border-[#EDEDED] flex px-[0.563rem] py-[0.25rem]">
        <Image src={icon} alt="Search Icon" width={20} height={20} />
        <p className="text-xs  font-medium text-[#6D6D6D]  flex items-center">
          {label}
        </p>
      </div>
    </button>
  );
}
