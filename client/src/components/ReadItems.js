import { useEffect, useState } from "react";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";

const ReadItems = () => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const res = await fetch("http://localhost:5000/list");
      const data = await res.json();

      setList(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  if (list.length < 1) {
    return (
      <>
        <p>No items in list.</p>
      </>
    );
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>
                  <UpdateItem item={item} list={list} setList={setList} />
                </td>
                <td>
                  <DeleteItem item={item} list={list} setList={setList} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ReadItems;
