
export async function fetchProducts() {
    try {
        const response = await fetch('/api/products');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        } catch (error) {
        console.error('Error fetching product data:', error);
        return [];
        }
}
