import React, { useEffect, useState } from "react";
import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadedUsers, setLoadedUsers] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message || "Failed to fetch users.");
        }

        setLoadedUsers(responseData.users);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    };

    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorModal message={error} onClear={errorHandler} />;
  }

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </>
  );
};

export default Users;
