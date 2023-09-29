const API_URI: string = process.env.API_URI!;
const API_KEY: string = process.env.API_KEY!;

const get = async (resource: string) => {
  try {
    const endpoint: string = `${API_URI}${resource}`;
  
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: { "X-CMC_PRO_API_KEY": API_KEY }
    });
    
    if (!response.ok) {
      throw new Error(`API response error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
    
  } catch (error) {
    return error;
  }
}

export default {
  get,
}