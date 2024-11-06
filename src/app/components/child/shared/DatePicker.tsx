import React, { useState } from 'react';
interface DatePickerProps {
    idInput?: string;
    nameInput: string;
    labelType?: string;
    className?: string;
    disabled?: boolean;
    defValue?: string;
    value?: Date;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, rowdata?: any) => void;
    children?: React.ReactNode;
    minToday?: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({
    idInput,
    nameInput,
    labelType,
    className,
    defValue,
    disabled = false,
    value,
    minToday = false,
    onChange,
}) => {
    const today = new Date().toISOString().split('T')[0]; // get today's date in YYYY-MM-DD format
    return (
        <div className="w-[100%]">
            <label htmlFor={nameInput} className={labelType == "hidden" ? "hidden" : "" + "block mb-2 text-xs font-medium text-gray-700"}>
                Date
            </label>
            <input
                id={idInput}
                name={nameInput}
                disabled={disabled}
                type="date"
                min={minToday ? today : undefined}
                defaultValue={defValue}
                onChange={onChange}
                className={`${className} text-center block w-full p-2 pl-10 border-gray-300 rounded-md`}
            />
        </div>
    );
};

export default DatePicker;