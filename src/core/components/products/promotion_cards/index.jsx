import Image from "next/image"

export default function Promo () { return (
  <main>
  <div class="flex flex-row justify-between">
    <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <Image src="/images/combo.png"
    height={400}
    width={280} alt="product image" />
    </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl text-center tracking-tight text-slate-900">Combo - 3 frascos
      <br/>
      Rosa Amazônica</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">R$ 197,00</span>
      </p>
          </div>
    <a href="#" class="flex items-center justify-center rounded-md bg-white border border-solid border-black px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
      Saiba mais</a>
  </div>
</div>
<div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <Image src="/images/top_hair_gummy_combo.png"
    height={400}
    width={300} alt="product image" />
    </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl text-center tracking-tight text-slate-900">Combo - 3 frascos
      <br/>
      Top Hair Gummy</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">R$ 317,90</span>
        <span class="text-sm text-slate-900 line-through">R$ 699,90</span>
      </p>
          </div>
    <a href="#" class="flex items-center justify-center rounded-md bg-white border border-solid border-black px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
      Saiba mais</a>
  </div>
</div>
<div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <Image src="/images/hidraliso_pague3_leve4.png"
    height={400}
    width={300} alt="product image" />
    </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl text-center tracking-tight text-slate-900">Pague 3, Leve 4
      <br/>
      Hidraliso</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">R$ 247,00</span>
      </p>
          </div>
    <a href="#" class="flex items-center justify-center rounded-md bg-white border border-solid border-black px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
      Saiba mais</a>
  </div>
</div></div>
  </main>
)
}