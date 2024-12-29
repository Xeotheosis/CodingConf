import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Icon from "./Icon";
import Info from "./Info";

const Form = ({
  name,
  handleNameChange,
  email,
  handleEmailChange,
  username,
  handleUsernameChange,
  error,
  generateTicket,
  onImageDrop,
  selectedImage,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Only process the first file (if multiple are allowed)
      const file = acceptedFiles[0];
      onImageDrop(file);
    },
    [onImageDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
  });

  return (
    <form
      onSubmit={(e) => generateTicket(e)}
      className="p-8 relative z-10 flex flex-col items-start gap-4 w-full max-w-4xl">
      <label htmlFor="">Upload Avatar</label>
      <div
        {...getRootProps()}
        className="border-2 border-dashed p-4 text-center w-full cursor-pointer rounded-lg bg-neutral900">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : selectedImage ? (
          <div>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="h-24 mx-auto"
            />
            <p>{selectedImage.name}</p>
          </div>
        ) : (
          <div>
            <div className="flex flex-col items-center">
              <Icon />
            </div>
            <p>Drag and drop or click to upload</p>
          </div>
        )}
      </div>
      <p className="text-xs opacity-70 flex items-center gap-2">
        <Info /> Upload your photo (JPG or PNG, max size: 500KB).
      </p>
      {error && (
        <p className="text-red-500 mt-2">
          All fields are required. Please fill them in.
        </p>
      )}
      <div className="flex flex-col items-start w-full">
        <label className="mb-2">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Jon Doe"
          className="p-4 rounded-md bg-transparent border border-slate-400 w-full"
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <label className="mb-2">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@email.com"
          className="p-4 rounded-md bg-transparent border border-slate-400 w-full"
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <label className="mb-2">Github Username</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="@yourusername"
          className="p-4 rounded-md bg-transparent border border-slate-400 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-[#E1604F] p-4 text-black capitalize w-full rounded-lg font-bold text-xl">
        generate my ticket
      </button>
    </form>
  );
};

export default Form;
