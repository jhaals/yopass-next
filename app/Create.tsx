"use client";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Create() {
  type Inputs = {
    secret: string;
    expiration: "3600";
    oneTime: boolean;
    generateKey: boolean;
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register("secret", { required: true })}
        className="textarea textarea-primary textarea-lg w-full"
        placeholder="Secret"
        rows={4}
        cols={80}
        autoFocus
      ></textarea>
      <div className="form-control">
        <div className="w-10/12">
          <label className="label cursor-pointer">
            <span className="label-text">
              The encrypted message will be deleted automatically after
            </span>
            <input
              {...register("expiration")}
              type="radio"
              name="radio"
              className="radio radio-primary"
              value="3600"
            />
            1 Hour
            <input
              {...register("expiration")}
              type="radio"
              name="radio"
              className="radio radio-primary"
              value="3601"
            />
            1 Day
            <input
              {...register("expiration")}
              type="radio"
              name="radio"
              className="radio radio-primary"
              value="3603"
            />
            1 Week
          </label>
        </div>
        <div className="w-96">
          <label className="label cursor-pointer">
            <span className="label-text">One-time download</span>
            <input
              {...register("oneTime")}
              type="checkbox"
              className="toggle toggle-primary"
              defaultChecked
            />
          </label>

          <label className="label cursor-pointer">
            <span className="label-text">Generate Decryption Key</span>
            <input
              {...register("generateKey")}
              type="checkbox"
              className="toggle toggle-primary"
              defaultChecked
            />
          </label>
        </div>
      </div>
      <div className="flex-row mt-3">
        <button className="btn w-full btn-primary">Encrypt Message</button>
      </div>
    </form>
  );
}
