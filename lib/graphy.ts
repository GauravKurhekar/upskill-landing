// Graphy API Client
const GRAPHY_API_BASE = 'https://api.graphy.com/v1';

export interface GraphyCourse {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  thumbnail: string;
  instructor: {
    name: string;
    image: string;
  };
  modules: Array<{
    id: string;
    title: string;
    order: number;
    lessons: Array<{
      id: string;
      title: string;
      type: string;
      duration?: string;
    }>;
  }>;
  features: string[];
  language: string;
  students?: number;
  rating?: number;
  duration?: string;
}

export async function fetchGraphyCourse(courseId: string): Promise<GraphyCourse | null> {
  try {
    const mid = process.env.NEXT_PUBLIC_GRAPHY_MID;
    const apiKey = process.env.NEXT_PUBLIC_GRAPHY_API_KEY;

    if (!mid || !apiKey) {
      console.error('Graphy API credentials not found');
      return null;
    }

    // Graphy API endpoint for fetching product/course details
    const response = await fetch(`${GRAPHY_API_BASE}/products/${courseId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'MID': mid,
        'Authorization': `Bearer ${apiKey}`,
      },
      cache: 'no-store', // Disable cache for fresh data
    });

    if (!response.ok) {
      console.error('Graphy API error:', response.status);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Graphy course:', error);
    return null;
  }
}

export async function fetchAllGraphyCourses(): Promise<GraphyCourse[]> {
  try {
    const mid = process.env.NEXT_PUBLIC_GRAPHY_MID;
    const apiKey = process.env.NEXT_PUBLIC_GRAPHY_API_KEY;

    if (!mid || !apiKey) {
      console.error('Graphy API credentials not found');
      return [];
    }

    const response = await fetch(`${GRAPHY_API_BASE}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'MID': mid,
        'Authorization': `Bearer ${apiKey}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Graphy API error:', response.status);
      return [];
    }

    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Error fetching Graphy courses:', error);
    return [];
  }
}
