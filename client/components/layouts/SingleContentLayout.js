import { LoggedLayout } from "./LoggedLayout";

export const SingleContentLayout = ({ mainContent }) => {
  return (
    <LoggedLayout>
      <div className="flex flex-col items-center justify-center px-8 pt-8 gap-8 h-full">
        <div className="w-full h-full overflow-y-auto">
          {mainContent}
        </div>
      </div>
    </LoggedLayout>
  );
};
