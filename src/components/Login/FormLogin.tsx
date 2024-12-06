import { useForm } from "react-hook-form";
import { FormData } from "../type/FormData";
import FormField from "../Login/FormFild";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "../type/zodType";


export default function FormLogin() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema), // Apply the zodResolver
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
          <FormField
            type="text"
            placeholder="Username"
            name="username"
            register={register}
            error={errors.username}
          />{" "}
        </div>
        <div>
          <FormField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />{" "}
        </div>
        <div>
          <FormField
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
          />
        </div>
        <div>
          <input type="checkbox" name="Remember" id="Remember" />
          <label htmlFor="Remember">Remember me</label>
        </div>
        <div>
          <button type="submit" className="border-4">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
