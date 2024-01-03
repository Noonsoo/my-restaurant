// "use server";
// import AddPageProps from "./AddPageProps";
// import { useRouter } from "next/navigation";

// function AddPageComponent({
//   file,
//   option,
//   inputs,
//   options,
//   handleChange,
//   handleChangeImg,
//   changeOption,
//   setOptions,
// }: any) {
//   const router = useRouter();

//   const upload = async () => {
//     const data = new FormData();
//     data.append("file", file!);
//     data.append("upload_preset", "restaurant");

//     const res = await fetch("https://api.cloudinary.com/v1_1/lamadev/image", {
//       method: "POST",
//       headers: { "Content-Type": "multipart/form-data" },
//       body: data,
//     });

//     const resData = await res.json();
//     return resData.url;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const url = await upload();
//       const res = await fetch("http://localhost:3000/api/products", {
//         method: "POST",
//         body: JSON.stringify({
//           img: url,
//           ...inputs,
//           options,
//         }),
//       });

//       const data = await res.json();

//       router.push(`/product/${data.id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <AddPageProps
//       changeOption={changeOption}
//       handleChange={handleChange}
//       handleChangeImg={handleChangeImg}
//       setOptions={setOptions}
//       option={option}
//       options={options}
//       handleSubmit={handleSubmit}
//     />
//   );
// }

// export default AddPageComponent;
