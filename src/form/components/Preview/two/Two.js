import React from "react";
import { useFormCtx } from "../../../context/formContext/formContext";

const Two = () => {
  const { shareHolders, boards } = useFormCtx();

  const renderSocialRow = (social) => (
    <tr key={social.handle}>
      <td className="border px-4 py-2">{social.name}</td>
      <td className="border px-4 py-2">{social.shareHolding}</td>
      <td className="border px-4 py-2">{social.nationality}</td>
    </tr>
  );

  const renderOwnershipRow = (director) => (
    <tr key={director.directorName}>
      <td className="border px-4 py-2">{director.name}</td>
      <td className="border px-4 py-2">{director.position}</td>
      <td className="border px-4 py-2">{director.nationality}</td>
      <td className="border px-4 py-2">{director.residence}</td>
    </tr>
  );

  return (
    <div className="mx-auto mt-8 p-6 rounded-lg shadow-md bg-white">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">beneficiaries</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-gray-200 border text-left px-4 py-2">
                Name of Beneficiary
              </th>
              <th className="bg-gray-200 border text-left px-4 py-2">
                Shareholding(%)
              </th>
              <th className="bg-gray-200 border text-left px-4 py-2">
                Nationality
              </th>
            </tr>
          </thead>
          <tbody>{shareHolders.map((social) => renderSocialRow(social))}</tbody>
        </table>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">shareHolders</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-gray-200 border text-left px-4 py-2">
                Name of Board Member
              </th>
              <th className="bg-gray-200 border text-left px-4 py-2">
                Position
              </th>
              <th className="bg-gray-200 border text-left px-4 py-2">
                Nationality
              </th>
              <th className="bg-gray-200 border text-left px-4 py-2">
                Country of Residence
              </th>
            </tr>
          </thead>
          <tbody>
            {boards.map((director) => renderOwnershipRow(director))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Two;
