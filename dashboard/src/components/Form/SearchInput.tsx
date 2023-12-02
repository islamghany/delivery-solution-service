import clsx from "clsx";

const SearchIcon: React.FC<{ className?: string }> = ({
  className = "w-6 h-6",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
}

export function SearchInput({
  name,
  className,
  register,
  ...rest
}: InputProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center ">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        id={name}
        type="text"
        {...rest}
        ref={register}
        className={clsx(
          "appearance-none w-full block pl-10 py-2 px-3 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-blue-500  focus:border-blue-500 sm:text-sm",
          className
        )}
      />
    </div>
  );
}
