import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ConnectMe() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    // axios.post("http://localhost:4001/Estates", data).then((res) => {

    // return res.data;
    // });
    reset();
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
          <div className="flex gap-2">
            <input
              type="text"
              id="text"
              placeholder="name"
              className="inputStyle"
              {...register("name", { required: true })}
            />
            {/* {errors.title && (
            <p className="text-red-700">لطفا عنوان خانه را وارد کنید !</p>
          )} */}

            <input
              type="text"
              id="text"
              placeholder="email"
              className="inputStyle"
              {...register("email", { required: true })}
            />
            {/* {errors.meterage && (
            <p className="text-red-700">لطفا عنوان خانه را وارد کنید!</p>
          )} */}
          </div>
          <input
            type="text"
            id="text"
            placeholder="subject"
            className="inputStyle"
            {...register("subject", { required: true })}
          />

          <textarea
            id="message"
            {...register("message", { required: true })}
            className="inputStyle"
            placeholder="Write your thoughts here..."
          ></textarea>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-orange-500 w-full rounded-lg text-slate-200"
          >
            Submit
          </button>
        </form>
      </motion.section>
    </div>
  );
}
