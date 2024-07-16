"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { updateAccount } from "../actions";
import FormComponent from "@/app/lib/components/form/formComponent";
import { formFields } from "@/app/lib/data/userData";

import { mdiAccountEdit, mdiDeleteOutline, mdiTagEditOutline } from "@mdi/js";
import Mdi from "@/app/lib/components/icons/mdi";
export default function AccountForm({ user }) {
  console.log(user);
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("/user.svg"); // Estado inicial con la imagen por defecto

  const handleClick = () => {
    console.log("click");
    // Paso 4: Usar la referencia para disparar el clic en el input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result); // Actualiza el estado con la URL de la imagen
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <main className="mx-3 my-auto md:mx-auto w-fit">
      <h1 className="text-center mb-5 text-4xl">Edit Account</h1>

      <div className="relative min-w-[350px] md:w-[400px] border border-gray-300 rounded-md shadow-[0px_0px_5px_#ffffffff] p-5">
        <div  className="flex  justify-between items-center mb-2">
          <div onClick={handleClick} className="cursor-pointer flex items-center">
            <Image
              className="me-2 rounded-full aspect-square"
              width={30}
              height={30}
              src={imageSrc}
              alt="avatar"
            />
            <span className="me-1 mt-2">Editar</span>
            <Mdi path={mdiAccountEdit} />
            <input
              ref={fileInputRef}
              className="hidden bg-red-500"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="cursor-pointer flex items-center">
          <span className="text-red-500 me-1 mt-2">Delete Account</span>
          <Mdi color="text-red-500" path={mdiDeleteOutline}></Mdi>
          </div>
        </div>
        <FormComponent
          formFields={formFields}
          submitText="Update Account"
          buttonClassName="mb-4 w-full px-5 py-2 border-none rounded-md bg-violet-800 text-white cursor-pointer"
          action={updateAccount}
          initialValues={user}
        />
      </div>
    </main>
  );
}
