import { useState } from "react";
import { data } from "../../Interface";
import "./Reponsive.module.scss";
interface dataDog {
  dog: data;
  handleCheck: (id: number) => void;
}

export const DogItem: React.FC<dataDog> = (props) => {
  const { dog, handleCheck } = props;
  const [checkCart, setCheckCart] = useState<boolean>(false);

  const handleClick = () => {
    setCheckCart(true);
  };

  return (
    <div className="">
      <div className="bg-[rgb(217,226,220)] rounded-[10px] h-[400px] flex flex-col ">
        <div className="flex items-center text-center justify-between md:p-[30px] py-[35px] px-[10px]">
          <img
            src={dog.imageUrl}
            alt=""
            className="md:w-[100px] md:h-[100px] rounded-[50%]  object-cover w-[70px] h-[70px] "
          />
          <div className="pr-[10px] font-roboto ">
            <h2 className='text-[1.6rem]'>{dog.name}</h2>
            <h4 className='text-[1.2rem]'>{dog.breed}</h4>
          </div>
        </div>
        <p className="title">{dog.description}</p>
        <p className="w-full flex text-center items-center justify-center font-Roboto font-bold  md:text-[20px] text-[17px] mt-auto md:mb-[15px] mb-[30px]">{`${dog.price} $`}</p>
        <div
          className="w-full flex text-center items-center justify-center"
          onClick={handleClick}
        >
          <button
            className={checkCart ? "check " : "btn mt-auto"}
            onClick={() => handleCheck(dog.id)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
