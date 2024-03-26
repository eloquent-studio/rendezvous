"use client"

import { SendContact } from "@/actions/business/contact"
import { useFormState } from "react-dom"
import { ContactSubmit } from "./contact-submit"
import { useEffect, useRef } from "react"

const initialState: { error: string, success: "" } = {
    error: "",
    success: "",
}

export default function ContactForm({ businessName }: { businessName: string }) {

    const [state, formAction] = useFormState(SendContact, initialState)

    const formRef = useRef<HTMLFormElement>(null);

    return <form className="mb-6" action={async (formData: FormData) => {
        await formAction(formData);
        if (state.error == "")
            formRef.current?.reset();
    }} ref={formRef}>
        <div className="mb-6">
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Your email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
            />
        </div>
        <div className="mb-6">
            <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Subject
            </label>
            <input
                type="text"
                id="subject"
                name="subject"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Let us know how we can help you"
                required
            />
        </div>
        <div className="mb-2">
            <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Your message
            </label>
            <textarea
                id="message"
                name="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
            ></textarea>
        </div>
        <div className="py-2">
            {state.error && (
                <p className="text-xs font-medium text-red-600">{state.error}</p>
            )}
            {state.success && (
                <p className="text-xs font-medium text-green-600">{state.success}</p>
            )}
        </div>
        <input type="hidden" name="businessName" value={businessName} />
        <ContactSubmit />
    </form>
}