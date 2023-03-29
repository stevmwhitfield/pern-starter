const DeleteItem = ({ item, list, setList }) => {
  const { id } = item;

  const deleteItem = async (id) => {
    try {
      const deletedItem = await fetch(`http://localhost:5000/list/${id}`, {
        method: "DELETE",
      });

      setList(list.filter((item) => item.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button onClick={() => deleteItem(id)}>Delete</button>
    </>
  );
};

export default DeleteItem;
