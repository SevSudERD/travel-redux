import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteBooking } from "../redux/action";

const Table = () => {
  
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleDelete = (e) =>{
    dispatch(deleteBooking(e.currentTarget.id));
  }
  console.log(data);
  return (
    <>
      {data.length && (
        <div className="max-w-6xl mx-auto mt-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-bold text-1xl">
                  <th>DESTINATION FROM</th>
                  <th>DESTINATION TO</th>
                  <th>JOURNEY DATE</th>
                  <th>GUESTS</th>
                  <th>TRAVEL CLASS</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => (
                  <tr key={index}>
                    <th className="text-white text-bold text-2xl">{data.from}</th>
                    <td className="text-white text-bold text-2xl">{data.to}</td>
                    <td className="text-white text-bold text-2xl">{data.date}</td>
                    <td className="text-white text-bold text-2xl">{data.guests}</td>
                    <td className="text-white text-bold text-2xl">{data.ticketclassName}</td>
                    <td><button id={`${data.id}`} onClick={(e) => handleDelete(e)} className="btn-xs bg-red-500 text-white"><MdDelete/></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
