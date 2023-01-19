import React from 'react';
import InfoCard from './InfoCard';
import ClockIcon from "../../../assets/icons/clock.svg";
import LocationIcon from "../../../assets/icons/marker.svg";
import PhoneIcon from "../../../assets/icons/phone.svg";

const InfoCards = () => {

    const cardsData = [
        {
            id: 1,
            name: "Opening Hours",
            description: "Open 9:00AM to 5:00PM",
            icon: ClockIcon,
            bgClass: "bg-neutral",
        },
        {
            id: 2,
            name: "Visit Our Location",
            description: "#House-14, #Road-4, #Sector-12, Uttara",
            icon: LocationIcon,
            bgClass: "bg-secondary",
        },
        {
            id: 3,
            name: "Contact Us Now",
            description: "(+880) 17765-29824",
            icon: PhoneIcon,
            bgClass: "bg-neutral",
        },
    ]

    return (
        <React.Fragment>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[55px]'>
                {
                    cardsData.map((card) => <InfoCard key={card.id} cardInfo={card}></InfoCard>)
                }
            </section>
        </React.Fragment>
    );
};

export default InfoCards;