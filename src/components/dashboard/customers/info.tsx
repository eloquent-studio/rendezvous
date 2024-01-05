export default function Info() {
    return <div className="p-2 lg:p-4">
        <div className="mb-2 relative">
            <div className="text-gray-500 text-xs absolute p-2.5">CUSTOMER NOTES</div>
            <textarea id="message" rows={4} className="pt-7 block p-2.5 w-full text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
        <div className="mb-2 text-gray-500 p-2.5 border border-gray-300 rounded-lg bg-gray-50">
            <div className="text-gray-500 text-xs ">ADDRESS</div>
            <span className="">Balikesir ,Balikesir,Turkey ,</span>
        </div>
        <div className="mb-2 text-gray-500 p-2.5 border border-gray-300 rounded-lg bg-gray-50">
            <div className="text-gray-500 text-xs ">MOBILE</div>
            <span className="">-</span>
        </div>
        <div className="mb-2 text-gray-500 p-2.5 border border-gray-300 rounded-lg bg-gray-50">
            <div className="text-gray-500 text-xs ">TIME ZONE</div>
            <span className="">-</span>
        </div>
    </div>
}