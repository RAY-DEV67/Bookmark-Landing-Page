import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function Form() {
  const schema = yup.object().shape({
    Email: yup
      .string("whoops,make sure its an email.")
      .email("whoops,make sure its an email.")
      .required("THIS FIELD IS REQUIRED"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // e.preventDefault()
    console.log(data);
    setError("Email", { type: "focus" }, { shouldFocus: true });
  };

  return (
    <div>
      <div className="mt-32 py-12 flex flex-col items-center form">
        <div className="w-10/12">
          <p className="tracking-widest form">35,000+ already joined</p>
         <div className="w-full flex flex-col items-center">
         <h2 className="text-xl mt-4 max-w-xs">
            Stay up-to-date with what we’re doing
          </h2>
         </div>
          <div className="w-full flex flex-col items-center">
            <form
              className="flex flex-col md:flex-row md:items-center md:justify-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  {...register("Email")}
                  className="w-full px-12 py-2 mt-4 md:w-full text-sm"
                />
                <p>{errors.Email?.message}</p>
              </div>
              <div>
                <input
                  type="submit"
                  value="Contact Us"
                  className="border cursor-pointer mt-4 py-2 w-full md:w-full md:ml-4 md:px-4 contact"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

//   35,000+ already joined

//   Stay up-to-date with what we’re doing

//   Contact Us
