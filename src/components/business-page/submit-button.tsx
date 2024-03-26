'use client'
import { useFormStatus } from 'react-dom'
import { ReloadIcon } from "@radix-ui/react-icons"

export function CompleteSubmit() {
    const { pending } = useFormStatus()

    return (
        <>
            {
                pending
                    ?
                    <button
                        disabled={pending}
                        type="submit"
                        className="flex flex-row justify-center items-center  text-white bg-blue-400 hover:bg-blue-400 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
                    >
                        <ReloadIcon className="mr-1 h-4 w-4 animate-spin" />
                        Complete
                    </button>

                    :
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none block"
                    >
                        Complete
                    </button>
            }
        </>
    )
}