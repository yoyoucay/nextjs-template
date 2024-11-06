import React, { forwardRef } from 'react';
import ButtonInput from './ButtonInput';

interface LabelTextInputProps {
  idInput?: string;
  keyInput?: string;
  nameInput: string;
  contentLabel: string;
  classname: string;
  defaultValue: string;
  autocomplete?: string;
  typeInput?: string;
  btnEdit?: boolean;
  isEdit?: boolean;
  width?: string;
  buttonText: string;
  min?: string;
  max?: string; // Add max prop
  disabled?: boolean;
  placeholder?: string;
  required: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onButtonClick?: (e?: any, event?: any) => void;
}

const LabelTextInput: React.ForwardRefRenderFunction<HTMLInputElement, Partial<LabelTextInputProps>> = (
  {
    idInput,
    keyInput,
    nameInput,
    contentLabel,
    classname,
    defaultValue,
    autocomplete = "off",
    typeInput = 'text',
    disabled = false,
    width,
    btnEdit = false,
    isEdit = false,
    required = false,
    placeholder,
    buttonText = "OK",
    max, // Destructure max
    onChange,
    onKeyDown,
    onFocus,
    onBlur,
    onButtonClick,
    ...props
  },
  ref
) => {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (typeInput === 'number' && max) {
      const value = parseFloat(e.target.value);
      if (value > parseFloat(max)) {
        e.target.value = max; // Reset to max value
      }
    }
    if (onBlur) onBlur(e); // Call the onBlur prop if provided
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (typeInput === 'number' && max) {
        const value = parseFloat(e.currentTarget.value);
        if (value > parseFloat(max)) {
          e.currentTarget.value = max; // Reset to max value
        }
      }
    }
    if (onKeyDown) onKeyDown(e); // Call the onKeyDown prop if provided
  };

  return (
    <div className={(width ? `w-[${width}%]` : "w-[100%]") + " py-2"}>
      <label htmlFor={nameInput} className={typeInput === "hidden" ? "hidden" : "block text-gray-700 text-sm font-md"}>{contentLabel}</label>
      <div className="flex items-center gap-1">
        <input
          {...props}
          id={idInput}
          name={nameInput}
          type={typeInput}
          required={required}
          defaultValue={defaultValue}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          min={typeInput === 'number' ? 0 : ''}
          onFocus={onFocus}
          onBlur={handleBlur}
          disabled={disabled}
          autoComplete={autocomplete}
          placeholder={placeholder}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm ${classname}`}
          ref={ref}
        />
        {btnEdit && (
          <ButtonInput onClick={onButtonClick}><i className={`text-md bi bi-${isEdit ? `check` : `pencil`}`}></i></ButtonInput>
        )}
      </div>
    </div>
  );
};

export default forwardRef(LabelTextInput);
