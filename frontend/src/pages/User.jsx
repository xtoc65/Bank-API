import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../store/UserSlice";
import Bank from "../components/Bank";

import "../assets/styles/user.css";

function User() {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.user);
  
    useEffect(() => {
      dispatch(fetchUserProfile());
    }, [dispatch]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Erreur: {error}</div>;
    }
  
    if (!user) {
      return <div>Aucun utilisateur connecté.</div>;
    }

  return (
    <main className="user">
      <div>
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}!
        </h1>
        <button>Edit Name</button>
      </div>
      <Bank />
    </main>
  );
}

export default User;
