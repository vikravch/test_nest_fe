const BASE_URL = 'http://localhost:3000';
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export async function loginUser(
    username: string,
    password: string,
): Promise<boolean> {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({username, password}),
    });
    console.log("username", username, "password", password);
    if (response.ok) {
        const authData = await response.json();
        localStorage.setItem('token', authData['access_token']);
        return true;
    } else {
        return false;
    }
}
