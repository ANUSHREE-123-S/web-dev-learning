function Dashboard() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Dashboard</h1>

          <p>Welcome User</p>

          <p>Current Page: Dashboard</p>
        </>
      ) : (
        <h1>Access Denied</h1>
      )}
    </div>
  );
}

export default Dashboard;