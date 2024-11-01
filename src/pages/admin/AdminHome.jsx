import AdminLayout from "../../layout/AdminLayout"


const AdminHome = () => {
    return (
        <AdminLayout>
            <div className="admin-home p-4">
                <h1 className="text-2xl font-bold mb-4 text-black">Admin Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 shadow rounded">
                        <h2 className="text-xl font-semibold text-black">Statistics</h2>
                        <p className="text-black">Overview of the system&apos;s key metrics.</p>
                    </div>

                    <div className="bg-white p-4 shadow rounded">
                        <h2 className="text-xl font-semibold text-black">User Management</h2>
                        <p className="text-black">Manage users, permissions, and roles.</p>
                    </div>

                    <div className="bg-white p-4 shadow rounded">
                        <h2 className="text-xl font-semibold text-black">Recent Activity</h2>
                        <p className="text-black">Track recent system actions and events.</p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminHome