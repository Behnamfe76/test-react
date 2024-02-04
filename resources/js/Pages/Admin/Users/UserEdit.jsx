import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Header from "@/Components/Admin/Header/Header";
import { useEffect, useState } from "react";
import { router, useForm, usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import { Select, Option } from "@material-tailwind/react";
function UserEdit({ auth, user }) {
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [submitPermission, setSubmitPermission] = useState(false);
    const { errors } = usePage().props;
    const [values, setValues] = useState({
        id: user.id,
        name: user.name,
        email: user.email,
        status: user.status,
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        router.put(`/admin/users/${user.name}`, values);
    }
    useEffect(() => {
        if (selectedStatus !== null) {
            setSubmitPermission(true);
        }
        setValues((values) => ({
            ...values,
            status: selectedStatus,
        }));
    }, [selectedStatus]);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Header />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="text-xl mb-4">Edit User</div>
                            <form onSubmit={handleSubmit}>
                                <div className="flex gap-4">
                                    {/* name */}
                                    <div className="w-full">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium mb-2 dark:text-white"
                                        >
                                            Name
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            id="name"
                                            defaultValue={user.name}
                                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 focus:shadow-blue-gray-600 focus:shadow-lg dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600

                                        focus:border-0
                                        focus:outline-0
                                        focus:ring-0
                                        "
                                        />
                                        {errors.name && (
                                            <div className="text-sm text-red-600 mt-2">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>
                                    {/* email */}
                                    <div className="w-full">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium mb-2 dark:text-white"
                                        >
                                            Email
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="email"
                                            id="email"
                                            defaultValue={user.email}
                                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 focus:shadow-blue-gray-600 focus:shadow-lg dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600

                                        focus:border-0
                                        focus:outline-0
                                        focus:ring-0
                                        "
                                        />
                                        {errors.email && (
                                            <div className="text-sm text-red-600 mt-2">
                                                {user.email}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="w-72 my-4">
                                    <Select
                                        onChange={(e) => setSelectedStatus(e)}
                                        label="Select Version"
                                    >
                                        <Option value={1}>pending</Option>
                                        <Option value={2}>active</Option>
                                        <Option value={3}>banned</Option>
                                    </Select>
                                </div>
                                <button
                                    type="submit"
                                    disabled={!submitPermission}
                                    className="py-3 justify-center my-4 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </AuthenticatedLayout>
    );
}

export default UserEdit;
