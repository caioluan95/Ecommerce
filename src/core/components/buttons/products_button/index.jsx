import Button from "@/core/components/buttons/button-base"

export default function ProductButton({onClick}) {
  return(<Button class="flex items-center justify-center rounded-md bg-white border border-solid border-black px-5 py-2.5 text-center text-sm font-medium text-black w-full hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300" onClick={onClick}>
  Saiba mais</Button>)
}