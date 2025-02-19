"use client";
import { useState, useEffect } from "react";

export function useGetAllBlogs(page: number, pageSize: number) {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337/api/all-blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
        );
        const result = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        setData(result);
      } catch (error) {
        setError((error as any)?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize]);

  return { data, loading, error };
}
