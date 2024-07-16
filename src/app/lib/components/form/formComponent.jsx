import React from "react";
import { SubmitButton } from "@/app/lib/components/buttons/SubmitButton";
import { fieldComponents } from "../input/FieldComponents";

const FormComponent = ({
  formFields,
  initialValues,
  submitText = "Add",
  direction = "col",
  formClassName = "",
  buttonClassName = " bg-yellow-500 ",
  step,
  onStepBack,
  action,
}) => {
  // Función para determinar el estilo basado en la dirección
  function getStyleByDirection() {
    if (direction === "col") return "";
    if (direction === "row") return "md:grid md:grid-cols-2 md:gap-4 ";
  }

  return (
    <form
      action={action}
      className={
        formClassName +
        " flex w-full flex-col justify-end gap-2 rounded-b-lg "
      }
    >
      <div
        className={
          "mb-4 mt-4 w-full rounded-md border-b-[#e9dddd] " +
          getStyleByDirection()
        }
      >
        {formFields.map((field, index) => (
          <div key={index}>
            {Object.keys(field).length === 0 ? (
              <div className="h-0.5 w-full"></div>
            ) : (
              <div key={field.name} className="relative">
                <label
                  className="mb-2 block text-sm font-medium"
                  htmlFor={field.name}
                >
                  {field.label}
                </label>

                {fieldComponents[field.type]
                  ? fieldComponents[field.type]({
                      ...field,
                      value: initialValues?.[index],
                    })
                  : fieldComponents["input"]({
                      ...field,
                      value: initialValues?.[index],
                    })}
              </div>
            )}
          </div>
        ))}
      </div>

      <SubmitButton
        className={
          "mb-4  w-full px-5 py-2 border-none rounded-md bg-violet-800 text-white cursor-pointer " +
          buttonClassName
        }
        text={submitText}
      />

      {onStepBack && step != null && (
        <>
          {step[0] > 0 && (
            <button
              onClick={onStepBack}
              className={
                " rounded-md bg-[#424242] px-4 py-2 font-semibold text-[#8F8F8F]  shadow-md hover:bg-[#686868] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 "
              }
            >
              Atrás
            </button>
          )}

          <div className="mt-4 flex items-center justify-center">
            {Array.from({ length: step[1] }).map((_, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full ${
                    idx < step[0] + 1 ? "bg-[#ECC94B]" : "bg-gray-300"
                  }`}
                >
                  <span className="text-sm font-medium text-white">
                    {idx + 1}
                  </span>
                </div>
                {idx < step[1] - 1 && (
                  <div className="flex-auto border-t-2 border-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </form>
  );
};

export default FormComponent;
