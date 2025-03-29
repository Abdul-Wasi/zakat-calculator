const ResultCard = ({ zakatAmount }) => {
    return zakatAmount !== null ? (
      <div className="bg-green-500 text-white p-4 rounded-lg max-w-lg mx-auto mt-6 text-center">
        <h2 className="text-2xl font-bold">Your Zakat</h2>
        <p className="text-lg mt-2">You need to pay: <strong>{zakatAmount}</strong></p>
      </div>
    ) : null;
  };
  
  export default ResultCard;
  