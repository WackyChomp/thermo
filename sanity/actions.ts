import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetCollectionsParams{
  query: string;
  category: string;
  page: string;
}

export const getCollections = async (params: GetCollectionsParams) => {
  const { query, category, page } = params

  try {
    const collections = await readClient.fetch(
      // build query
      groq`${buildQuery({
        type: 'collection',
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        downloadLink,
        'image' : poster.asset -> url,
        views,
        slug,
        category,
      }`
    );
    
    return collections;

  } catch (error) {
    console.log(error)
  }
}