import AsyncSelect from 'react-select/async';
import Select from 'react-select'
import { useCallback, useEffect, useState } from 'react';
import { DEBOUNCE_TIMEOUT } from '@/global/lib/utils/constans';

interface SelectInputProps {
    typeSelect?: string;
    nameInput: string;
    labelType?: string;
    contentLabel?: string;
    options: any;
    disabled?: any;
    isMulti?: boolean;
    children?: React.ReactNode;
    defaultValue?: any;
    width?: string;
    onChange: (selectedOption: any, event: any) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
    typeSelect = 'async',
    nameInput,
    labelType,
    contentLabel,
    onChange,
    options,
    disabled = false,
    children,
    isMulti = false,
    defaultValue,
    width, // Add width as a prop
    ...props
}) => {
    const [debounceTimeout, setDebounceTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    const handleOnChange = useCallback((selectedOption: any, event: any) => {
        if (onChange) {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
            setDebounceTimeout(setTimeout(() => {
                // Check if the selectedOption is null and handle setting the default value
                if (selectedOption === null) {
                    onChange(defaultValue, event);
                } else {
                    // Pass the event value along with the selected option
                    onChange(selectedOption, event);
                }
            }, DEBOUNCE_TIMEOUT)); // Debounce delay in milliseconds
        }
    }, [onChange, defaultValue, debounceTimeout]);

    useEffect(() => {
        return () => {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
        };
    }, [debounceTimeout]);

    return (
        <div className={`w-full ${width ? width : ''}`}>
            <label htmlFor={nameInput} className={`${labelType ?? ''} block text-gray-700 text-sm font-md`}>{contentLabel}</label>
            {typeSelect == 'async' ?
                <AsyncSelect
                    {...props}
                    cacheOptions
                    defaultOptions
                    name={nameInput}
                    className={`w-full sm:w-auto ${width ? width : ''}`} // Use the width prop to set the width
                    onChange={handleOnChange}
                    loadOptions={options}
                    defaultValue={defaultValue}
                    isMulti={isMulti}
                    isDisabled={disabled}
                    menuPosition="fixed"
                    menuPlacement="auto"
                /> : ''
            }

            {typeSelect == 'static' ?
                <Select
                    {...props}
                    name={nameInput}
                    className={`w-full font-semibold text-xs sm:w-auto ${width ? width : ''}`} // Use the width prop to set the width
                    onChange={handleOnChange}
                    options={options}
                    isDisabled={disabled}
                    defaultValue={defaultValue}
                    isMulti={isMulti}
                    menuPosition="fixed"
                    menuPlacement="auto"
                /> : ''
            }
        </div>
    );
};

export default SelectInput;
