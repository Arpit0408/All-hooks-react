import { useEffect , useState} from "react";
function App() {


const [count, setCount] = useState(0);
const [loading , setLoading] = useState(true);
const [products ,setProducts] = useState(null);
const [error , setError] = useState(null);




// get product by id
useEffect(() => {
  async function fetchData() {
    try {
      const url = 'https://api.freeapi.app/api/v1/public/randomproducts/30';
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      const data = await response.json();
setProducts(data.data);
    console.log(data);
    
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }
  fetchData();

},[]);
    console.log("products",products);

  return (
    <>
    <h1>UseEffect</h1>
<button onClick={() => setCount(count + 1)}>mybtn</button>    

<h1>Count: {count}</h1>
{loading ? <p>Loading...</p> : error ? <p>Error: {error}</p> :   <div style={{
          width: "300px",
          padding: "20px",
          margin: "20px auto",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
        }}>
          <img 
            src={products.thumbnail}
            alt={products.title}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h3>{products.title}</h3>
          <p>{products.description}</p>
          <p><b>Price: ${products.price}</b></p>
        </div>}
    </>
    
  )
}

export default App
