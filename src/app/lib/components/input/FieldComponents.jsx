// FieldComponents.js
import React from "react";

// Definimos una constante para la clase que se repite
const inputClass =
  "mb-4 block w-full bg-transparent border border-gray-300 rounded-md p-3  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

const fieldComponents = {
  textarea: (field) => (
    <textarea
      key={field.name}
      name={field.name}
      placeholder={field.placeholder}
      defaultValue={field.value} // Usando defaultValue para valores iniciales
      className={field.className || inputClass} // Aplicamos la constante aquí
      required={field.required}
    />
  ),
  select: (field) => (
    <select
      key={field.name}
      name={field.name}
      className={field.className || inputClass} // Aplicamos la constante aquí
      defaultValue={field.value || ""} // Usando defaultValue para valores iniciales
      required={field.required}
      onChange={field.onChange}
    >
      <option value="" disabled>
        Seleccione una opción
      </option>
      {field.options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  ),
  input: (field) => (
    <input
      key={field.name}
      name={field.name}
      placeholder={field.placeholder}
      type={field.type}
      defaultValue={field.value} // Usando defaultValue para valores iniciales
      className={field.className || inputClass} // Aplicamos la constante aquí
      required={field.required}
      readOnly={field.readonly}
      step={field.step}
    />
  ),
};

export { fieldComponents };
