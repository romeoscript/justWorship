import React from "react";

const Home = () => {
  return (
    <div className="mt-[100px] bg-[url('/src/assets/wrapper.svg')] bg-cover bg-center  h-[100vh] flex items-center justify-center">
      <div className="text-center w-3/5">
        <h1 className="text-5xl font-bold my-[1rem] leading-[80px]">Inspiring intimacy with GOD through Worship and Praise</h1>
        <p className="my-[1rem]">Amongst the thousand let your voice be heard.</p>
        <aside>
            <button className="bg-[#E7A304] rounded-[35px] text-black px-[2rem] py-[0.5rem] font-bold mx-[1rem]">Join us</button> <button className="uppercase px-[2rem] py-[0.5rem] rounded-[35px] border-[4px] border-[#E7A304] text-[#E7A304]">Live stream</button>
        </aside>
      </div>
    </div>
  );
};

export default Home;
