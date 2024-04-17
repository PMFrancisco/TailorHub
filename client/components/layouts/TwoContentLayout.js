import { LoggedLayout } from "./LoggedLayout";

export const TwoContentLayout = ({ leftContent, rightContent }) => {
  return (
    <LoggedLayout>
      <div className="flex flex-row items-end px-8 pt-8 gap-8 h-full">
        <div className="w-1/2">{leftContent}</div>
        <div className="w-1/2 h-full overflow-y-auto">{rightContent}</div>
      </div>
    </LoggedLayout>
  );
};
