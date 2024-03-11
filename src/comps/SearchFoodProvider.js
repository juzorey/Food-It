import React, { useState } from 'react';
import searchFoodContextData1 from './SearchFoodDataContext';

const SearchFoodProvider = ({ children }) => {
  const [chartData1, setChartData] = useState({
    series: [
      {
        name: 'Today',
        data: [124, 115, 30],
      },
    ],
  });
  const [carbData, setCarbData] = useState(300)



  return (
    <searchFoodContextData1.Provider value={{ chartData1, setChartData,carbData, setCarbData}}>
      {children}
    </searchFoodContextData1.Provider>
  );
};

export default SearchFoodProvider;