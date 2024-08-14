const Products = ({ no, name, text, image }) => {
  return (
    <>
      <div className=" px-[30px] py-[80px] inline-flex flex-col justify-center items-center bg-blue-600 text-xl font-bold text-white shadow-lg rounded-lg w-12 h-12">
        {no}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mt-4 sm:text-2xl lg:mt-6">
        {name}
      </h3>
      <p className="text-sm font-normal text-gray-700 mt-2 sm:text-base sm:mt-3 text-center h-14">
        {text}
      </p>
    </>
  );
};

export default Products;
