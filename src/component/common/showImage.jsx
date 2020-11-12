import React from 'react';
import { Img } from 'react-image';
import HashLoader from "react-spinners/HashLoader";

const ShowImage = ({ image }) => {
    return (
        <Img
            src={[`https://toplearnapi.ghorbany.dev/${image}`,
                "https://via.placeholder.com/150x100"
            ]}
            loader={
                <div className="text-center mx-auto ">
                    <HashLoader loading={true} color={"#ff0059"} size={50} />
                </div>
            }
        />
    );
}

export default ShowImage;