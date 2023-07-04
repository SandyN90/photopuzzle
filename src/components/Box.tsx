import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";
interface Data {
    setItem: (data: number, itemNo: number) => void;
    value: {
        itemNo: number;
        move: string[];
        photo: string
    }
}

type Direction = "u" | "d" | "l" | "r";
export default function Box(props: Data) {

    function handler1(itemNo: number, direction: Direction) {
        // console.log("🚀 ~ file: Box.tsx:15 ~ handler1 ~ direction:", direction)
        switch (direction) {
            case "u": props.setItem(itemNo - 3, itemNo); break;
            case "d": props.setItem(itemNo + 3, itemNo); break;
            case "l": props.setItem(itemNo - 1, itemNo); break;
            case "r": props.setItem(itemNo + 1, itemNo); break;
        }
    }
    return (
        <div className={`flex justify-center items-center`}>

            <div className={`w-[15vw] h-[15vw] ${props.value.photo} bg-cover m-1`}>
                <div className="my-auto">
                    <div className="flex justify-center pb-5 pt-1">
                        {props.value.move.includes("u") ? <FaArrowUp className="h-10 w-10 hover:text-gray-400" onClick={() => handler1(props.value.itemNo, "u")} /> : ""}

                    </div>
                    <div className="flex justify-around">
                        {props.value.move.includes("l") ? <FaArrowLeft className="h-10 w-10 hover:text-gray-400" onClick={() => handler1(props.value.itemNo, "l")} /> : ""}
                        <p className="flex items-center">{props.value.itemNo}</p>
                        {props.value.move.includes("r") ? <FaArrowRight className="h-10 w-10 hover:text-gray-400" onClick={() => handler1(props.value.itemNo, "r")} /> : ""}
                    </div>
                    <div className="flex justify-center pt-5">
                        {props.value.move.includes("d") ? <FaArrowDown className="h-10 w-10 hover:text-gray-400" onClick={() => handler1(props.value.itemNo, "d")} /> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}