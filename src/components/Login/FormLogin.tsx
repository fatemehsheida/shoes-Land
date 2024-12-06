export default function FormLogin() {
  return (
    <div>
      <form action="#">
        <div>
          <input type="text" name="Email" id="Email" placeholder="Email" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div>
            <input type="checkbox" name="Remember" id="Remember" />
            <label htmlFor="Remember">Remember me</label>
        </div>
        <div>
            <button type="submit" className="border-4">Sign In</button>
        </div>
      </form>
    </div>
  );
}
