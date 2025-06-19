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
          <div className="h-[700px] md:h-[600px] flex justify-center md:justify-around flex-col items-center w-[80%] md:w-[480px]">
            <div className="h-[427px] w-[240px] relative">
              <Image src='/espacios.svg'
              alt="espacios"
              fill

              />
            </div>
            <div className="flex h-[150px] md:h-[107] flex-col justify-end md:justify-end">
              <p>Diseñamos espacios que combinan funcionalidad, estética y calidad.</p>
              <div className="flex pt-[20px] "><p >Quienes somos</p><Image width={15} height={15} alt="img" src='/line.svg'/></div>
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
      {/* Tercer componente: Sección con imagen */}
      <div className="h-auto md:h-auto w-full flex flex-col md:flex-row items-center">
       <div className="md:w-[50%] relative h-[736px] w-full md:h-[900px]">
          <Image
            src="/2alfrente.svg"
            fill
            className="object-cover md:object-contain"
            alt="diseño de espacios"
          />
        </div> 
        <div className="w-[100%] md:w-[50%] h-full flex items-center justify-center">
          <div className="h-[700px] md:h-[600px] flex justify-center md:justify-around flex-col items-center w-[80%] md:w-[480px]">
            <div className="h-[480px] w-[309px] md:w-[438px] relative">
              <Image src='/22alfrente.svg'
              alt="espacios"
              fill
              />
            </div>
            <div className="flex h-[150px] md:h-[107] flex-col justify-end md:justify-end">
              <p>Cada espacio que creamos es una interpretación de lo que nuestros clientes necesitan y aún no saben que desean. </p>
              <div className="flex pt-[20px] "><p >TRABAJEMOS JUNTOS</p><Image width={15} height={15} alt="img" src='/line.svg'/></div>
              </div>
             
          </div>
        </div>
        
      </div>
      <div className="w-full h-[120px] flex flex-col  justify-center bg-[#A28D77]">
        <p className="w-[90%] pl-[60px] pt-[20px]">«La arquitectura debe hablar de su tiempo y lugar, pero aspirar a la atemporalidad».</p>
        <p className="w-[90%]  pl-[60px]">
        — Frank Gehry  </p>
        </div>
    </div>
  );
}