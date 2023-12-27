import { Fragment } from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {

  const params = useParams();

  //params.productId è definito in createBrowserRouter in un segmento contenente ':', 
  //quindi è accessibile tra i parametri
  return (
  <Fragment>
    <h1>DETAILS</h1>
    <p>{params.productId}</p>
  </Fragment>
  )
}

export default ProductDetailPage;
