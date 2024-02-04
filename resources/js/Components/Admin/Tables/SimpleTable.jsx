import { LinkIcon, PencilIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import {
    Card,
    IconButton,
    Tooltip,
    Typography,
} from "@material-tailwind/react";

function SimpleTable({ TABLE_HEAD, TABLE_ROWS, type }) {
    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head, index) => (
                            <th
                                key={index}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
                                <tr key={id}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {id}
                                        </Typography>
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
                                            href={route(`admin.${type}.edit`, [
                                                name,
                                            ])}
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
        </Card>
    );
}

export default SimpleTable;
