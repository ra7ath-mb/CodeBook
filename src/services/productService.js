const API_BASE_URL = process.env.REACT_APP_HOST || "http://localhost:8000";

export async function getProductList({searchTerm}) {
     const response = await fetch(
          `${API_BASE_URL}/444/products/?name_like=${searchTerm ? searchTerm : ""}`,
        );
        const data = await response.json();
         if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
    }
        return data;
}

export async function getProduct(id){
    const response = await fetch(`${API_BASE_URL}/444/products/${id}`);
    const data = await response.json();
     if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
    }
    return data;

}

export async function getFeaturedList(){
    const response = await fetch(`${API_BASE_URL}/444/featured_products/`);
          const data = await response.json();
           if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
    }
          return data;
}
