
const Table = () => {
  return (
    <>
        <table className="w-full text-left rounded-md overflow-hidden bg-white">
            <thead className="bg-slate-400 h-10 ">
                <tr className="text-lg p-3 ">
                    <th className="pl-2">#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    [1,2,3,4].map((index)=>(
                    <tr key={index} className="h-10">
                    <td className="pl-2">1</td>
                    <td>Ram</td>
                    <td>ram@gmail.com</td>
                    <td>kathmandu</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    </>
  )
}

export default Table