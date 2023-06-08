export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex-row">
        <h1 className="text-6xl mb-5">Yopass</h1>
        <textarea
          className="textarea textarea-primary textarea-lg w-full"
          placeholder="Secret"
          rows={4}
          autoFocus
        ></textarea>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Delete in</span>
            <input
              type="radio"
              name="radio"
              className="radio radio-primary"
              defaultChecked
            />
            1 Hour
            <input
              type="radio"
              name="radio"
              className="radio radio-primary"
            />{" "}
            1 Day
            <input
              type="radio"
              name="radio"
              className="radio radio-primary"
            />{" "}
            1 Week
          </label>
          <div className="w-96">
            <label className="label cursor-pointer">
              <span className="label-text">One-time download</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                defaultChecked
              />
            </label>

            <label className="label cursor-pointer">
              <span className="label-text">Generate Decryption Key</span>
              <input
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
      </div>
    </div>
  );
}
