import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Header from "@/Components/Admin/Header/Header";
import RolePermissionTable from "@/Components/Admin/Tables/RolePermissionTable";
import Modal from "@/Components/Admin/Modals/Modal";
import SimpleTable from "@/Components/Admin/Tables/SimpleTable";
import { Avatar, Chip } from "@material-tailwind/react";
import { Link } from "@inertiajs/react";
function UserView({ auth, user, permissions }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Header />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div
                                className="grid gap-4"
                                style={{ gridTemplateColumns: "2fr 1fr 1fr" }}
                            >
                                <div className="my-4 flex flex-col gap-y-4">
                                    User Profile
                                    <div>
                                        {user.avatar !== null ? (
                                            <Avatar
                                                src={user.avatar}
                                                alt={user.name}
                                                size="lg"
                                            />
                                        ) : (
                                            <i className="fa-solid fa-user text-5xl"></i>
                                        )}
                                    </div>
                                    <div>
                                        <ul>
                                            <li>id : {user.id}</li>
                                            <li>name : {user.name}</li>
                                            <li>email : {user.email}</li>
                                            <li>
                                                email Verification :{" "}
                                                {user.email_verified_at ==
                                                null ? (
                                                    <div className="w-max inline-block mx-2">
                                                        <Chip
                                                            variant="ghost"
                                                            size="sm"
                                                            value={
                                                                "Not Verified"
                                                            }
                                                            color={"red"}
                                                        />
                                                    </div>
                                                ) : (
                                                    user.email_verified_at
                                                )}
                                            </li>
                                            <li>
                                                Status :
                                                {user.status == 1 ? (
                                                    <div className="w-max inline-block mx-2">
                                                        <Chip
                                                            variant="ghost"
                                                            size="sm"
                                                            value={"pending"}
                                                            color={"orange"}
                                                        />
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                                {user.status == 2 ? (
                                                    <div className="w-max inline-block mx-2">
                                                        <Chip
                                                            variant="ghost"
                                                            size="sm"
                                                            value={"active"}
                                                            color={"green"}
                                                        />
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                                {user.status == 3 ? (
                                                    <div className="w-max inline-block mx-2">
                                                        <Chip
                                                            variant="ghost"
                                                            size="sm"
                                                            value={"banned"}
                                                            color={"red"}
                                                        />
                                                    </div>
                                                ) : (
                                                    ""
                                                )}
                                            </li>
                                            <li>
                                                Enrolled : {user.created_at}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="my-4 flex flex-col gap-y-4">
                                    <div>User Roles</div>
                                    {user.roles.length > 0
                                        ? user.roles.map((role, index) => (
                                              <span key={index}>
                                                  <div className="w-max mr-2">
                                                      <div
                                                          data-dismissible="chip"
                                                          class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold uppercase text-white"
                                                      >
                                                          <span class="mr-5">
                                                              {role.name}
                                                          </span>
                                                          <Link
                                                              href={route(
                                                                  "admin.role.assignment.remove",
                                                                  {
                                                                      user_id:
                                                                          user.id,
                                                                      user_role:
                                                                          role.name,
                                                                  }
                                                              )}
                                                              method="post"
                                                          >
                                                              <button
                                                                  data-dismissible-target="chip"
                                                                  class="!absolute  top-2/4 right-1 mx-px h-5 max-h-[32px] w-5 max-w-[32px] -translate-y-2/4 select-none rounded-md text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                                  type="button"
                                                              >
                                                                  <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                                                      <svg
                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                          fill="none"
                                                                          viewBox="0 0 24 24"
                                                                          stroke="currentColor"
                                                                          class="w-4 h-4"
                                                                          strokeWidth="2"
                                                                      >
                                                                          <path
                                                                              stroke-linecap="round"
                                                                              stroke-linejoin="round"
                                                                              d="M6 18L18 6M6 6l12 12"
                                                                          ></path>
                                                                      </svg>
                                                                  </span>
                                                              </button>
                                                          </Link>
                                                      </div>
                                                  </div>
                                              </span>
                                          ))
                                        : "User has no roles"}
                                </div>
                                <div className="my-4">
                                    <div>User Permission</div>
                                    <div className="flex flex-wrap gap-2">
                                        {permissions.length > 0
                                            ? permissions.map(
                                                  (permission, index) => (
                                                      <span key={index}>
                                                          <div className="w-max">
                                                              <Chip
                                                                  variant="ghost"
                                                                  size="sm"
                                                                  value={
                                                                      permission.name
                                                                  }
                                                                  color={"teal"}
                                                              />
                                                          </div>
                                                      </span>
                                                  )
                                              )
                                            : "User has no roles"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default UserView;
