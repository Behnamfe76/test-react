import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Header from "@/Components/Admin/Header/Header";
import RolePermissionTable from "@/Components/Admin/Tables/RolePermissionTable";
import Modal from "@/Components/Admin/Modals/Modal";
import SimpleTable from "@/Components/Admin/Tables/SimpleTable";
function RoleView({ auth, role }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Header />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <SimpleTable
                                TABLE_HEAD={[
                                    "Id",
                                    "Name",
                                    "Guarded name",
                                    "Created date",
                                    "Actions",
                                ]}
                                TABLE_ROWS={[role]}
                                type={"role"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default RoleView;
