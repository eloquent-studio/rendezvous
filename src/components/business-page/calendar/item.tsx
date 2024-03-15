export default function CalendarItem({ day, disabled = false }: { day: number, disabled?: boolean }) {
    const dayView = day < 10 ? "0" + day : day

    if (disabled) {
        return <div>
            <div className="flex items-start justify-start w-32 md:w-36 p-2 h-32 flex-col relative border border-gray-200">
                <p className="opacity-50 text-sm font-medium text-gray-800">
                    {dayView}
                </p>
            </div>
        </div>
    }

    return <button className="bg-green-400">
        <div
            className="flex items-start justify-start w-32 md:w-36 p-2 h-32 flex-col relative border border-gray-200"
            data-id={day}
        >
            <p className="text-sm font-medium text-gray-800">{dayView}</p>

            <div className="">
            </div>
        </div>
    </button>
}