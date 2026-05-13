const API_BASE_URL = process.env.REACT_APP_HOST || "http://localhost:8000";

async function authRequest(endpoint, authDetails) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetails)
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, requestOptions);
    const data = await response.json();

    if (!response.ok) {
        return {
            error: data?.message || data || response.statusText || "Authentication failed"
        };
    }

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
}

export async function login(authDetails) {
    return authRequest("/login", authDetails);
}

export async function register(authDetails) {
    return authRequest("/register", authDetails);
}

export async function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}
