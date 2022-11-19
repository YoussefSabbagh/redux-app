import {
  Cart,
  FlexContent,
  Footer,
  Hero,
  Navbar,
  Sales,
  Stories,
} from './components';

import {
  footerAPI,
  heroapi,
  highlight,
  popularsales,
  sneaker,
  story,
  topratesales,
} from './data/data.js';

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16">
        <Hero heroapi={heroapi} />
        <Sales productsGroup={popularsales} ifExists />
        <FlexContent data={highlight} ifExists />
        <Sales productsGroup={topratesales} />
        <FlexContent data={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
