import React from "react";

type Props = {};

const Header: React.FC<Props> = () => {
    return (
        <div className="h-20 bg-black text-white flex justify-center gap-5 items-center">
            <h1 className="text-xl">Header</h1>
            <h1 className="text-xl">About</h1>
            <h1 className="text-xl">Projects</h1>
        </div>
    );
};

export default Header;
