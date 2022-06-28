import { useContext } from "react";
import { Themes } from "../../useContext/Contexts";
import { Link } from "react-router-dom";
//@ts-ignore
import styled from "styled-components";
import { data } from "../../Interface";
import { Routes } from "../../Config/index";
export const Cart = () => {
  const data = useContext(Themes);
  const sum = data.dataContext.reduce((sum: number, dog: data) => {
    return sum + Number(dog.price);
  }, 0);
 const handleClick=()=>{
    data.setDataContext([])
 }
  return (
    <div className="">
      <Title>CHECKOUT:</Title>
      <Carts>
        {data.dataContext.map((dog: data, index: number) => {
          return (
            <CartItem key={index}>                               
              <CartImagePop>
                <CartImage src={dog.imageUrl} alt="" />
              </CartImagePop>
              <Name>{`${dog.name} : ${dog.price} $`}</Name>
            </CartItem>
          );
        })}
        <Sum>{`TOTAL : ${sum} $`}</Sum>
      </Carts>
      <ButtonPoper>
        <Done onClick={handleClick}>Done</Done>
      </ButtonPoper>
      <ButtonPoper>
        <Link to={Routes.home}>
          <GoBackHome >Go Back Home</GoBackHome>
        </Link>
      </ButtonPoper>
    </div>
  );
};

const Title = styled.h2`
  width: 100%;
  text-align: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 30px 0;
`;

const Sum = styled.h2`
  width: 100%;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;

  padding: 20px 0;
`;

const Carts = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.3);
  justify-content: center;
  width: 300px;
  margin: auto;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const CartImagePop = styled.div`
  margin-right: 20px;
  width: 70px;
  height: 70px;
`;

const CartImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Name = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const ButtonPoper = styled.div`
  justify-content: center;
  margin: 20px 0;
  display: flex;
  width: 100%;
`;
const Done = styled.button`
  display: block;
  background-color: rgb(204, 141, 144);
  font-size: 1.7rem;
  font-weight: bold;
  border-radius: 8px;
  width: 100px;
  height: 50px;
  cursor: pointer;
  transition: all 0.25s linear;
  &:hover {
    background-color: red;
    color: #fff;
  }
`;

const GoBackHome = styled(Done)`
  width: 200px;
`;
