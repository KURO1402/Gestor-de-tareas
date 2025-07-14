const Dropdown = ({onClick}) => {
    return ( 
        <>
            <div className="absolute right-0 mt-2 w-48 bg-indigo-900/90 backdrop-blur-lg border border-indigo-500/30 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <button 
                onClick={onClick}
                className="w-full text-left px-4 py-3 text-sm text-indigo-200 hover:bg-indigo-800/50 flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span>Cerrar sesión</span>
              </button>
            </div>
        </>
     );
}
 
export default Dropdown;