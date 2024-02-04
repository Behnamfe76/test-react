import { Link } from "@inertiajs/react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function Banned() {
    return (
        <div className="bg-gray-400 items-center flex justify-center h-screen">
            <Card className="mt-6 w-96">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Pending
                    </Typography>
                    <Typography>
                        So far so good.
                        <br />
                        Now you're registered and your email is verified. But
                        your account need's to be approved, be patient.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 flex gap-2">
                    <Link href={route("home")}>
                        <Button>Home</Button>
                    </Link>
                    <Link href={route("logout")} method="post">
                        <Button>Logout</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
