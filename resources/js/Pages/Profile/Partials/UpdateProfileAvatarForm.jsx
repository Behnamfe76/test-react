import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useEffect } from "react";

export default function UpdateProfileAvatarForm({ className = "" }) {
    const user = usePage().props.auth.user;

    const { data, setData, post, progress } = useForm({
        avatar: null,
    });

    const submit = (e) => {
        e.preventDefault();
        if (data.avatar !== null) {
            post(route("profile.update.avatar"), data);
        }
    };

    function renderImage() {
        const render = document.getElementById("profile-image");
        const file = document.querySelector("input[type=file]").files[0];
        const reader = new FileReader();

        reader.addEventListener(
            "load",
            () => {
                render.src = reader.result;
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    useEffect(() => {
        console.log(data.avatar);
        renderImage();
    }, [data]);
    return (
        <div className="grid grid-cols-2">
            <section className={className}>
                <header className="mb-4">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Profile Avatar
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Update your account's profile avatar.
                    </p>
                </header>

                <form onSubmit={submit}>
                    <label htmlFor="file-input" className="sr-only">
                        Choose file
                    </label>
                    <input
                        type="file"
                        name="file-input"
                        onChange={(e) => setData("avatar", e.target.files[0])}
                        id="file-input"
                        className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
                    file:bg-gray-50 file:border-0
                    file:me-4
                    file:py-3 file:px-4
                    dark:file:bg-gray-700 dark:file:text-gray-400
                        "
                    />
                    {progress && (
                        <progress value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    )}
                    <button
                        type="submit"
                        className="py-3 px-4 mt-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                        Submit
                    </button>
                </form>
            </section>
            <div className="flex justify-center">
                <img
                    className="h-[15rem] rounded-md"
                    id="profile-image"
                    src=""
                    alt=""
                />
            </div>
        </div>
    );
}
