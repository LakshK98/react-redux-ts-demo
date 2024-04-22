import PageLayout from '../PageLayout/PageLayout';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductSalesTable from '../ProductSalesTable/ProductSalesTable';

const ProductPage: React.FC = () => {
  return (
    <PageLayout
      leftComponent={<ProductInfo />}
      rightComponenet={<ProductSalesTable />}
    />
  );
};

export default ProductPage;