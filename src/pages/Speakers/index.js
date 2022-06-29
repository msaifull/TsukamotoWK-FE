import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Button from "../../components/Button";
import AlertMessage from "../../components/Alert";
import Table from "../../components/TableWithAction";
import SearchInput from "../../components/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import { fetchSpeakers, setKeyword } from "../../redux/speakers/actions";
import Swal from "sweetalert2";
import { deleteData } from "../../utils/fetchData";
import { setNotif } from "../../redux/notif/actions";

function SpeakersPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const notif = useSelector((state) => state.notif);
  const speakers = useSelector((state) => state.speakers);

  useEffect(() => {
    return () => {
      if (!user.token) return navigate("/login");
    };
  });

  useEffect(() => {
    dispatch(fetchSpeakers());
  }, [dispatch, speakers.keyword]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin Pora?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Hapus!",
      cancelButtonText: "Batal!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`api/v1/speakers/${id}`);
        // Swal.fire({
        //   position: "top-end",
        //   icon: "success",
        //   title: `Berhasil Hapus Data ${res.data.data.name} `,
        //   showConfirmButton: false,
        //   timer: 1500,
        // });

        dispatch(
          setNotif(
            true,
            "success",
            `berhasil hapus speaker ${res.data.data.name}`
          )
        );
        dispatch(fetchSpeakers());
      }
    });
  };
  return (
    <Container>
      <Button action={() => navigate("/speakers/create")}>Tambah</Button>
      <BreadCrumb textSecond={"speakers"} />
      <SearchInput
        name="keyword"
        query={speakers.keyword}
        handleChange={(e) => dispatch(setKeyword(e.target.value))}
      />
      {notif.status && (
        <AlertMessage type={notif.typeNotif} message={notif.message} />
      )}
      <Table
        status={speakers.status}
        thead={["Nama", "avatar", "role", "Aksi"]}
        data={speakers.data}
        tbody={["name", "avatar", "role"]}
        editUrl={`/speakers/edit`}
        deleteAction={(id) => handleDelete(id)}
        withoutPagination
      />
    </Container>
  );
}

export default SpeakersPage;
