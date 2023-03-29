import { useState } from "react";

const CreateItem = () => {
  const [description, setDescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const res = await fetch("http://localhost:5000/list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default CreateItem;
