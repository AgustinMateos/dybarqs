import Image from "next/image";
import initTranslations from "../i18n";

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["home", "common"]);
  return (
    <div className="flex flex-col">
      {/* Primer componente: Imagen de fondo a pantalla completa */}
      <div className="relative h-screen w-full">
        <Image
          src="/principal.svg"
          alt="Full-screen background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0"
        />
      </div>

      {/* Segundo componente: Sección con imagen */}
      <div className="h-[780px] w-full flex">
        <div className="w-[50%] h-full flex items-center justify-center">
          <div className="bg-amber-200 h-[540px] w-[480px] "></div>
        </div>
        <div className="w-[50%] relative">
          <Image
            src="/diseno-de-espacios.svg"
            fill
            className="object-contain"
            alt="diseño de espacios "
          />
        </div>
      </div>
    </div>
  );
}