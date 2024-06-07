import React from 'react'

const Navbar = () => {
    return (
        <div>
            <header class="bg- border-b-2  border-gray-900">
                <nav class="mx-auto flex items-center h-10 p-6 justify-around lg:px-8" aria-label="Global">
                    <div className="flex  gap-5">
                    <div class="flex ">
                        <a href="/" class="-m-1.5 p-1.5">
                            <span class="display-none h-[22px] dark:flex"><svg width="95" height="111" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-auto max-w-none"><path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="#FFA116"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#B3B3B3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="white"></path></svg></span>
                        </a>
                    </div>
                    <div class="flex gap-x-8">
                        <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Product</a>
                        <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
                        <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
                        <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Company</a>
                    </div>
                    </div>
                    <div class="flex gap-4">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="1em" height="1em" fill="currentColor" class="h-7 w-7 hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary"><path fill-rule="evenodd" d="M7.19 1.564a.75.75 0 01.729.069c2.137 1.475 3.373 3.558 3.981 5.002l.641-.663a.75.75 0 011.17.115c1.633 2.536 1.659 5.537.391 7.725-1.322 2.282-3.915 2.688-5.119 2.688-1.177 0-3.679-.203-5.12-2.688-.623-1.076-.951-2.29-.842-3.528.109-1.245.656-2.463 1.697-3.54.646-.67 1.129-1.592 1.468-2.492.337-.895.51-1.709.564-2.105a.75.75 0 01.44-.583zm.784 2.023c-.1.368-.226.773-.385 1.193-.375.997-.947 2.13-1.792 3.005-.821.851-1.205 1.754-1.282 2.63-.078.884.153 1.792.647 2.645C6.176 14.81 7.925 15 8.983 15c1.03 0 2.909-.366 3.822-1.94.839-1.449.97-3.446.11-5.315l-.785.812a.75.75 0 01-1.268-.345c-.192-.794-1.04-2.948-2.888-4.625z" clip-rule="evenodd"></path></svg>
                        </div>
                       <button>
                        <p href="/" className="h-7 w-7  rounded-full bg-black" ></p>
                       </button>
                    </div>
                </nav>
               
            </header>
        </div>
    )
}

export default Navbar
