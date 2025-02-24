import { Search } from "lucide-react";
import SidePanel from "./SidePanel";
import { Dropdown } from "./Dropdown";
import { SearchInput } from "./SearchBar";
import Image from "next/image";
import { Attachement } from "./Attachement";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex min-h-screen">
        <SidePanel />
        <form onSubmit={() => {}} className="flex-grow">
          <div className="flex items-center justify-center gap-5 mb-[5px]">
            <Dropdown
              label="Post Type"
              placeholder="Choose an option"
              // value={selectedOption}
              // onChange={(e) => setSelectedOption(e.target.value)}
              options={[
                { label: "Option 1", value: "option1" },
                { label: "Option 2", value: "option2" },
                { label: "Option 3", value: "option3" },
              ]}
              icon={"/images/dashboard/dropdown-up.png"}
            />
            <SearchInput
              label="Post Title"
              placeholder="APT Dance"
              icon={"/images/dashboard/searchIcon.png"}
            />
          </div>
          <div className="flex items-center justify-center gap-5 mb-[5px]">
            <SearchInput
              label="Location"
              placeholder="APT Dance"
              icon={"/images/dashboard/searchIcon.png"}
            />
            <SearchInput
              label="Collaborate"
              placeholder="APT Dance"
              icon={"/images/dashboard/searchIcon.png"}
            />
          </div>
        <Attachement label={'Select From Library'} icon={"/images/dashboard/gallery.png"}/>

          {/* <Dropdown
            label="Collaborate"
            placeholder="Choose an option"
            // value={selectedOption}
            // onChange={(e) => setSelectedOption(e.target.value)}
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
            ]}
            icon={"/images/dashboard/dropdown-up.png"}
          /> */}
        </form>
        {/* <main className="flex-1 p-8">{children}</main> */}
      </div>
      {/* <div className="text-black bg-red-200">
          <p className="text-sm font-semiBold py-[4px] px-[2px]">Post Type</p>
          <input
            type="text"
            id="name"
            placeholder="Reel"
            className="w-full max-w-[23.563rem] px-[0.875rem] py-[0.75rem] border border-gray-300 rounded-lg text-sm md:text-base  text-gray-900 placeholder:text-base placeholder-gray-500 placeholder-opacity-75 focus:outline-none"
          />
        </div> */}
    </div>
  );
}
