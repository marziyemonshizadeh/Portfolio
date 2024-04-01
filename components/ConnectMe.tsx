import { FormValues } from "@/types/typings";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConnectMe({
  MyInfo,
  title,
  nameInput,
  nameInputError,
  emailInput,
  emailInputError,
  subjectInput,
  subjectInputError,
  bodyInput,
  bodyInputError,
  SubmitBtnTxt,
}: any) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
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
          toast.success("sent message successfully ;)", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          reset();
        } else if (res.status === 422) {
          toast.warning("! داده ی شما معتبر نمی باشد", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (res.status === 404) {
          toast.error("!  خطای سمت سرور رخ داده است", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (res.status === 500) {
          toast.error("! لطفا دوباره ارسال کنید", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        return res.json();
      })
      .catch((err) => console.log("can not sent message", err));
  };
  return (
    <div className="relative flex justify-center items-center h-screen">
      <ToastContainer />
      <h2 className="title">{title}</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute   leading-[40px]"
      >
        <div className="flex justify-center items-center">
          <FaPhoneAlt className="text-pink-500 mx-2" />
          {Object.assign({}, MyInfo)[0].phoneNumber}
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaEnvelope className="text-pink-500" />
          {Object.assign({}, MyInfo)[0].mail}
        </div>
        <div className="flex justify-center items-center gap-3">
          <FaMapMarkerAlt className="text-pink-500" />
          {Object.assign({}, MyInfo)[0].address}
        </div>
        <form
          className="max-w-[250px] mx-auto m-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            id="text"
            placeholder={nameInput}
            className="inputStyle"
            {...register("name", { required: true })}
          />
          {errors.name && <div className="text-pink-700">{nameInputError}</div>}

          <input
            type="email"
            id="text"
            placeholder={emailInput}
            className="inputStyle"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <div className="text-pink-700">{emailInputError}</div>
          )}
          <input
            type="text"
            id="text"
            placeholder={subjectInput}
            className="inputStyle"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <div className="text-pink-700">{subjectInputError}</div>
          )}
          <textarea
            id="body"
            {...register("body", { required: true })}
            className="inputStyle"
            placeholder={bodyInput}
          ></textarea>
          {errors.body && <div className="text-pink-700">{bodyInputError}</div>}
          <button
            type="submit"
            className="bg-pink-500 active:bg-pink-600 w-full rounded-lg dark:text-slate-200 text-white"
            disabled={!isDirty || !isValid}
          >
            {SubmitBtnTxt}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
