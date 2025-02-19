"use client";
import { useState, useEffect } from "react";

export function useGetRecentBlogs() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("GOT---->");
      try {
        const response = await fetch(
          "http://localhost:1337/api/all-blogs?populate=*&sort[updatedAt]=desc&pagination[page]=1&pagination[pageSize]=3",
        );

        const result = await response.json();
        console.log("result====>", result);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        setData(result);
      } catch (error: any) {
        console.log("Response Status:", error);
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
