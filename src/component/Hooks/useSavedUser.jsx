const useSavedUser = () => {
  const userSavedFetch = (user) => {
    if (user) {
      const userInfo = { email: user?.email, tokens: user?.accessToken };
      fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((user) => console.log(user));
    }
  };

  return [userSavedFetch];
};

export default useSavedUser;
