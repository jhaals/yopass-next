export function Features() {
  const features = [
    {
      title: "End-to-end encryption",
      description:
        "Encryption and decryption are being made locally in the browser. The key is never stored with yopass.",
    },
    {
      title: "Self destruction",
      description:
        "Encrypted messages have a fixed lifetime and will be deleted automatically after expiration.",
    },
    {
      title: "One-time download",
      description:
        "he encrypted message can only be downloaded once which reduces the risk of someone peeking at your secrets.",
    },
    {
      title: "Simple Sharing",
      description:
        "Yopass generates a unique one click link for the encrypted file or message. The decryption password can alternatively be sent separately.",
    },
    {
      title: "No accounts needed",
      description:
        "Sharing should be quick and easy; No additional information except the encrypted secret is stored in the database.",
    },
    {
      title: "Open Source Software",
      description:
        "Yopass encryption mechanism are built on open source software meaning full transparency with the possibility to audit and submit features.",
    },
  ];
  return (
    <div>
      <p>
        Yopass is created to reduce the amount of clear text passwords stored in
        email and chat conversations by encrypting and generating a short-lived
        link which can only be viewed once.
      </p>
      <div className="flex space-x-4 space-y-4 flex-wrap justify-center">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
function Feature(props: { title: string; description: string }) {
  return (
    <div className="card bg-base-100 shadow-md lg:w-96">
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
          {props.title}
        </h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
