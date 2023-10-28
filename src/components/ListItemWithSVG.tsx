import { ReactNode } from "react";

interface ListItemWithSVGProps {
  header: string;
  text: string;
  children: ReactNode;
}

const ListItemWithSvg = ({ header, text, children }: ListItemWithSVGProps) => {
  return (
    <div className="flex">
      <div className="flex items-center font-sm">
        <div className="bg-indigo-600 p-1 rounded-md m-1">{children}</div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-semibold text-md">{header}</h3>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default ListItemWithSvg;
