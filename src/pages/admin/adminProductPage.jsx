import axios from 'axios';
export default function AdminProductPage() {

    
axios.get("http://localhost:5000/api/products") .then((res)=>{
    console.log(res);
})

    return (
        <div className="admin-product-container">
            <h1>Welcome to Admin Product Page</h1>
          </div>
    )
}  