export function InputField() {
  return (
    <div className="relative w-full">
      <input
        type="email"
        id="email"
        className="w-full px-4 py-3 text-[#1E31D7] bg-white border-[1px] border-black rounded-lg focus:outline-none focus:border-[#1E31D7] peer placeholder-gray-500"
        placeholder=" "
      />
      <label
        htmlFor="email"
        className="absolute text-xs text-gray-500 font-normal duration-300 transform 
          -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 
          peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
          peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 
          peer-focus:scale-75 peer-focus:text-[#1E31D7] left-1"
      >
        Email Address
      </label>
    </div>
  );
}
