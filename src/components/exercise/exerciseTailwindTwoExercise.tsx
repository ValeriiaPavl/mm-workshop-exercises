import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function ExerciseTailwindTwoExercise() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-row items-center">
            <div className="ml-2 mr-6">
              <img
                className="h-6 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-row justify-around gap-5 text-xs">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className=" text-slate-200 hover:bg-gray-700 px-3 py-2 hover:text-white rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <img
                className=" relative rounded-full"
                height={32}
                width={32}
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile Picture"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
