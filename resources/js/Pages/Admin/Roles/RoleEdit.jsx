import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Header from "@/Components/Admin/Header/Header";
import { useState } from "react";
import { router, useForm, usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
function RoleEdit({ auth, role }) {
    const { errors } = usePage().props;
    const { processing } = useForm();
    const [values, setValues] = useState({
        role_name: role.name,
        role_guard_name: role.guard_name,
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
        router.put(`/admin/roles/${role.name}`, values);
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <Header />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="text-xl">Edit Role</div>
                            <form onSubmit={handleSubmit}>
                                <div className="w-1/2 mx-auto">
                                    <label
                                        htmlFor="role_name"
                                        className="block text-sm font-medium mb-2 dark:text-white"
                                    >
                                        role Name
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="role_name"
                                        defaultValue={role.name}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 focus:shadow-blue-gray-600 focus:shadow-lg dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600

                                        focus:border-0
                                        focus:outline-0
                                        focus:ring-0
                                        "
                                    />
                                    {errors.role_name && (
                                        <div className="text-sm text-red-600 mt-2">
                                            {errors.role_name}
                                        </div>
                                    )}

                                    <label
                                        htmlFor="guard_name"
                                        className="block text-sm font-medium mt-4 mb-2 dark:text-white"
                                    >
                                        Guard Name
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="guard_name"
                                        defaultValue={role.guard_name}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 focus:shadow-blue-gray-600 focus:shadow-lg dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600

                                        focus:border-0
                                        focus:outline-0
                                        focus:ring-0
                                        "
                                    />
                                    {errors.guard_name && (
                                        <div className="text-sm text-red-600 mt-2">
                                            {errors.guard_name}
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="py-3 w-full justify-center my-4 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </AuthenticatedLayout>
    );
}

export default RoleEdit;
