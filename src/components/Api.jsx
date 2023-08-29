import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import MenuCard from './MenuCard';
import Loader from './Loader';

function Api() {
    const [meals, setMeals] = useState([]);
    const [menu,setMenu]=useState([])
    const [loading,setLoading]=useState(true)
    

    useEffect(() => {
        // Function to fetch data using Axios
        const fetchMeals = async () => {
          try {
            const api_url="https://www.themealdb.com/api/json/v1/1/categories.php"
            const response = await axios.get(api_url); // Replace 'chicken' with any other meal or query you want
            setMeals(response.data.categories            );
            console.log("ssssssss",response)
            setLoading(false)
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
           
          }
        };
         
        const fetchMenu = async () => {
          try {
            const api_url1="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
            const response1 = await axios.get(api_url1); // Replace 'chicken' with any other meal or query you want
            setMenu(response1.data.meals);
            console.log("RESPONCE",response1)
            setLoading(false)
            
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
            // setError(error.message)
          }
        };
    
    
        // Call the function to fetch data
        fetchMeals();
        fetchMenu();
      }, []);
    
  return (
    <div>
        {!loading ? <MenuCard menu={menu} meals={meals} loading={loading}/> :<Loader/> }
       
    </div>
  )
}

export default Api