"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProductButton from "@/core/components/buttons/products_button";

export default function CardRosaAmazonica() {
  const router = useRouter();

  function redirect() {
    router.push("/rosa_amazonica");
  }

  return (
    <main>
        <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <a
            class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            href="#"
          >
            <Image
              src="/images/rosa_amazonica.png"
              height={400}
              width={300}
              alt="product image"
            />
          </a>
          <div class="mt-4 px-5 pb-5">
            <a href="#">
              <h5 class="text-xl text-center tracking-tight text-slate-900">
                Rosa Amazônica
                <br/>
                Sérum 11 em 1
              </h5>
            </a>
            <div class="mt-2 mb-5 flex justify-center">
              <p>
                <span class="text-3xl font-bold text-slate-900">R$ 197,00</span>
              </p>
            </div>
            <ProductButton onClick={redirect}>Saiba mais</ProductButton>
          </div>
        </div>
    </main>
  );
}