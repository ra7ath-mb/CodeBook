const API_BASE_URL = process.env.REACT_APP_HOST || "http://localhost:8000";
const getSession = ()=> {
  const token = JSON.parse(sessionStorage.getItem('token'));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  return { token, cbid }
}

export async function getUser(){
    const {token, cbid} = getSession()
    const requestOption = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
    }

    const response = await fetch(`${API_BASE_URL}/600/users/${cbid}`, requestOption )
     if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
      }
    const data = await response.json();
    return data;
}

export async function getUserOrder(){
    const {token, cbid} = getSession();
    const response = await fetch (`${API_BASE_URL}/660/orders?user.id=${cbid}`, {
          method: "GET",
          headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
        });
         if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
      }
        const data = await response.json();
    return data;
}

export async function createOrder(cartList, user, total){
  const {token} = getSession()
    const order = {
      cartList: cartList,
      amountpaid: total,
      quantity: cartList.length,
      user: {
        name: user.name,
        email: user.email,
        id: user.id
      }
    }
    const requestOption = {
        method:"POST", 
        headers: {"Content-Type": "application/json", "Authorization":`Bearer ${token}`},
        body: JSON.stringify(order)
    };
    const response = await fetch(`${API_BASE_URL}/660/orders`, requestOption )
     if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        throw error;
      }
    const data = await response.json();
    return data;
}
