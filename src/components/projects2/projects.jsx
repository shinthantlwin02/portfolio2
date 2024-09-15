import one from "../../assets/home.png"
import two from "../../assets/library.png"

const projects = () => {
    
  return (
    <div>
      <div className="mb-20">
        <div className='text-center'>
          <h6 className=' text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 inline-block uppercase tracking-[4px]'>
            Projects
          </h6>
        </div>
        <div className=' mt-[20px] text-center'>
          <h2 className=' text-[36px] sm:text-[40px] md:text-[50px] font-bold dark:text-[#fff] text-[#000]'>
            I bring results
            <br />
            My clients are proof
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20 px-6 md:px-20">
        <a href="https://www.figma.com/file/aIrXKygW4F5jjP7o2fEvqG?locale=en&type=design" className="p-5 md:p-10 rounded-md border border-gray-400 hover:bg-gray-200">
            <h1 className="text-md text-gray-700 font-bold mb-4">Good Food - restaurant</h1>
            <img src={one} className="w-full h-[250px] md:h-[400px] object-cover"/>
        </a>
        <a href="https://www.figma.com/file/XI4bwHqG3Bbqxlmo0jwKTX?locale=en&type=design" className="p-5 md:p-10 rounded-md border border-gray-400 hover:bg-gray-200">
            <h1 className="text-md text-gray-700 font-bold mb-4">BUC library</h1>
            <img src={two} className="w-full h-[250px] md:h-[400px] object-cover"/>
        </a>
      </div>
    </div>
  );
};

export default projects;
