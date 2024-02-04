import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Header from "@/Components/Admin/Header/Header";
function Index({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Header />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Do something
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
