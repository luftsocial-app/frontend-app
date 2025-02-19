"use client"
import { useState, useEffect } from 'react';

export function useGetAllBlogs(page: number, pageSize: number) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('Data---->', data)
  useEffect(() => {
    const fetchData = async () => {
      console.log('GOT---->');
        try {
          const response = await fetch(`http://192.168.0.210:1337/api/all-blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`);

          const result = await response.json();
          console.log( 'result====>',result); 
          
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          } 
      
          setData(result);
        } catch (error:any) {
          console.log('Response Status:', error);
          setError(error?.message);
        } finally {
          setLoading(false);
        }
      };
      

    fetchData();
  }, [page, pageSize]);

  console.log('Data1233545---->', data)
  return { data, loading, error };
}
