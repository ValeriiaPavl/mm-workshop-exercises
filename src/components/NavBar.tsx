import Link from "next/link";

const navigation = [
  { name: "Product", current: false, href: "#" },
  { name: "Features", current: false, href: "#" },
  { name: "Pricing", current: false, href: "#" },
  { name: "Company", current: false, href: "#" },
  { name: "Blog", current: false, href: "#" },
];

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-center">
      <div className="flex flex-row justify-between p-8  items-center h-12 w-10/12">
        <div className="flex flex-row justify-start gap-2 text-indigo-600">
          <img
            className="h-6 w-auto"
            src="https://nextly.web3templates.com/img/logo.svg"
          />
          <p>Nextly</p>
        </div>
        <div className="flex flex-row justify-between gap-3 ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex justify-between text-sm hover:text-indigo-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-row justify-between space-x-4 text-sm items-center">
          <button className="bg-indigo-600 rounded-md py-1 px-4 text-white">
            Get Started
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="20"
            height="20"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
