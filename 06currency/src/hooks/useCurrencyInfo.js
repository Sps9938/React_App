import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
    // console.log(`currency is: ${currency}`);
    
    
    const [data, setData] = useState({})
    // console.log("Intial value of data: ",data);

    useEffect(() => {
    
        
        fetch(`https://currency-rate-exchange-api.onrender.com/${currency}`)
        .then((res) => {
            if(!res.ok)
            {
                throw new Error("Network response was not ok")
            }
            
            return res.json()
        })
        .then((res) => setData(res.rates[currency]))
        
    
        .catch((error) => {
            console.error("Fetch error", error)
        })
    },[currency])

    // console.log("Update data:",data);
    

    return data;
   
    
}

export default UseCurrencyInfo;