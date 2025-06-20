import Image from "next/image";

import { inter, roboto } from "@/app/[locale]/ui/fonts";
export default async function Nosotros() {

  return (
    <div className="flex flex-col bg-[#EAE4D6]">
      {/* Primer componente: Imagen de fondo a pantalla completa */}
      <div className="relative h-[690px] w-full">
        <Image
          src="/nosotros/nosotros.svg"
          alt="Full-screen background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0 mobile-image-shift" // Apply custom class
        />
      </div>
      {/*segundo componente */}
      <div className="h-[450px] bg-[#B4A69A] flex flex-row w-full justify-center">
        <div className="w-[100%] justify-between h-[100%] flex flex-row p-[60px]">
          <div className="w-[300px] flex justify-start"><h3 className="font-medium text-[36px] leading-[110%] tracking-[0]">El Estudio</h3></div>
          <div className="h-[330px] flex flex-col w-[950px] ">
            <p className={`${inter.className} font-normal text-[24px] leading-[110%] tracking-[0]`} >En DYB, nos definimos por una creatividad cruzada que guía
              nuestro <span className={`${inter.className} font-bold text-[24px] leading-[110%] tracking-[0]`}>enfoque moderno, ecléctico y vanguardista.</span> Creemos firmemente
              que las dicotomías coexisten, y nos inspiramos en la yuxtaposición
              de elementos aparentemente opuestos: la historia y la modernidad,
              la imaginación y la disciplina, el refinamiento y la singularidad.
              De esta manera, creamos soluciones que rompen
              con lo convencional y aportan un valor genuino y transformador a
              cada espacio.</p>
              <br/>
            <p className={`${inter.className}font-normal text-[24px] leading-[110%] tracking-[0]`}>Nos esforzamos por crear entornos que no solo permitan a nuestros clientes
              vivir, sino también experimentar la esencia misma de lo que les proponemos.
              <span className={`${inter.className} font-bold text-[24px] leading-[110%] tracking-[0]`}>Buscamos resolver tanto la practicidad como el refinamiento, interpretando
              las necesidades de nuestros clientes,</span> incluso aquellas que aún no son
              conscientes de tener. Esta capacidad para entender y anticipar lo no
              expresado es uno de nuestros valores fundamentales.</p>
          </div>
        </div>


      </div>
      {/* tercer componente: Imagen de fondo a pantalla completa */}
      <div className="relative h-[480px] w-full">
        <Image
          src="/nosotros/nosotros2.svg"
          alt="Full-screen background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0 mobile-image-shift" // Apply custom class
        />
      </div>
      {/*cuarto */}
      <div className="h-[600px] w-full flex items-center">
        <div className="h-[480px] w-full flex justify-around items-center">
          <div className="h-auto w-[600px]">  <p className={`${inter.className} font-normal text-[18px] leading-[110%] tracking-[0]`}><span className={`${inter.className} font-bold text-[18px] leading-[110%] tracking-[0]`}>Laura Delisia</span> es una arquitecta apasionada por la creación de 
            espacios que combinan funcionalidad y estética con una visión única
             y vanguardista. Su curiosidad intelectual y su enfoque
             multidisciplinario la llevaron a adentrarse en el mundo de la arquitectura. 
             En 1967, se graduó como Bachiller con orientación en Ciencias Sociales y Letras, lo que marcó
              el inicio de su recorrido hacia esta disciplina.</p>
              <br/>
              <p className={`${inter.className} font-normal text-[18px] leading-[110%] tracking-[0]`}>En 1975, obtuvo su licenciatura en Sociología en la Universidad Católica Argentina, lo que le proporcionó una sólida base en la comprensión de las dinámicas sociales y humanas. Esta formación le permitió abordar sus proyectos de manera integral, teniendo en cuenta tanto las necesidades 
                de los individuos como las particularidades de cada contexto.</p>
                <br/>
                <p className={`${inter.className} font-normal text-[18px] leading-[110%] tracking-[0]`}>A lo largo de su carrera, Laura se ha especializado en arquitectura con una orientación en comunicación y diseño. Su enfoque profesional está centrado en transformar el espacio y la experiencia del usuario, creando ambientes que conectan la forma, la función y la emoción de manera armónica.</p>
    </div>
    <div className="h-full w-[480px] relative">
      <Image fill alt="denisa" src='/nosotros/delisa.svg' className="object-cover"/>
    </div>
        </div>
          </div>
          {/*cuarto */}
      <div className="h-[600px] w-full flex items-center">
        <div className="h-[480px] w-full flex justify-around items-center">
        <div className="h-full w-[480px] relative">
      <Image fill alt="denisa" src='/nosotros/ivan.svg' className="object-cover"/>
    </div> 
     <div className="h-auto w-[600px]">  <p className={`${inter.className} font-normal text-[18px] leading-[110%] tracking-[0]`}><span className={`${inter.className} font-bold text-[18px] leading-[110%] tracking-[0]`}>Iván Bunge </span>Iván Bunge es un arquitecto cuya 
      trayectoria y enfoque profesional están profundamente marcados por su formación y sus intereses multidisciplinarios. En 2013, obtuvo su título en Arquitectura en la Universidad de Belgrano, en Buenos Aires.
     </p>
              <br/>
              <p className={`${inter.className} font-normal text-[18px] leading-[110%] tracking-[0]`}>on un fuerte interés por las instalaciones y los sistemas 
                constructivos, Iván se inspira en los grandes arquitectos de la historia. Entre sus influencias se encuentran figuras como Frank Gehry y Tadao Ando, cuyas obras le han dejado una huella significativa en su forma de entender el diseño.</p>
                <br/>
                <p className={`${inter.className} font-normal text-[18px] leading-[110%] tracking-[0]`}>
                Apasionado por el café, la gastronomía y la interacción de los espacios dentro de las soluciones funcionales, Iván se dedica a explorar cómo los entornos 
                pueden ser optimizados para maximizar la experiencia del cliente. Su enfoque se centra en crear soluciones arquitectónicas que no solo sean estéticamente atractivas, sino también profundamente funcionales, adaptándose a las necesidades específicas de cada espacio.</p>
    </div>
    
        </div>
          </div>
      {/* quinto componente: Imagen de fondo a pantalla completa */}
      <div className="relative h-[690px] w-full">
        <Image
          src="/nosotros/nosotros3.svg"
          alt="Full-screen background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0 mobile-image-shift" // Apply custom class
        />
      </div>

    </div>
  );
}