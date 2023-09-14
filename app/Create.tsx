export default function Create() {
  return (
    <div>
      <textarea
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
              type="radio"
              name="radio"
              className="radio radio-primary"
              value="3600"
              defaultChecked
            />
            1 Hour
            <input
              type="radio"
              name="radio"
              className="radio radio-primary"
              value="3601"
            />
            1 Day
            <input
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
  );
}
