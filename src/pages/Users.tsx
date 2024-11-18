// import React from "react";

const Users = () => {
  const users = [
    {
      name: "Gideon",
      email: "gideon@email.com",
      phone: "+23324444444",
    },
    {
      name: "Gideon",
      email: "gideon@email.com",
      phone: "+23324444444",
    },
    {
      name: "Gideon",
      email: "gideon@email.com",
      phone: "+23324444444",
    },
    {
      name: "Gideon",
      email: "gideon@email.com",
      phone: "+23324444444",
    },
    {
      name: "Gideon",
      email: "gideon@email.com",
      phone: "+23324444444",
    },
    {
      name: "Gideon",
      email: "gideon@email.com",
      phone: "+23324444444",
    },
  ];
  return (
    <div className="px-10 my-10">
      <div>
        <table className="w-full">
          <thead>
            <tr className="bg-primary bg-opacity-50 text-left">
                <th className="py-2 uppercase text-lg">Name</th>
                <th className="py-2 uppercase text-lg">Email</th>
                <th className="py-2 uppercase text-lg">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td className="py-2 border-b-2 text-lg">{user.name}</td>
                <td className="py-2 border-b-2 text-lg">{user.email}</td>
                <td className="py-2 border-b-2 text-lg">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
