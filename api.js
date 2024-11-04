const API_URL =api.thedogapi.com;
const api_key = live_hsVfYYJTRYhHzOqPBSuCTWK7xlIpxJ5YVyorj28SygtMGTeJvEaYNm3VJwxE261H
export const fetchTrucks = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.message; // Just used images of dogs to represent tow trucks
    } catch (error) {
        console.error('Error fetching trucks:', error);
    }
};