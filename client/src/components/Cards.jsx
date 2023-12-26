import React from 'react';
import  Height  from '../assets/height.png';
import  Weight  from '../assets/weight.png';
import  Bloodpressure  from '../assets/bloodpressure.png';


// export const CardData = [
//   {
//     img: Height,
//     title: 'Height',
//     value: '5ft 9 in',
//   },
//   {
//     img: Weight,
//     title: 'Weight',
//     value: '65 kg',
//   },
//   {
//     img: Bloodpressure,
//     title: 'Blood Pressure',
//     value: '120/80 mmHg',
//   },
// ];

// const Cards = () => {
//   return (
//     <div className="flex space-x-4">
//       {CardData.map((card, index) => (
//         <Cards key={index} img={card.img} title={card.title} value={card.value} />
//       ))}
//     </div>
//   );
// };
const Cards = () => {
  return (
    <div className="flex flex-col justify-center items-center border border-green w-[70px]">
      <img src={Height} alt="" className='h-[54px] w-[54px]'/>
      <p>Height</p>
      <p>6ft 9in</p>

      <img src={Weight} alt="" className='h-[54px] w-[54px]'/>
      <p>Height</p>
      <p>6ft 9in</p>

      <img src={Bloodpressure} alt="" className='h-[54px] w-[54px]'/>
      <p>Height</p>
      <p>6ft 9in</p>

    </div>
  );
};

export default Cards;
