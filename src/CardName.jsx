import React from "react";
import { FaInstagramSquare, FaFacebook, FaGithub } from "react-icons/fa";

function CardName() {
  return (
    <>
      <div className="h-screen bg-gray-200 flex justify-center items-center">
        <div className="w-96 h-auto border-2 bg-white p-4">
          <div className="flex justify-center items-center flex-col">
            <img
              src="src\assets\WhatsApp Image 2025-05-20 at 11.11.39.jpeg "
              alt=""
              className="h-30 object-cover w-30 rounded-full shadow-xl border-2"
            />

            <h1 className="font-bold">Musyafa Nabil Ihsan </h1>
            <p className="font-bold">Mahasiswa</p>
          </div>

          <div className="text-justify mt-4">
            <p>
              Saya Musyafa Nabil Ihsan, mahasiswa Manajemen Informatika di
              Politeknik Negeri Sriwijaya. Saya tertarik pada pengembangan web
              dan teknologi informasi, serta aktif mengembangkan keterampilan
              melalui proyek-proyek sederhana dan pembelajaran mandiri.
            </p>
          </div>

          
          

          <LinkSosial
          text="instagram"
          icon={<FaInstagramSquare className="mr-2 text-2xl"/>}
          link="https://www.instagram.com/"
          />
          
          <LinkSosial
          text="Facebook"
          icon={<FaFacebook />}
          link="https://web.facebook.com/?locale=id_ID&_rdc=1&_rdr#"
          />
          
        

        </div>
      </div>
    </>
  );
}

export default CardName;
function LinkSosial(props){
  return(
    <>
    <div className="mt-4 flex justify-center items-center ">
      
            <a
              className=" flex items-center justify-center gap-2 bg-black text-white p-3 w-full rounded-lg hover:bg-gray-800 transition"
              href={props.link}
              target="blank"
            >
              {props.icon}{props.text}    
            </a>
     </div>    

    </>
  );
}
