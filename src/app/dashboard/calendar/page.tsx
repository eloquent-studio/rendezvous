"use client"
import { useState } from "react"
import CloseSvg from "@/components/icons/close-svg"
import Image from "next/image"

export default function Page() {
    const [open, SetOpen] = useState(true)
    const handleClndrBtn = (e: any) => {
        console.log(e.target.dataset.id)
        SetOpen(true)
    }
    return <div className="w-full h-full bg-white overflow-y-auto overflow-x-auto flex flex-row relative">
        <div className="bg-white md:p-2 w-full lg:max-w-[925px] overflow-x-auto overflow-y-auto no-scrollbar">
            <p className="text-4xl font-bold text-gray-800 mb-8">March 2021</p>
            <div className="inline-flex flex-col items-start justify-start h-full w-full">
                <div className="flex overflow-x-auto items-start justify-start h-full">
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">M</p>
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">T</p>
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">W</p>
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">T</p>
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">F</p>
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">S</p>
                    <p className="w-32 h-full text-sm font-medium text-gray-800 uppercase">S</p>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <div className="inline-flex items-center justify-start h-full w-full">
                        <button onClick={handleClndrBtn}>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200" data-id={1}>
                                <p className="text-sm font-medium text-gray-800">01</p>

                                <div className="">
                                    <div className="relative w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full dark:bg-gray-600">
                                        <svg className="w-8 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                        <span className="top-0 left-7 absolute w-[18px] h-[18px] text-center flex justify-center items-center bg-green-400 border-2 border-white dark:border-gray-800 rounded-full text-xs ">2</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">02</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">03</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">04</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">05</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">06</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">07</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                    </div>
                    <div className="inline-flex items-center justify-start h-full w-full">
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">08</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">09</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">10</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">11</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">12</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">13</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">14</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                    </div>
                    <div className="inline-flex items-center justify-start h-full w-full">
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">15</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">16</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">17</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">18</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">19</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">20</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">21</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                    </div>
                    <div className="inline-flex items-center justify-start h-full w-full">
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">22</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">23</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">24</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">25</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">26</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">27</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">28</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                    </div>
                    <div className="inline-flex items-center justify-start h-full w-full">
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">29</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">30</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">31</p>

                                <div className="">deneme</div>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="opacity-50 text-sm font-medium text-gray-800">01</p>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="opacity-50 text-sm font-medium text-gray-800">02</p>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="opacity-50 text-sm font-medium text-gray-800">03</p>
                            </div>
                        </button>
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="opacity-50 text-sm font-medium text-gray-800">04</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {
            open && <div
                onClick={() => SetOpen(false)}
                className="bg-gray-600 bg-opacity-75 transition-opacity w-full h-full absolute xl:hidden"
            ></div>
        }
        <div className={`w-[375px] ${open ? "absolute right-0 top-0 bottom-0" : "hidden"} border-l border-gray-400 xl:border-none  xl:static bg-white p-2 h-full`}>
            <div className="flex items-start justify-between">
                <span className="text-xl font-semibold">Jan 18th, 2024</span>
                <button onClick={() => { SetOpen(false) }} className="xl:hidden text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                    <CloseSvg />
                </button>
            </div>
            <div className="h-full bg-green-500 space-y-1 p-1">
                <div className="flex flex-row items-center justify-between bg-gray-300 rounded-full m-2 h-10">
                    <Image
                        src={`https://ui-avatars.com/api/?name=${"MustafaKemal"}`}
                        id="output"
                        width={36}
                        height={36}
                        className="rounded-full"
                        alt="profile image"
                    />
                    <span className="text-center">Mustafa Kemal Gördesli</span>
                    <button className="px-2 hover:bg-gray-500 rounded-full h-full duration-300 transition-all ease-in hover:text-white">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-373.847 303.848-549.999h352.304L480-373.847Z" /></svg>

                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M303.848-410.001 480-586.153l176.152 176.152H303.848Z" /></svg>
                    </button>
                </div>
                <div className="flex flex-row bg-gray-300 rounded-full m-2">
                    <Image
                        src={`https://ui-avatars.com/api/?name=${"MustafaKemal"}`}
                        id="output"
                        width={36}
                        height={36}
                        className="rounded-full"
                        alt="profile image"
                    />
                </div>
            </div>
        </div>
    </div>
}