import { useForm } from "react-hook-form";

type Props = {}

const Contact = (props: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };


  return (
    <form 
      target="_blank"
      onSubmit={onSubmit}
      action="https://formsubmit.co/luizarnoldch@gmail.com"
      method="POST"
      className='flex max-w-[52rem] flex-col gap-4 mx-auto'
    >
      {/* Name */}
      <input
        className='h-10 w-full border-2 border-black bg-[#F3F1EF] px-4 py-6'
        type="text"
        placeholder="NAME"
        {...register("name", {
          required: true,
          maxLength: 100,
        })}
      />
      {errors.name && (
        <p className="mt-1 text-red-500">
          {errors.name.type === "required" && "This field is required."}
          {errors.name.type === "maxLength" &&
            "Max length is 100 char."}
        </p>
      )}

      {/* E-mail */}

      <input
        type='text'
        className='h-10 w-full border-2 border-black bg-[#F3F1EF] px-4 py-6'
        placeholder="E-MAIL"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      {errors.email && (
        <p className="mt-1 text-red-500">
          {errors.email.type === "required" &&
            "This field is required."}
          {errors.email.type === "pattern" && "Invalid email address."}
        </p>
      )}
      
      {/* MESSAGE */}
      <textarea
        className='h-32 w-full border-2 border-black bg-[#F3F1EF] p-4'
        placeholder="MESSAGE"
        rows={4}
        cols={50}
        {...register("message", {
          required: true,
          maxLength: 2000,
        })}
      />
      
      <button type='submit' className='mx-auto mt-6 h-12 w-36 bg-black text-white'>
        SUBMIT
      </button>
    </form>
  )
}

export default Contact