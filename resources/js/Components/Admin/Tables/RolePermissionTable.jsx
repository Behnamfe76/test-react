import { PencilIcon, EyeIcon, LinkIcon } from "@heroicons/react/24/solid";
import {
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
    PlusIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";
import { Link } from "@inertiajs/react";

export default function RolePermissionTable({ TABLE_HEAD, TABLE_ROWS, type }) {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            {type[0].toUpperCase() + type.slice(1)}s List
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            These are details about the{" "}
                            {type[0].toUpperCase() + type.slice(1)}s
                        </Typography>
                    </div>
                    <Link href={route(`admin.${type}.create`)}>
                        <div className="flex w-full shrink-0 gap-2 md:w-max">
                            <div className="w-full md:w-72">
                                <Input
                                    label="Search"
                                    icon={
                                        <MagnifyingGlassIcon className="h-5 w-5" />
                                    }
                                />
                            </div>
                            <Button
                                className="flex items-center gap-3"
                                size="sm"
                            >
                                <PlusIcon strokeWidth={2} className="h-4 w-4" />{" "}
                                Create New {type}
                            </Button>
                        </div>
                    </Link>
                </div>
            </CardHeader>
            <CardBody className="overflow-auto px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ id, name, guard_name, created_at }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold"
                                                >
                                                    {id}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {guard_name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {created_at}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Link
                                                href={route(
                                                    `admin.${type}.edit`,
                                                    [name]
                                                )}
                                            >
                                                <Tooltip
                                                    content={
                                                        "Edit " +
                                                        type[0].toUpperCase() +
                                                        type.slice(1)
                                                    }
                                                >
                                                    <IconButton variant="text">
                                                        <PencilIcon className="h-4 w-4" />
                                                    </IconButton>
                                                </Tooltip>
                                            </Link>
                                            <Link
                                                href={route(
                                                    `admin.${type}.show`,
                                                    [name]
                                                )}
                                            >
                                                <Tooltip
                                                    content={
                                                        "View " +
                                                        type[0].toUpperCase() +
                                                        type.slice(1)
                                                    }
                                                >
                                                    <IconButton variant="text">
                                                        <EyeIcon className="h-4 w-4" />
                                                    </IconButton>
                                                </Tooltip>
                                            </Link>
                                            <Link
                                                href={route(
                                                    `admin.${type}.assignment.create`,
                                                    [name]
                                                )}
                                            >
                                                <Tooltip
                                                    content={
                                                        "Assign A " +
                                                        type[0].toUpperCase() +
                                                        type.slice(1)
                                                    }
                                                >
                                                    <IconButton variant="text">
                                                        <LinkIcon className="h-4 w-4" />
                                                    </IconButton>
                                                </Tooltip>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}
