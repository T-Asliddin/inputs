import { useState } from "react";
import UserModal from "@modal";
import "./index.css";

const Index = () => {
  const [title, setTitle] = useState([]);
  const [modal, setModal] = useState(false);
  const [edit, setEidt] = useState({});
  const [select, setselect] = useState("");
  const openModal = (item) => {
    setEidt(item);
    setModal(true);
  };
  const toggle = () => {
    setModal(false);
    setEidt({});
  };

  const deleteTitle = (id) => {
    const new_title = title.filter((item) => item.id !== id);
    setTitle([...new_title]);
  };

  console.log(select);
  return (
    <div className="tasktwo">
      <UserModal
        open={modal}
        toggle={toggle}
        title={title}
        setTitle={setTitle}
        edit={edit}
        setselect={setselect}
      />
      <div>
        <div className="row mt-3 open_box">
          <table className="table table-bordered table-hover table-striped">
            <thead className="titl">
              <h2>Open</h2>
            </thead>
            <tbody>
              {title.map((item, index) => (
                <tr key={index}>
                  <td className="item">
                    {item.title}
                    <div className="d-flex gap-2 align-items-center">
                      <button
                        onClick={() => openModal(item)}
                        className="btn btn-info"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteTitle(item.id)}
                      >
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row mt-3">
            <div className="col-md-10 offset-1">
              <div className="roww">
                <div>
                  <button
                    className="btn btn-success"
                    onClick={() => setModal(true)}
                  >
                    Add card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
