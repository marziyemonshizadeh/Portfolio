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
      <section className="absolute md:top-60 top-44 text-zinc-400 leading-[40px]">
        <div className="flex justify-center items-center">
          <FaPhoneAlt className="text-orange-600" />
          +9354374790
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaEnvelope className="text-orange-600" />
          MarziehMonshizade@yahoo.com
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaMapMarkerAlt className="text-orange-600" />
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
              className="bg-zinc-700 border-none mb-5 text-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("title", { required: true })}
            />
            {/* {errors.title && (
            <p className="text-red-700">لطفا عنوان خانه را وارد کنید !</p>
          )} */}

            <input
              type="text"
              id="text"
              placeholder="email"
              className="bg-zinc-700 border-none mb-5  text-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("meterage", { required: true })}
            />
            {/* {errors.meterage && (
            <p className="text-red-700">لطفا عنوان خانه را وارد کنید!</p>
          )} */}
          </div>
          <input
            type="text"
            id="text"
            placeholder="name"
            className="bg-zinc-700 border-none mb-5 text-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("title", { required: true })}
          />

          <textarea
            id="message"
            // rows="4"
            className="bg-zinc-700 border-none mb-5 text-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>

          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-500 w-full rounded-lg text-slate-200"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
