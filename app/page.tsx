export default function Home() {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex-row">
        <div className="mb-5">
          <span className="text-6xl font-medium">
            <img
              className="inline mr-1"
              src="https://yopass.se/yopass.svg"
              width={50}
              height={50}
            />
            Yopass
          </span>
        </div>
        <textarea
          className="textarea textarea-primary textarea-lg w-full"
          placeholder="Secret"
          rows={4}
          cols={80}
          autoFocus
        ></textarea>
        <div className="form-control">
          <div className="w-11/12">
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
              />{" "}
              1 Day
              <input
                type="radio"
                name="radio"
                className="radio radio-primary"
                value="3603"
              />{" "}
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
        <div className="divider mt-5 mb-5"></div>

        <h3 className="text-lg font-medium justify-center text-center">
          Share Secrets Securely With Ease
        </h3>
        <p>
          Yopass is created to reduce the amount of clear text passwords stored
          in email and chat conversations by encrypting and generating a
          short-lived link which can only be viewed once.
        </p>

        <div className="flex space-x-4">
          <Feature />
          <Feature />
        </div>
        <p className="text-sm text-center mt-10 opacity-70">
          Created by Johan Haals
        </p>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
          </svg>
          End-to-end Encryption
        </h2>
        <p>
          Encryption and decryption are being made locally in the browser. The
          key is never stored with yopass.
        </p>
      </div>
    </div>
  );
}
