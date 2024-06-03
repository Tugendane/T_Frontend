import React, { useState } from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGear } from "react-icons/fa6";
import { FaRightFromBracket } from "react-icons/fa6";
export default function ChooseMethod() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  

    return (
        <div>
            <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>...</div>
            {isPopoverOpen && (
                <ul className="bg-white text-black p-5 absolute z-10 shadow-md ">
                    <li className="">
                        <div className="flex gap-3">
                            <FaGear />
                            <Link href={"../Login"}>Settings</Link>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <div className="flex gap-3">
                            <FaRightFromBracket />
                            <Link href={"../Login"}>logout</Link>
                        </div>
                    </li>
                </ul>
            )}
        </div>
    );
}
