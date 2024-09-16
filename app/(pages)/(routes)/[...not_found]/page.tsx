import { notFound } from "next/navigation";

export default function NotFoundCatchAll() {
    return (
        <div className=" flex justify-center items-center">
            <div className=""> {notFound()}</div>
        </div>
    )
}

