import { Fragment } from "react";
import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  {id: 'p1', title: 'product 1'},
  {id: 'p2', title: 'product 2'},
  {id: 'p3', title: 'product 3'}
];

function ProductsPage() {
  return (
    <Fragment>
      <h1>Products page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((x) => (
          <li key={x.id}>
            <Link to={`/products/${x.id}`}>{x.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ProductsPage;
