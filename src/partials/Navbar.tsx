import { JSX } from "react";
export default function Navbar(): JSX.Element {
    return (
        <header className="flex w-full flex-wrap bg-white py-4 text-sm sm:flex-nowrap sm:justify-start dark:bg-neutral-800">
            <nav
                className="mx-auto flex w-full max-w-[85rem] basis-full flex-wrap items-center justify-between px-4"
                aria-label="Global"
            >
                <a className="flex-none text-xl font-semibold sm:order-1 dark:text-white" href="#">
                    Brand
                </a>
                <div className="flex items-center gap-x-2 sm:order-3">
                    <button
                        type="button"
                        className="hs-collapse-toggle inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2.5 text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 sm:hidden dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
                        data-hs-collapse="#navbar-alignment"
                        aria-controls="navbar-alignment"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            className="size-4 flex-shrink-0 hs-collapse-open:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                        </svg>
                        <svg
                            className="hidden size-4 flex-shrink-0 hs-collapse-open:block"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                    >
                        Button
                    </button>
                </div>
                <div
                    id="navbar-alignment"
                    className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:order-2 sm:block sm:grow-0 sm:basis-auto"
                >
                    <div className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:ps-5">
                        <a className="font-medium text-blue-500" href="#" aria-current="page">
                            Landing
                        </a>
                        <a
                            className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                            href="#"
                        >
                            Account
                        </a>
                        <a
                            className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                            href="#"
                        >
                            Work
                        </a>
                        <a
                            className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
                            href="#"
                        >
                            Blog
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
