export const SelectPlan = () => {
  // generate unique ID
  const uniqueID = `checkbox_${Math.floor(Math.random() * 1000000)}`;

  return (
    <>
      <label className="toggleBtn" htmlFor={uniqueID}>
        <input type="checkbox" className="toggle__input" id={uniqueID} />
        <span className="toggle-track">
          <span className="toggle-indicator"></span>
        </span>
      </label>
    </>
  );
};
