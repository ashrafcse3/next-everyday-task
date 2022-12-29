import { Navbar } from "flowbite-react";
import { useTheme } from "next-themes";
import { RectangleStackIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Toaster } from "react-hot-toast";

const Nav1 = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;
    const renderThemeChanger = () => {

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className="h-5 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
            )
        }

        else {
            return (
                <MoonIcon className="h-5 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
            )
        }
    };

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('sign out successful');
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="mx-auto max-w-[1200px]">
            <Navbar
                fluid={true}
                rounded={true}
            >
                {/* <Navbar.Brand >
                        <RectangleStackIcon className="mr-3 h-6 sm:h-9 text-black dark:text-white" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black">
                            Everyday task
                        </span>
                    </Navbar.Brand> */}
                <Link href="/mytasks" className="flex items-center">
                    <RectangleStackIcon className="mr-3 h-6 sm:h-9 text-black dark:text-white" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black">
                        Everyday task
                    </span>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="flex justify-center items-center">
                    {
                        user?.uid ?
                            <Link href="/addtask">
                                {/* <Navbar.Link
                            active={true}
                        >

                        </Navbar.Link> */}
                                <span className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Add task</span>

                            </Link>
                            : ''
                    }
                    <Link href="/mytasks">
                        <span className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">My tasks</span>
                    </Link>
                    <Link href="/completedtasks">
                        <span className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Completed tasks</span>
                    </Link>
                    <span className="lg:block md:block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white hidden">|</span>
                    {
                        !(user?.uid) ?
                            <>
                                <Link href="/login">
                                    <span className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Login</span>
                                </Link>
                                <Link href="/register">
                                    <span className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Register</span>
                                </Link>
                            </>
                            :
                            <span onClick={handleLogOut} className="cursor-pointer block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Log out</span>
                    }
                    {renderThemeChanger()}
                </Navbar.Collapse>
            </Navbar>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Nav1;