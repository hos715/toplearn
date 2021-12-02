import React from 'react';

const FilterByPrice = () => {
   return (
      <section className="aside-section filter-by-price">
         <header><h3> فیلتر بر اساس قیمت </h3></header>
         <div className="price-range">
            <input type="hidden" value="" id="min-value" name="min_price" />
            <input type="hidden" value="" id="max-value" name="max_price" />
            <div className="price-bar"><div id="priceFilter"></div></div>
            <div className="max-price">تا <span id="max-text">500000</span> تومان</div>
            <div className="min-price">از <span id="min-text">20000</span> تومان</div>
            <div className="clearfix"></div>
         </div>
      </section>
   );
}

export default FilterByPrice;