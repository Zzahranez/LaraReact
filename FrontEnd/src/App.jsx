import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  return (
    <div className=" d-flex align-content-center justify-content-center p-5 container-fluid bg-dark-subtle mb-5">
      <i className="fas fa-check-circle text-success me-2"></i>
      <h3 className=" text-dark">LaraReact Testing</h3>
    </div>
  );
}

function TambahData() {
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/Employee/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Berhasil tambah:", result);
        alert("Data berhasil ditambahkan!");
      })
      .catch((err) => console.error("Gagal tambah data:", err));
  };

  return (
    <div className="mb-3">
      <h2>Tambah Data Karyawan</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="name" className="form-label">Masukan Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control shadow-sm"
              placeholder="Nama"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="job" className="form-label">Masukan Job</label>
            <input
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              className="form-control shadow-sm"
              placeholder="Pekerjaan"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="age" className="form-label">Masukan Umur</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="form-control shadow-sm"
              placeholder="Umur"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Simpan</button>
      </form>
    </div>
  );
}

function DataEmployee() {
  let [data, setData] = useState();
  let [pilihKaryawan, setPilihKarywan] = useState();
  let endPointEmployee = "http://127.0.0.1:8000/api/Employee/get";
  useEffect(() => {
    fetch(endPointEmployee)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function HapusData(id) {
    let endPoint = `http://127.0.0.1:8000/api/Employee/destroy/${id}`;

    if (window.confirm("Yakin mau hapus data ini ? ")) {
      fetch(endPoint, {
        method: "DELETE",
      })
        .then((res) => res.json)
        .then((result) => {
          console.log("Penghapusan Sukses", result);
          setData(data.filter((item) => item.id !== id));
        });
    }
  }

  function showEdit(id) {
    let endpoint = `http://127.0.0.1:8000/api/Employee/get/${id}`;
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setPilihKarywan(data);
      });
  }
  return (
    <>
    <TambahData />
    <div className="card">
      <div className=" card-header bg-primary opacity-25 ">
        <h3 className=" text-dark">Daftar Karyawan</h3>
      </div>
      <div className=" card-body">
        {/* Start Table */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">0</th>
              <th scope="col">Name</th>
              <th scope="col">Job</th>
              <th scope="col">Age</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.id ?? index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td>{item.age}</td>
                  <td>
                    <button
                      className=" btn btn-info me-2"
                      onClick={() => showEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className=" btn btn-danger"
                      onClick={() => HapusData(item.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Belum ada data</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* End table */}

        {pilihKaryawan && (
          <div className="alert alert-info mt-3">
            <h5>Detail Pegawai:</h5>
            <p>Nama: {pilihKaryawan.name}</p>
            <p>Job: {pilihKaryawan.job}</p>
            <p>Age: {pilihKaryawan.age}</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <div className=" container">
        <Header />
        <DataEmployee />
      </div>
    </>
  );
}
