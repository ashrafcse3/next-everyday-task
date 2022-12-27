import { Navbar } from "flowbite-react";
import { useTheme } from "next-themes";
import { RectangleStackIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav1 = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className="h-6 sm:h-9 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
            )
        }

        else {
            return (
                <MoonIcon className="h-6 sm:h-9 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
            )
        }
    };

    return (
        <div className="mx-auto max-w-[1200px]">
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand >
                    <RectangleStackIcon className="mr-3 h-6 sm:h-9 text-black dark:text-white" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black">
                        Everyday task
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="flex justify-center items-center">
                    <Link href="/addtask">
                        <Navbar.Link
                            active={true}
                        >
                            Add task
                        </Navbar.Link>
                    </Link>
                    <Link href="/mytasks">
                        <Navbar.Link>
                            My tasks
                        </Navbar.Link>
                    </Link>
                    <Link href="/completedtasks">
                        <Navbar.Link>
                            Completed tasks
                        </Navbar.Link>
                    </Link>
                    {renderThemeChanger()}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Nav1;