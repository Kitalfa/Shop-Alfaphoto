// import components
import ProductSlider from '../components/ProductSlider';
// useFetch hook
import useFetch from '../hooks/useFetch.js';

const RelatedProducts = ({ categoryTitle }) => {
  // get new products
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  );
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default RelatedProducts;
