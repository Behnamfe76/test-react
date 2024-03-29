import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import { NoSymbolIcon } from "@heroicons/react/24/outline";

const profileMenuItems = [
    {
        label: "Roles",
        icon: UserCircleIcon,
        src: "admin.role.index",
    },
    {
        label: "Permission",
        icon: NoSymbolIcon,
        src: "admin.permission.index",
    },
];
function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link
                    href={route("admin.users.index")}
                    className="flex items-center"
                >
                    Users
                </Link>
            </Typography>
        </ul>
    );

    return (
        <div className="max-h-[768px] w-[calc(100%+48px)] overflow-auto">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center container mx-auto justify-around text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Admin panel
                    </Typography>

                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>

                        <Menu
                            open={isMenuOpen}
                            handler={setIsMenuOpen}
                            placement="bottom-end"
                        >
                            <MenuHandler>
                                <Button
                                    variant="text"
                                    color="blue-gray"
                                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                                >
                                    <i className="fa-solid fa-gear text-sm"></i>
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`h-3 w-3 transition-transform ${
                                            isMenuOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </Button>
                            </MenuHandler>

                            <MenuList className="p-1">
                                {profileMenuItems.map(
                                    ({ label, icon, src }, key) => {
                                        const isLastItem =
                                            key === profileMenuItems.length - 1;
                                        return (
                                            <MenuItem
                                                key={label}
                                                onClick={closeMenu}
                                                className={`flex items-center gap-2 rounded `}
                                            >
                                                {React.createElement(icon, {
                                                    className: `h-4 w-4`,
                                                    strokeWidth: 2,
                                                })}
                                                <Link href={route(src)}>
                                                    <Typography
                                                        as="span"
                                                        variant="small"
                                                        className="font-normal"
                                                        color={"inherit"}
                                                    >
                                                        {label}
                                                    </Typography>
                                                </Link>
                                            </MenuItem>
                                        );
                                    }
                                )}
                            </MenuList>
                        </Menu>

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>{navList}</Collapse>
            </Navbar>
        </div>
    );
}

export default React.memo(Header);
