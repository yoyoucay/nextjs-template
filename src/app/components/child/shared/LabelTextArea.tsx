import React, { forwardRef, TextareaHTMLAttributes } from 'react';

interface LabelTextAreaProps {
  nameInput: string;
  contentLabel: string;
  classname: string;
  defaultValue: string;
  autocomplete?: string;
  typeInput?: string;
  min?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const LabelTextArea: React.ForwardRefRenderFunction<HTMLInputElement, Partial<LabelTextAreaProps>> = (
  {
    nameInput,
    contentLabel,
    classname,
    defaultValue,
    autocomplete = "on",
    typeInput = 'text',
    disabled = false,
    onChange,
    onKeyDown,
    onFocus,
    ...props
  },
  ref
) => {
  return (
    <div className="w-[100%]">
      <label htmlFor={nameInput} className={typeInput == "hidden" ? "hidden" : "" + " block text-gray-700 text-sm font-md"}>{contentLabel}</label>
      <textarea
        {...props}
        name={nameInput}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        autoComplete={autocomplete}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm ${classname}`}
      />
    </div>
  );
};

export default forwardRef(LabelTextArea);