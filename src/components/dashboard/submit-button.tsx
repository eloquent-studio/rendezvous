'use client'
import { useFormStatus } from 'react-dom'
import { ReloadIcon } from "@radix-ui/react-icons"

export function SubmitButton({ children }: {
    children:
    React.ReactNode
}) {
    const { pending } = useFormStatus()

    return (
        <>
            {
                <button type="submit" className={`bg-blue-600 text-white rounded-lg p-2 px-3 flex flex-row items-center justify-center`}>{pending && <ReloadIcon className="mr-1 h-4 w-4 animate-spin" />}{children}</button>
            }
        </>
    )
}