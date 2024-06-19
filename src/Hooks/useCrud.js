import { useState } from "react";
import axios from "axios";

const urlBase = 'https://users-crud.academlo.tech';

const useCrud = () => {
  const [apiData, setApiData] = useState();

  //obtener usuarios
  const getApi = (path) => {
    const url = `${urlBase}${path}/`;
    axios.get(url)
    .then(res => setApiData(res.data))
    .catch(err => console.log(err));
  };
  //crear usuario
  const postApi = (path, data) => {
    const url = `${urlBase}${path}/`;
    axios.post(url, data)
    .then(res => setApiData([...apiData, res.data]))
    .catch(err => console.log(err));
  };
  //eliminar usuario
  const deleteApi = (path, id) => {
    const url = `${urlBase}${path}/${id}/`;
    axios.delete(url)
    .then(res => setApiData(
        apiData.filter((user) => user.id !== id)
    ))
    .catch(err => console.log(err));
  };
  //actualizar usuario
  const patchApi = (path, id, data) => {
    const url = `${urlBase}${path}/${id}/`;
    axios.patch(url, data)
    .then(res => setApiData(apiData.map(
        (user) => user.id === id ? res.data : user
    )))
    .catch(err => console.log(err));
  }

  return [apiData, getApi, postApi, deleteApi, patchApi];
}

export default useCrud;