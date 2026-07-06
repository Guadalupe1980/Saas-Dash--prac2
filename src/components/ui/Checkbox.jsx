function Checkbox({id, label, className = "", ...props}) {
  return (
    <>
      <div>
        <input type="checkbox" id={id} {...props}/>
        <label>Remember for 30 days</label>
      </div>

    </>
  );
}

export default Checkbox;
