function Form() {
  return (
    <div className="h-full w-full">
      <div className="flex bg-black text-white">
        <form action="/login" method="post">
          <input
            type="text"
            name="Username"
            id="Username"
            placeholder="Username"
          />
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Password"
          />
          <button type="submit">Login!</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
