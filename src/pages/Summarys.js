import React from 'react';

const Summarys = ({summarys}) => {
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={summarys.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="text-4xl">{summarys.des}</h2>
                <h2 class="card-title">{summarys.name}</h2>
            </div>
            </div>
    );
};

export default Summarys;