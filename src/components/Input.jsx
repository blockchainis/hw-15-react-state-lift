/**
 * 입력시 숫자가 아닐경우 아래처럼 처리해주세요~
 *if (isNaN(Number(e.target.value))) {
    return;
  }
 */

function Input({ name }) {
  return (
    <div>
      <label>
        <input type="text" />
        {name}
      </label>
    </div>
  );
}

export default Input;
