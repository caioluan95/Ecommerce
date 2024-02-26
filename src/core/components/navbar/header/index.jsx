"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  function redirectHome() {
    router.push("/");
  }

  function redirectProducts() {
    router.push("/");
  }

  function redirectAbout() {
    router.push("/about");
  }

  return (
    <header class="border-b-2 border-solid border-red-200 shadow">
      <div class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-6 sm:mx-auto sm:flex-row">
        <input type="checkbox" class="peer hidden" id="navbar-open" />
        <label
          class="absolute right-4 top-5 cursor-pointer sm:hidden"
          for="navbar-open"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-labelledby="header-navigation"
          class="peer-checked:mt-8 peer-checked:max-h-32 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all sm:ml-8 sm:max-h-full sm:flex-row sm:items-start"
        >
          
          <ul class="flex flex-col items-center sm:flex-row">
            <li class="text-gray-800 sm:mr-12">
              <button
                className="relative flex h-[35px] w-32 items-center justify-center overflow-hidden bg-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-100 before:duration-500 before:ease-out hover:shadow-red-100 hover:before:h-56 hover:before:w-56"
                onClick={redirectHome}
              >
                <span className="relative z-10">Home</span>
              </button>
            </li>
            <li class="text-gray-800 sm:mr-12">
              <button
                className="relative flex h-[35px] w-32 items-center justify-center overflow-hidden bg-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-100 before:duration-500 before:ease-out hover:shadow-red-100 hover:before:h-56 hover:before:w-56"
                onClick={redirectProducts}
              >
                <span className="relative z-10">Produtos</span>
              </button>
            </li>
            <li class="text-gray-800 sm:mr-12">
              <button
                className="relative flex h-[35px] w-32 items-center justify-center overflow-hidden bg-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-100 before:duration-500 before:ease-out hover:shadow-red-100 hover:before:h-56 hover:before:w-56"
                onClick={redirectAbout}
              >
                <span className="relative z-10">Sobre</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
