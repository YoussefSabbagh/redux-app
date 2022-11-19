import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

import { FaHashtag, FaHeart, FaRegCalendarAlt } from 'react-icons/fa';
import Title from './utils/Title';

const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: 'loop',
    rewind: true,
    keyboard: 'global',
    gap: '1rem',
    pagination: false,
    padding: '2rem',
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <section>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div className="mt-7">
          <Splide options={splideOptions}>
            {news.map((story, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                  <div className="flex items-center justify-center">
                    <img
                      src={story.img}
                      alt={`img/story/${i}`}
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full px-4">
                    <div className="flex items-center gap-0.5">
                      <FaHeart className="icon-style text-blue-500 w-5 h-5" />
                      <span className="text-xs font-bold">{story.like}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <FaRegCalendarAlt className="icon-style w-4 h-4 text-black" />
                      <span className="text-xs font-bold">{story.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <FaHashtag className="icon-style text-blue-600" />
                      <span className="text-xs font-bold text-blue-600">
                        {story.by}
                      </span>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-start px-4">
                    <h1 className="text-base font-semibold lg:text-sm">
                      {story.title}
                    </h1>
                    <p className="text-sm text-justify lg:text-xs">
                      {story.text.slice(0, 150)}
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <a
                      href={story.url}
                      target="_blank"
                      role={'button'}
                      rel="noreferrer"
                      className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme"
                    >
                      {story.btn}
                    </a>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Stories;
