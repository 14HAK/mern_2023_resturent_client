const useSavedUser = () => {
  const userSavedFetch = (user) => {
    if (user) {
      const userInfo = { email: user?.email, tokens: user?.accessToken };
      fetch(`https://mern-2023-resturent-server.vercel.app/users`, {
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
