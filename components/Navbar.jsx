import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Zakat Calculator</h1>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
