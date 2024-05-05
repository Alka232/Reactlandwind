import { useEffect, useState } from "react";

const User = (() => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUser();
    },[])

    const fetchUser = async () => {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUsers(data.users)
    }


    return users.length == 0 ? 
        <h1>Loading.............</h1> :
    (
        <>
            <section>
            <div className="py-12 px-[8.7rem]">
                <h1 className="font-bold text-2xl capitalize py-3 text-center">User List</h1>
                <table className="table-auto border-collapse border border-slate-400 w-full">
            <thead>
                <tr>
                <th className="border border-slate-300 py-2 px-4">Name</th>
                <th className="border border-slate-300 py-2 px-4">age</th>
                <th className="border border-slate-300 py-2 px-4">gender</th>
                <th className="border border-slate-300 py-2 px-4">email</th>
                <th className="border border-slate-300 py-2 px-4">phone</th>
                <th className="border border-slate-300 py-2 px-4">username</th>
                <th className="border border-slate-300 py-2 px-4">birthDate</th>
                <th className="border border-slate-300 py-2 px-4">image</th>
                <th className="border border-slate-300 py-2 px-4">bloodGroup</th>
                <th className="border border-slate-300 py-2 px-4">height</th>

            </tr>
            </thead>
            <tbody>
                    {
                        users.map((user) => {
                            return(
                                <tr key={user.id}>
                                <td className="border border-slate-300 py-2 px-4">{user.firstName} {user.lastName}</td>
                                <td className="border border-slate-300 py-2 px-4">{user.age}</td>
                                <td className="border border-slate-300 py-2 px-4">{user.gender}</td>
                                <td className="border border-slate-300 py-2 px-4">{user.email}</td>
                                <td className="border border-slate-300 py-2 px-4">{user.phone}</td>
                                <td className="border border-slate-300 py-2 px-4">{user.username}</td>
                                <td className="border border-slate-300 py-2 px-4">{user.birthDate}</td>
                                <td className="border border-slate-300 py-2 px-4"><img className="w-[30px]" src={user.image} /></td>
                                <td className="border border-slate-300 py-2 px-4">{user.bloodGroup}</td>
                                <td className="border border-slate-300 py-2 px-4">{user.height}</td>
                            </tr>
                            )
                        })
                    }
            </tbody>
            </table>
            </div>
            </section>
        </>
    )
})
export default User