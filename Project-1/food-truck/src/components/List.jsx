import React from "react";
import Card from "./Card";

const List = () => {
  return (
    <>
      <div className="Container">
        <Card
          imageUrl="src/assets/Tacos.webp"
          name="Birria-Landia"
          description="Mexican"
          link="https://thebirrialandia.com/menu/"
          
        />
        <Card
          imageUrl="src/assets/IndianFood.jpg"
          name="Mysttik Masala"
          description="Indian"
          link="https://indianfoodny.com/"
        />  
        <Card
          imageUrl="src/assets/HalalGuys.webp"
          name="The Halal Guys"
          description="Middle Eastern"
          link="https://thehalalguys.com/menu/"
        />
        <Card
          imageUrl="src/assets/NYDosas.jpg"
          name="NY Dosas"
          description="Vegetarian"
          link="https://nydosas.com/menu/"
        />
        <Card
          imageUrl="src/assets/JerkPan.jpg"
          name="Jerk Pan"
          description="Jamaican"
          link="https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/"
        />
        <Card
          imageUrl="src/assets/Tong.jpg"
          name="Tong"
          description="Bangladeshi"
          link="https://www.facebook.com/Bangladeshistreetfoods/"
        />
        <Card
          imageUrl="./src/assets/King.jpg"
          name="King Souvlaki of Astoria"
          description="Greek"
          link="https://kingsouvlakinyc.com/"
        />
        <Card
          imageUrl="./src/assets/Ling.jpg"
          name="Ling's Sweet Mini Cakes"
          description="Chinese"
          link="https://canalstreet.market/"
          
        />
        <Card
          imageUrl="./src/assets/Uncle.jpg"
          name="Uncle Gussy's"
          description="Greek"
          link="https://unclegussys.com/menus/"
          
        />
        <Card
          imageUrl="./src/assets/PP.jpg"
          name="Patacon Pisao"
          description="Venezuelan"
          link="https://www.pataconpisaonyc.com/menus/"
          
        />
        <Card
          imageUrl="./src/assets/MM.jpeg"
          name="Mom's Mono"
          description="Tibetan"
          link="https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/"
        />
        <Card
          imageUrl="./src/assets/MakinA.jpg"
          name="Makina Cafe"
          description="Ethiopian"
          link="https://makinacafenyc.com/"
          
        />
      </div>
    </>
  );
};

export default List;