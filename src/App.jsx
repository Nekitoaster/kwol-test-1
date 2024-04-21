import { useEffect, useState } from "react";
import CarCard from "./components/CarCard";

function App() {
  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            title: "Tesla Model S",
            image: "public/scale_1200.jpg",
            description: "Превосходные эксплуатационные характеристики.",
          });
        }, 3000);
      });
    };

    fetchCarData().then((data) => {
      setCarData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mx-auto w-screen h-screen content-center">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <CarCard
          title={carData.title}
          image={carData.image}
          description={carData.description}
        />
      )}
    </div>
  );
}

export default App;
