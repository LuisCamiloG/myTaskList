function useTask(params1, params2, params3, params4) {
  const guardar = (e) => {
    alert(params2);
    if (params2 !== "") {
      localStorage.setItem(params1, params2);
      alert("Nueva Tarea agregada");
      params3("");
      params4(lastDate + 1);
    } else {
      alert("Añada una descripcion");
    }
  };

  return { guardar };
}
export default useTask;
