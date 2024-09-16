const page = () => {
  return (
    <div className="w-full h-full p-10">
      <div className="w-full grid grid-cols-11 h-full">
        <div className="col-span-3 p-3  h-full flex flex-col gap-4">

        {/* {types.map((type,index) => {
        const key = type.key 
        const values = type.values 
        return (  
            <Filter 
            key={index}
            base={key}
            list={values}
            isOpen={index === index}
            handleSelectFilter={handleSelectFilter}     
          />
        )
      })} */}
        compitition page
        </div>
        <div className="col-span-8 bg-slate-400 h-[100dvh]">
          
        </div>
      </div>
    </div>
  );
};

export default Page