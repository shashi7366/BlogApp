import { forwardRef,useId } from "react";


const Input=forwardRef(function ({
    label,
    type="text",
    className,
    ...props
},ref){
    const id=useId();
    return (
        <div key={id} className="w-3/5 m-4 mx-auto flex justify-center items-center">
            {label && <label className="text-light mx-2">{label}</label>}
            <input
            type={type}
            className={`${className} w-full p-2 border rounded-full`}
            {...props}
            ref={ref}
            />
        </div>
    );
});

export default Input;

