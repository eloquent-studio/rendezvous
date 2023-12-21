export default function SideWindow() {
    return <div className="flex justify-center items-center min-h-screen">
      <div>
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div x-transition:enter="transition-opacity ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity ease-in duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
         <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
            <div x-transition:enter="transition-transform ease-out duration-300" x-transition:enter-start="transform translate-x-full" x-transition:enter-end="transform translate-x-0" x-transition:leave="transition-transform ease-in duration-300" x-transition:leave-start="transform translate-x-0" x-transition:leave-end="transform translate-x-full" className="w-screen max-w-md">

               

            </div>
          </section>
        </div>
        <button x-on:click="open = true" className="px-4 py-2 bg-black text-white rounded-md"> Open Sidebar </button>
      </div>
    </div>
}