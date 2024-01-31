
function NavBar() {
    return (
        <>
            <div className="lg:px-16 mx-auto container px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-white md:text-xl  text-lg font-medium uppercase">
                        Boostlancer
                    </div>
                    <div className="flex items-center space-x-4 text-xs">
                        <button className="border border-boostlancer-light-grey text-white uppercase rounded-full px-4 py-2 font-light">
                            Login
                        </button>
                        <button className="bg-boostlancer-light-grey text-white uppercase border border-green-500 rounded-full px-4 py-2 font-light">
                            Get early access
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NavBar;