import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Header from "@/Components/Admin/Header/Header";
import { Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
function PermissionAssign({ auth, permission, roles }) {
    const { data, setData, post, processing, errors } = useForm({
        permission: undefined,
        role: undefined,
    });
    const [selectedRole, setSelectedRole] = useState(null);

    function submitData(e) {
        post("/admin/assignment/permission");
        e.preventDefault();
    }

    useEffect(() => {
        if (selectedRole !== null) {
            setData({
                permission: permission,
                role: selectedRole,
            });
        }
    }, [selectedRole]);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Header />
            <div className="py-12">
                <div className="max-w-7xl  mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white  dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 h-[24rem] overflow-y-auto dark:text-gray-100">
                            Permission : {`'${permission}'`}
                            <form className="my-4" onSubmit={submitData}>
                                <div className="w-72">
                                    <Select
                                        onChange={(e) => setSelectedRole(e)}
                                        label="Select Role"
                                    >
                                        {roles.map((role, index) => (
                                            <Option
                                                key={index}
                                                value={role.name}
                                            >
                                                {role.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </div>
                                <button
                                    type="submit"
                                    disabled={
                                        processing || selectedRole === null
                                            ? true
                                            : false
                                    }
                                    className="py-3 px-4 mt-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    Assign Permission
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default PermissionAssign;
