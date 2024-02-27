function Test() {
    return (
        <div className="h-screen">
            <input
                type="checkbox"
                id="hs-basic-usage"
                className="relative h-7 w-[3.25rem] cursor-pointer rounded-full border-transparent bg-gray-100 p-px text-transparent transition-colors duration-200 ease-in-out before:inline-block before:size-6 before:translate-x-0 before:transform before:rounded-full before:bg-white before:shadow before:ring-0 before:transition before:duration-200 before:ease-in-out checked:border-blue-600 checked:bg-none checked:text-blue-600 checked:before:translate-x-full checked:before:bg-blue-200 focus:ring-blue-600 focus:checked:border-blue-600 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:before:bg-neutral-400 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:checked:before:bg-blue-200 dark:focus:ring-offset-gray-600"
            />
            <label htmlFor="hs-basic-usage" className="sr-only">
                switch
            </label>
        </div>
    );
}

export default Test;
