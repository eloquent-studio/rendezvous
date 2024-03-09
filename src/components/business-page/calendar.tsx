export default function Calendar({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) {
    return <div className="w-full h-full bg-white overflow-y-auto overflow-x-auto flex flex-row relative no-scrollbar">
        <div className="bg-white md:p-2 w-full no-scrollbar">
            <p className="text-4xl font-bold text-gray-800 mb-8">March 2021</p>
            <div className="inline-flex flex-col items-start justify-start h-full w-full">
                <div className="flex overflow-x-auto items-start justify-start h-6">
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">M</p>
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">T</p>
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">W</p>
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">T</p>
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">F</p>
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">S</p>
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">S</p>
                </div>
                <div className=" flex flex-col items-start justify-start">
                    <div className="inline-flex items-center justify-start h-full w-full">
                        <button onClick={onClick}>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200" data-id={1}>
                                <p className="text-sm font-medium text-gray-800">01</p>

                                <div className="">
                                    <div className="relative w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full dark:bg-gray-600">
                                        <svg className="w-8 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                        <span className="top-0 left-7 absolute w-[18px] h-[18px] text-center flex justify-center items-center bg-green-400 border-2 border-white dark:border-gray-800 rounded-full text-xs ">2</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">02</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">03</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">04</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">05</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">06</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">07</p>

                                <div className="">...</div>
                            </div>
                        </button>
                    </div>
                    <div className="inline-flex items-center justify-start h-full w-full">
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">08</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">09</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">10</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">11</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">12</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">13</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">14</p>

                                <div className="">...</div>
                            </div>
                        </button>
                    </div>
                    <div className="inline-flex items-center justify-start h-full w-full">
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">15</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">16</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">17</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">18</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">19</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">20</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">21</p>

                                <div className="">...</div>
                            </div>
                        </button>
                    </div>
                    <div className="inline-flex items-center justify-start h-full w-full">
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">22</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">23</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">24</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">25</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">26</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">27</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">28</p>

                                <div className="">...</div>
                            </div>
                        </button>
                    </div>
                    <div className="inline-flex items-center justify-start h-full w-full">
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">29</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">30</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">31</p>

                                <div className="">...</div>
                            </div>
                        </button>
                        <div>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="opacity-50 text-sm font-medium text-gray-800">01</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="opacity-50 text-sm font-medium text-gray-800">02</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="opacity-50 text-sm font-medium text-gray-800">03</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="opacity-50 text-sm font-medium text-gray-800">04</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}