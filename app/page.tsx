export default function Home() {
  return (
    <main>
      <textarea className="textarea" placeholder="Secret"></textarea>
      <div className="form-control">
        <div className="w-60">
          <label className="label cursor-pointer">
            <span className="label-text">One-time download</span>
            <input type="checkbox" className="toggle" defaultChecked />
          </label>

          <label className="label cursor-pointer">
            <span className="label-text">Generate Decryption Key</span>
            <input type="checkbox" className="toggle" defaultChecked />
          </label>
        </div>
        <button className="btn">Encrypt</button>
      </div>
    </main>
  );
}
