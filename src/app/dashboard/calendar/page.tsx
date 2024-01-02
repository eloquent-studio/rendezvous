"use client"
import { useState } from "react"

import Image from "next/image"
import CloseSvg from "@/components/icons/close-svg"

export default function Page() {
    const [open, SetOpen] = useState(true)
    return <div className="w-full h-full bg-white overflow-y-auto overflow-x-auto flex flex-row">
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
                        <button>
                            <div className="flex items-start justify-start w-32 p-2 h-32 flex-col relative border border-gray-200">
                                <p className="text-sm font-medium text-gray-800">01</p>

                                <div className="">deneme</div>
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
        <div className={`min-w-[375px] ml-auto lg:ml-0 ${open ? "fixed" : "hidden"} right-0 border-l border-gray-400 xl:border-none xl:static bg-white xl::flex flex-col p-2 h-screen`}>
            <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">Jan 18th, 2024</span>
                <button onClick={() => { SetOpen(false) }} className="xl:hidden text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                    <CloseSvg />
                </button>
            </div>
        </div>
    </div>
}