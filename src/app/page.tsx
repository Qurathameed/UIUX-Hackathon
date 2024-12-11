import Brand from "./Brand/page";
import Cart from "./Add-to-Cart/page";
import Categories from "./Product/page";
import Ceramics from "./Ceramics/page";
import Email from "./Email/page";
import Hero from "./Hero/page";
import List from "./List/page";

export default function Home() {
  return (
   <div className="bg-white w-[98%]">
<Hero/>
<Brand/>
<Ceramics/>
<List/>
<Email/>
<Cart/>
<Categories/>
   </div>
  );
}