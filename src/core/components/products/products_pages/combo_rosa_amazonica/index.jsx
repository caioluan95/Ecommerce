import Image from "next/image";
import ProductButton from "@/core/components/buttons/products_button";
import CardTopHair from "../../cards/products_cards/card_top_hair";
import CardHidraliso from "../../cards/products_cards/card_hidraliso";
import ComboTopHair from "../../cards/promotion_cards/combo_top_hair";

export default function ComboRosaAmazonica() {
  return (
    <section class="text-gray-700 body-font overflow-hidden bg-white">
      <div class="mx-2 mt-2 rounded-lg pt-20">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            src="/images/combo.png"
            height={500}
            width={600}
            alt="product image"
            className="rounded-lg"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              Combo 3 frascos - Rosa Amazônica
            </h1>
            <div class="flex mt-2 items-center pb-4 border-b-2 border-red-200 mb-6"></div>
            <p class="leading-relaxed text-justify text-gray-800">
              Uma poderosa fórmula que concentra o extraordinário potencial da
              Amazônia em um único frasco. Desenvolvido para revolucionar sua
              rotina de cuidados com a pele, este sérum oferece 11 benefícios em
              cada aplicação. Instantaneamente reduzindo a aparência de rugas,
              proporciona hidratação intensa por 24 horas, enquanto clareia e
              uniformiza a pele, atuando como um eficaz clareador de manchas.
              Sua composição única combina os poderes regenerativos da Rosa
              Mosqueta, a incrível capacidade de retenção de água do Ácido
              Hialurônico e os benefícios do Verisol, resultando em uma solução
              completa. Elimine o temido "Pé de Galinha" e "Bigode Chinês", ao
              mesmo tempo em que devolve firmeza e elasticidade à sua pele. Além
              disso, combate estrias, foliculite e proporciona alívio para
              irritações.
            </p>
            <div class="flex mt-4 items-center pb-4 border-b-2 border-red-200 mb-4"></div>

            <div class="flex ml-6 items-center"></div>

            <div>
              <h1 class="title-font font-medium text-2xl text-gray-900">
                R$ 247,00*
              </h1>
              <br />
              <ProductButton>COMPRAR AGORA</ProductButton>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h1 class="pl-8 py-4 bg-red-100 text-white text-3xl title-font font-medium">
          Outros Produtos
        </h1>
      </div>
      <div className="mx-2 mb-2 rounded-b-lg flex flex-row justify-between">
        <CardTopHair />
        <CardHidraliso />
        <ComboTopHair />
      </div>
    </section>
  );
}