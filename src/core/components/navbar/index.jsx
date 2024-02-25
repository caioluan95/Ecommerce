export default function Navbar() {
  return (
    <div><header class="mb-2 shadow">
  <div class="relative flex max-w-screen-xl font-serif flex-col overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row">
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute right-4 top-5 cursor-pointer sm:hidden" for="navbar-open">
      <span class="sr-only">Toggle menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-labelledby="header-navigation" class="peer-checked:mt-8 peer-checked:max-h-32 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all sm:ml-24 sm:max-h-full sm:flex-row sm:items-start">
      <h2 class="sr-only" id="header-navigation">Header navigation</h2>
      <ul class="flex flex-col items-center sm:flex-row">
        <li class="text-gray-800 sm:mr-12"><a className="hover:bg-red-100" href="#">Orders</a></li>
        <li class="text-gray-800 sm:mr-12"><a href="#">Teams</a></li>
        <li class="text-gray-800 sm:mr-12"><a href="#">Customers</a></li>
      </ul>
      <span>SAÚDE EM FOCO</span>
    </nav>
  </div>
</header>
<div class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md text-center">
      <h2 class="font-serif text-2xl font-bold sm:text-3xl">Our featured Aroma Range</h2>
      <p class="mt-4 text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
    </div></div></div></div>
  )
}