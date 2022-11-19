import React from 'react';
import Items from './utils/Items';
import Title from './utils/Title';

const Sales = ({ productsGroup, ifExists }) => {
  return (
    <section className="nike-container">
      <Title title={productsGroup.title} />
      <div
        className={`grid items-center justify-items-center gap-4 lg:gap-5 mt-7 ${
          ifExists
            ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'
            : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
        }`}
      >
        {productsGroup.items.map((product) => (
          <Items key={product.id} product={product} ifExists={ifExists} />
        ))}
      </div>
    </section>
  );
};

export default Sales;
