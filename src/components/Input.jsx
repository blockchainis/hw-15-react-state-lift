function Input({ name }) {
  return (
    <div>
      <label>
        <input type="number" />
        {name}
      </label>
    </div>
  );
}

export default Input;
