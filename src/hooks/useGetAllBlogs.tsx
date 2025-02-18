"use client"
import { useState, useEffect } from 'react';

export function useGetAllBlogs() {
  const [data, setData] = useState(null); // State to hold the data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to hold any errors

  console.log('Data---->', data)
  useEffect(() => {
    const fetchData = async () => {
      console.log('GOT---->');
        try {
          const response = await fetch('http://192.168.0.210:1337/api/all-blogs?populate=*');
          // const response = await fetch('/api/all-blogs');

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
      

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array to run only once when the component mounts

  console.log('Data1233545---->', data)
  return { data, loading, error };
}
