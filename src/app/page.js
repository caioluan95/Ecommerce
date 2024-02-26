import React from "react";
import Topper from "@/core/components/navbar/topper";
import ComboTopHair from "@/core/components/products/cards/promotion_cards/combo_top_hair";
import ComboHidroliso from "@/core/components/products/cards/promotion_cards/combo_hidraliso";
import ComboRosaAmazonica from "@/core/components/products/cards/promotion_cards/combo_rosa_amazonica";
import CardRosaAmazonica from "@/core/components/products/cards/products_cards/card_rosa_amazonica";
import CardTopHair from "@/core/components/products/cards/products_cards/card_top_hair";
import CardHidroliso from "@/core/components/products/cards/products_cards/card_hidraliso";

export default function Home() {
  return (
    <main>
      <Topper />
      <div className="mx-2 my-2 bg-red-100 rounded-lg">
        <div class="flex flex-row justify-between">
          <CardRosaAmazonica />
          <CardTopHair />
          <CardHidroliso />
        </div>
        <div class="flex flex-row justify-between">
          <ComboRosaAmazonica />
          <ComboTopHair />
          <ComboHidroliso />
        </div>
      </div>
    </main>
  );
}
