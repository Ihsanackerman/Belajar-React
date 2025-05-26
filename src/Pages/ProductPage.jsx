import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function ProductPage() {
  return (
    <>
      <NavBar />
      <Menu />
      <Footer />
    </>
  );
}

export default ProductPage;

function Menu() {
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="public\kopi1.jpg"
            alt="Shoes"
            className="rounded-xl  w-70 h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> Cappucino Coffe</h2>
          <p>
            Cappuccino adalah latte dengan tambahan busa yang lebih banyak
            daripada steamed milk-nya. Selain itu, variasi dari cappuccino juga
            cenderung lebih beragam
          </p>
          <div className="card-actions">
            <button className="btn text-amber-50 bg-amber-800">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="public\kopi2.jpeg"
            alt="Shoes"
            className="rounded-xl  w-70 h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h className="card-title">latte Coffe</h>
          <p>
            Latte merupakan kopi yang memiliki bahan dasar espresso dan steamed
            milk. Kemudian, kopi jenis ini juga biasanya berhiaskan sedikit busa
            di atasnya
          </p>
          <div className="card-actions">
            <button className="btn text-amber-50 bg-amber-800">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="public\kopi 3.jpg"
            alt="Shoes"
            className="rounded-xl w-70 h-50"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Kopi Hitam</h2>
          <p>
            minuman kopi yang diseduh dari bubuk kopi dengan air tanpa
            penambahan gula, susu, atau bahan lain yang dapat mengubah rasa dan
            warna
          </p>
          <div className="card-actions">
            <button className="btn text-amber-50 bg-amber-800 ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
