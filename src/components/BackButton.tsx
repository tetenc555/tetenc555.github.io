import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import "../css/BackButton.css";
import { useEffect, useState } from "react";

type BackButtonProps = {
    backUrl: string;
}

export default function BackButton({ backUrl }: BackButtonProps) {
    const [size, setSize] = useState(30);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setSize(20);
            } else {
                setSize(30);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <Link to={backUrl}>
            <button className="back-button"><IoChevronBack  size={size}/></button>
        </Link>
    );
}
