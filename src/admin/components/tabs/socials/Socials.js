import React from "react";
import { useSingleRecordContext } from "../../../context/singleRecordContext";

const Socials = () => {
  const { socials } = useSingleRecordContext();

  const normalizedSocials = React.useMemo(() => {
    if (!socials) return [];

    return Object.entries(socials).map(([key, value]) => {
      if (typeof value === "object" && value.handle && value.name) {
        return value;
      }

      return {
        handle: key.toLowerCase(),
        name: value,
      };
    });
  }, [socials]);

  if (!normalizedSocials.length) return null;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Platform
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                {normalizedSocials.map((social, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4">
                      {social.handle}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {social.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
