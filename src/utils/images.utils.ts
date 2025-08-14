export interface PicsumImage {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export const fetchImages = async (limit = 12): Promise<PicsumImage[]> => {
  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?limit=${limit}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
