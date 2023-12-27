import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

//definire le routes supportate dall'applicazione
//ovvero impostare le corrispondenze tra i path dell'URL e dei componenti
//ogni oggetto dell'array di createBrowserRouter definisce un singolo route
//bisogna definire le varie proprietà: le più importanti sono il path ed il component corrispondente
const myRouter = createBrowserRouter([
  //elemento che wrappa un certo numero di pagine
  {
    path: "/",
    element: <RootLayout />,
    //elemento di errore per il path
    errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage />},
      { path: "/products/:productId", element: <ProductDetailPage />},
      //altre corrispondenze...
    ],
  },
]);

// //vecchie versioni di react-router-dom permettevano di creare il router solo tramite dei componenti
// //mentre le versioni più nuove supportano entrambi i metodi
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>} />
//     <Route path="/products" element={<ProductsPage/>} />
//   </Route>
// );
// const myRouter = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
