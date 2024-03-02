import Image from "next/image";

const Hero = () => {
  return (
    <section className=" relative bg-base min-h-[1024px] bg-grid bg-no-repeat bg-cover pt-[136px] text-white">
      <div>
        <div className="absolute z-[4] right-2/4 left-2/4 top-[365px] -translate-x-2/4  ">
          <h1 className="  absolute  font-bold text-[160px]  z-[4] -left-[530px]  ">
            WEB
          </h1>
        </div>

        <div className="absolute z-[6] right-2/4 left-2/4  -translate-x-2/4   top-[520px]">
          <h1 className=" absolute font-bold text-[160px] -left-[160px]   ">
            DESIGNER
          </h1>
        </div>

        <Image
          className="absolute z-[5] right-2/4 left-2/4  -translate-x-2/4  top-[136px]"
          src={"/person-image.png"}
          width={647}
          height={876}
          alt="absolute"
        />

        <Image
          className=" absolute top-[296px] right-2/4 left-2/4  -translate-x-2/4 z-[3]"
          src={"/ellipse-1.png"}
          width={538}
          height={538}
          alt=""
        />
        <Image
          className="absolute right-2/4 left-2/4  -translate-x-2/4 top-[223px]  z-[2]"
          src={"/ellipse-2.png"}
          width={684}
          height={684}
          alt=""
        />
        <Image
          className="absolute z-[1] right-2/4 left-2/4  -translate-x-2/4 top-[228px]  "
          src={"/strok-circle.png"}
          width={745}
          height={692}
          alt=""
        />
      </div>
      <Image
        className="absolute right-2/4 left-2/4 bottom-10  -translate-x-2/4"
        src={"/scroll-down.png"}
        width={24}
        height={24}
        alt=""
      />

      <Image
        className="absolute bottom-[135px] right-[160px] "
        src={"/shape-ball.png"}
        width={80}
        height={80}
        alt=""
      />
      <Image
        className="absolute top-[343px] left-[146px] "
        src={"/shape-x.png"}
        width={80}
        height={80}
        alt=""
      />
      <Image
        className="absolute top-[256px] right-[204px] "
        src={"/shape-star.png"}
        width={80}
        height={80}
        alt=""
      />

      <div className="flex bottom-10 left-[120px] items-center absolute gap-8">
        <Image src={"/call-icon.png"} width={40} height={40} alt="" />
        <Image src={"/meil-icon.png"} width={40} height={40} alt="" />
        <div className="text-sm z-10 isolate  font-medium absolute text-black bg-white py-[10px] left-[75px] px-10 top-[-52px] ">
          vap@gmail.com
          <Image
            className="left-0 z-10 absolute bottom-[-12px]"
            src={"/email-arrow.png"}
            width={10}
            height={10}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
