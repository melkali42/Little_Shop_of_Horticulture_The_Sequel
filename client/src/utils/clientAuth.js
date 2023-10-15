import decode from 'jwt-decode';

// we can use a class to define all the methods we need to interact with our token
class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() { // checking for valid token by calling isTokenExpired method
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // checking if token is expired
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }

    getToken() { // retrieving token from localStorage
        return localStorage.getItem('user_token');
    }

    login(idToken) {
        localStorage.setItem('user_token', idToken); // saving token to localStorage
        window.location.assign('/'); // redirecting user to home page
    }

    logout() {
        localStorage.removeItem('user_token'); // removing token from localStorage
        window.location.assign('/'); // redirecting user to home page
    }
}

export default new AuthService();