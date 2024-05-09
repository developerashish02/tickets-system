const useAuth = () => {
  const user = localStorage.getItem("user");

  return user === null ? false : true;
};

export default useAuth;
