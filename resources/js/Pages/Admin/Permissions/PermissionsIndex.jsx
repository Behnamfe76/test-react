import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Header from "@/Components/Admin/Header/Header";
import { Input } from "@material-tailwind/react";
import RolePermissionTable from "@/Components/Admin/Tables/RolePermissionTable";
function PermissionsIndex({ auth, permissions }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Header />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <RolePermissionTable
                                type={"permission"}
                                TABLE_HEAD={[
                                    "id",
                                    "name",
                                    "guarded name",
                                    "date created",
                                    "Actions",
                                ]}
                                TABLE_ROWS={permissions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default PermissionsIndex;
