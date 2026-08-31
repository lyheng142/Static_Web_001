import type { Food } from "@/types/food";

export const API_BASE_URL =
  "https://sombobaeb.cheat.casa";

type FoodListResponse =
  | Food[]
  | {
      items?: Food[];
      data?: Food[];
      results?: Food[];
    };

async function apiFetch<T>(
  path: string,
): Promise<T> {
  const response = await fetch(
    `${API_BASE_URL}${path}`,
    {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 300,
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Food API returned ${response.status}`,
    );
  }

  return response.json() as Promise<T>;
}

function extractFoods(
  data: FoodListResponse,
): Food[] {
  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data.items)) {
    return data.items;
  }

  if (Array.isArray(data.data)) {
    return data.data;
  }

  if (Array.isArray(data.results)) {
    return data.results;
  }

  return [];
}

export async function getFoods(
  limit = 100,
): Promise<Food[]> {
  try {
    const data =
      await apiFetch<FoodListResponse>(
        `/food-items?skip=0&limit=${limit}`,
      );

    return extractFoods(data);
  } catch (error) {
    console.error(
      "Unable to load foods:",
      error,
    );

    return [];
  }
}

export async function getFood(
  id: string,
): Promise<Food | null> {
  try {
    return await apiFetch<Food>(
      `/food-items/${encodeURIComponent(id)}`,
    );
  } catch (error) {
    console.error(
      `Unable to load food ${id}:`,
      error,
    );

    return null;
  }
}