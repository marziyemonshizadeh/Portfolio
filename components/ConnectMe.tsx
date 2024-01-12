import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
const { default: connectToDB } = require("@/utils/db");

export default function ConnectMe() {
  // const getCourses = async () => {
  //   const res = await fetch(`/api/courses`);
  //   const coursesData = await res.json();

  //   console.log("Res =>", res);

  //   if (res.status === 200) {
  //     console.log(coursesData);
  //     setData(coursesData);
  //   }
  // };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();
  const onSubmit = async (data: any) => {
    connectToDB();
    console.log(data);
    await fetch("api/messages", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 201) {
          console.log("ok = ", res);
        }
        if (res.status === 500) {
          console.log("500 = ", res);
        }

        reset();
        return res.json();
      })
      .catch((err) => console.log("can not sent message", err));
  };
  return (
    <div className="relative flex justify-center h-screen">
      <h2 className="absolute md:top-20 top-8 tracking-[20px] uppercase my-5">
        CONNECT ME
      </h2>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute md:top-52 top-44 text-zinc-400 leading-[40px]"
      >
        <div className="flex justify-center items-center">
          <FaPhoneAlt className="text-pink-500" />
          +9354374790
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaEnvelope className="text-pink-500" />
          MarziehMonshizade@yahoo.com
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaMapMarkerAlt className="text-pink-500" />
          Teh,SouthJannatabad
        </div>
        <form
          className="max-w-[250px] mx-auto m-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            id="text"
            placeholder="name"
            className="inputStyle"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-pink-700">name is required field</p>
          )}

          <input
            type="email"
            id="text"
            placeholder="email"
            className="inputStyle"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-pink-700">email is required field</p>
          )}
          <input
            type="text"
            id="text"
            placeholder="subject"
            className="inputStyle"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <p className="text-pink-700">email is required field</p>
          )}
          <textarea
            id="body"
            {...register("body", { required: true })}
            className="inputStyle"
            placeholder="Write your thoughts here..."
          ></textarea>
          {errors.body && (
            <p className="text-pink-700">This is required field</p>
          )}
          <button
            type="submit"
            className="bg-pink-500 active:bg-pink-600 w-full rounded-lg text-slate-200"
            disabled={!isDirty || !isValid}
          >
            Submit
          </button>
        </form>
      </motion.section>
    </div>
  );
}
