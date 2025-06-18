import Image from "next/image";
import initTranslations from "../i18n";
import Link from "next/link";

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["home", "common"]);
  return (
    <div className="flex flex-col bg-[#EAE4D6]">
      {/* Primer componente: Imagen de fondo a pantalla completa */}
      <div className="relative h-screen w-full">
        <Image
          src="/principal.svg"
          alt="Full-screen background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0 mobile-image-shift" // Apply custom class
        />
      </div>

      {/* Segundo componente: Sección con imagen */}
      <div className="h-auto md:h-[780px] w-full flex flex-col md:flex-row items-center">
        <div className="w-[100%] md:w-[50%] h-full flex items-center justify-center">
          <div className="h-[700px] md:h-[600px] flex justify-around flex-col items-center w-[80%] md:w-[480px]">
            <div className="h-[427px] w-[240px] relative">
              <Image src='/espacios.svg'
              alt="espacios"
              fill

              />
            </div>
            <div className="flex h-[107px] flex-col justify-around">
              <p>Diseñamos espacios que combinan funcionalidad, estética y calidad.</p>
              <p >Quienes somos</p>
              </div>
             
          </div>
        </div>
        <div className="md:w-[50%] relative h-[736px] w-full md:h-full">
          <Image
            src="/diseno-de-espacios.svg"
            fill
            className="object-cover md:object-contain"
            alt="diseño de espacios"
          />
        </div>
      </div>
    </div>
  );
}