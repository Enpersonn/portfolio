import { useState } from "react";
import Button from "./Button";

type RadioButtonProps = {
    title: string;
    value: string;

}

const RadioForm = ({
    radioButtons,
    initialValue
}:{
    radioButtons: RadioButtonProps[];
    initialValue?: string;
}) => {
    const [selected, setSelected] = useState<string | null>(initialValue ?? radioButtons[0].value);
    
    return (
        <div className=" flex gap-2 justify-start w-full">
            {radioButtons.map((button) => (
                <Button key={button.value} type="radio" id={button.value} active={selected === button.value} setValue={() => {setSelected(button.value)}} >
                    {button.title}
                </Button>
            ))}
        </div>
    )
}

export default RadioForm;