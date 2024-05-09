const useGetUser = () => {
  const userString = localStorage.getItem("user");
  if (userString === null) return null;

  const user = JSON.parse(userString);

  return user;
};

export default useGetUser;
