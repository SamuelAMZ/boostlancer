// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";

// export function SelectPlan() {
//   return (
//     <div className="flex items-center space-x-2">
//       <Label htmlFor="airplane-mode">Monthly</Label>
//       <Switch id="airplane-mode" />
//       <Label htmlFor="airplane-mode">Yearly</Label>
//     </div>
//   );
// }

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
