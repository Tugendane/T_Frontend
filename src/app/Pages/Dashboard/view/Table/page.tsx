"use client"
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";

const PatientTable = () => {
  return (
    <div className="p-5 bg-white w-[100%]">
      <table className="w-full border-spacing-3" style={{ borderSpacing: '10px' }}>
        <thead>
          <tr className="bg-slate-200  align-middle mt-5">
            <th className='p-3'>Photo</th>
            <th className="p-3">Member Names</th>
            <th className="p-3">Phone Number</th>
            <th className="p-3">Residence</th>
            <th className="p-3">Role</th>
            <th className="p-3">View</th>
            <th className="p-3">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-slate-200 mt-5">
            <td className="p-3">John Doe</td>
            <td className="p-3">Client</td>
            <td className="p-3 text-yellow-700">Female</td>
            <td className="p-3">23.01.04</td>
            <td className="p-3">
              <FontAwesomeIcon icon={faPen} />
            </td>
            <td className="p-3">
              <FontAwesomeIcon icon={faUsersViewfinder} />
            </td>
            <td className="p-3">
              <FontAwesomeIcon icon={faTrash} />
            </td>
          </tr>
          <tr className="bg-slate-200 mt-5">
            <td className="p-3">John Doe</td>
            <td className="p-3">Employee</td>
            <td className="p-3 text-green-600">Male</td>
            <td className="p-3">23.01.24</td>
            <td className="p-3">
              <FontAwesomeIcon icon={faPen} />
            </td>
            <td className="p-3">
              <FontAwesomeIcon icon={faUsersViewfinder} />
            </td>
            <td className="p-3">
              <FontAwesomeIcon icon={faTrash} />
            </td>
          </tr>
          <tr className="bg-slate-200">
            <td className="p-3">John Doe</td>
            <td className="p-3">Client</td>
            <td className="p-3 text-yellow-700">Female</td>
            <td className="p-3">23.01.04</td>
            <td className="p-3">
              <FontAwesomeIcon icon={faPen} />
            </td>
            <td className="p-3">
              <FontAwesomeIcon icon={faUsersViewfinder} />
            </td>
            <td className="p-3">
              <FontAwesomeIcon icon={faTrash} />
            </td>
          </tr>
          <tr className="bg-slate-200">
            <td className="p-3">John Doe</td>
            <td className="p-3">Client</td>
            <td className="p-3 text-green-600">Male</td>
            <td className="p-3">23.01.24</td>
            <td className="p-3">
              <FontAwesomeIcon icon={faPen} />
            </td>
            <td className="p-3">
              <FontAwesomeIcon icon={faUsersViewfinder} />
            </td>
            <td className="p-3">
              <FontAwesomeIcon icon={faTrash} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
