import React from 'react';

const InfoCard = ({ cardInfo }) => {

    const { name, description, icon, bgClass } = cardInfo;

    return (
        <React.Fragment>
            <div className={`flex items-center gap-x-[15px] px-[55px] py-[35px] bg-primary rounded-[8px] text-[#000] shadow-xl my-[85px] ${bgClass}`}>
                <img className='w-[35px] h-[35px]' src={icon} alt="cardIcon" />
                <div>
                    <h2 className="font-caveat font-bold text-[20px]">{name}</h2>
                    <p className='font-pacifico my-[8px]'>{description}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default InfoCard;