
import { useThem } from '../Context/ThemContext';

export default function Card() {
  const { ThemMode } = useThem();

  return (
    <div className={`flex flex-col w-[30%] text-3xl font-sans border-2 shadow-lg ml-[35%] ${ThemMode === 'dark' ? 'border-black-600 bg-gray-800 text-white' : 'border-black-300 bg-white text-black'}`}>
      <div className="flex border-2">
        <img
          className="cover w-[100%]"
          src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=1024x1024&w=is&k=20&c=O_h1ic7M0SWTC40NVzYUTLWE2Yy8511S8QPUGEUT9tE="
          alt='img'
        />
      </div>
      <div className="flex flex-col border-2">
        <span className="ml-[13%]">Welcome to My Course</span>
        <button className="m-2 bg-blue-700 w-[30%] h-10 rounded-lg ml-[24%] text-xl font-sans hover:bg-green-600">Subscription</button>
      </div>
    </div>
  );
}
