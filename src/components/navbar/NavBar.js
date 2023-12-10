
const NavbarComponent = ({showLogin}) => {

  const handleLogout = () => {
    showLogin(false)
  }

  return (
      <nav className="bg-white flex p-10 items-center justify-between h-24 w-full border-b border-gray-300">
        <img src="/appicon.png" className="h-24 w-24" alt="icon"/>
        {showLogin ? <button type="button" className="text-white bg-[#003459] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 " onClick={handleLogout}>Login</button> : <a href="/" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</a>}
      </nav>
    )

};

export default NavbarComponent;
