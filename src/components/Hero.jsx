import React from 'react';
import Clips from './utils/Clips';
import SocialLinks from './utils/SocialLinks';

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <section className="relative w-auto h-auto flex flex-col">
      <div className="bg-theme clip-path h-[85vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] w-auto absolute opacity-100 inset-0 z-10"></div>
      <div className="relative opacity-100 z-20 grid justify-items-center items-center nike-container ">
        <div className="grid items-center justify-items-center mt-28 md:mt-24">
          <h1 className="font-extrabold xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-6xl text-slate-200 ">
            {title}
          </h1>
          <h2 className="font-extrabold xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-6xl text-slate-200 ">
            {subtitle}
          </h2>
          <button
            type="button"
            className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5"
          >
            {btntext}
          </button>
          <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
            {videos?.map((video, i) => (
              <Clips key={i} imgsrc={video.imgsrc} clip={video.clip} />
            ))}
          </div>
          <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
            {sociallinks?.map((social, i) => (
              <SocialLinks key={i} icon={social.icon} />
            ))}
          </div>
        </div>
        <div>
          <img
            src={img}
            alt="hero"
            className="w-auto xsm:h-[19vh] sm:h-[21vh] md:h-[31vh] lg:h-[35vh] h-[45vh] transitions-theme -rotate-[25deg] hover:rotate-0 object-fill cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
