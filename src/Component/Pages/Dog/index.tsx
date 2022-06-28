import { useContext } from "react";
import { Dogs } from "../../Data";
import { DogItem } from "./DogItem";
import { data } from "../../Interface";
import { Themes } from "../../useContext/Contexts";
import "./Reponsive.module.scss";

export const Dog = () => {
  const arrayData = useContext(Themes);
  const handleCheck = (id: number) => {
    const datas = Dogs.find((dog: data) => id === dog.id);
    if (datas) arrayData.setDataContext([...arrayData.dataContext, datas]);
  };

  return (
    <div className="swappers">
      {Dogs.map((dog) => (
        <DogItem key={dog.id} dog={dog} handleCheck={handleCheck} />
      ))}
    </div>
  );
};
