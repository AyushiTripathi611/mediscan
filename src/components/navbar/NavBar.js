
const NavbarComponent = ({showLogin}) => {

  return (
      <nav className="bg-white flex p-10 items-center justify-between h-24 w-full border-b border-gray-300">
        <a href="/home" ><img src="/appicon.png" className="h-24 w-24" alt="icon"/></a>
        {!showLogin && <a href="/" type="button" className="text-white bg-[#003459] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Logout</a>}
      </nav>
    )

};

export default NavbarComponent;
