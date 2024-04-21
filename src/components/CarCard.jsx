import { useState } from "react";

const CarCard = ({ title, image, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg m-4 bg-stone-100">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={toggleModal}
          className="bg-purple-500 hover:bg-purple-700 transition duration-300 text-white font-bold py-2 px-4 rounded"
        >
          Подробнее
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
          <div className="shadow-lg rounded-md bg-stone-100 p-4 mx-auto ">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p>{description}</p>
            <button
              onClick={toggleModal}
              className="mt-4 bg-red-500 hover:bg-red-700 transition duration-300 text-white font-bold py-2 px-4 rounded"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarCard;
