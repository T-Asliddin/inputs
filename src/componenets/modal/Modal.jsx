import "./modal.css";
import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { nanoid } from "nanoid";

const UserModal = (props) => {
    const {  title, setTitle, toggle, edit,setselect } = props;
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const setvalue =(e)=>{
    setselect(e.target.value)
  }


  const handleSubmit = (e) => {
     e.preventDefault();
    if (edit.id) {
      let new_title = title.map((item) => {
        if (item.id === edit.id) {
          item.title = form.title ? form.title : item.title;
        }
        return item;
      });
      setTitle([...new_title]);
    } else {
      let id = nanoid();
      title.push({ ...form, id });
      setTitle([...title]);
    }
    toggle();
  };

  return (
    <Modal isOpen={props.open} toggle={props.toggle}>
      <ModalHeader>
        <h1 className="text-center">Add Car</h1>
      </ModalHeader>
      <ModalBody>
        <form id="submit" onSubmit={handleSubmit}>
          <input
            type="text"
            defaultValue={edit.title}
            onChange={handleChange}
            placeholder="Title"
            className="form-control my-2"
            name="title"
            required
          />
          <div className="form-control my-2">
            <label>Select status</label>
            <select required onChange={setvalue} className="select" name="select" id="select">
              <option value="1">Open</option>
              <option value="2">Pending</option>
              <option value="3">Inprog</option>
              <option value="4">Copmplete</option>
            </select>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={props.toggle}>
          Cancel
        </button>
        <button className="btn btn-success" form="submit" type="submit">
          Add
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
