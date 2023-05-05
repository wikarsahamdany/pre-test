import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomer, searchCustomer } from "../actions/createactions";
import CustomerTable from "../components/CustomerTable";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";

export default function Customer() {
  const dataCustomers = useSelector((state) => state.customerReducer.customers);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [skip, setSkip] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [showPagination, setShowPagination] = useState(true);

  useEffect(() => {
    dispatch(fetchCustomer(pageSize, skip));
  }, [dispatch, pageSize, skip]);

  let dataToDisplay = dataCustomers;

  const handleSearch = async () => {
    const results = await dispatch(searchCustomer(searchTerm));
    setSearchResults(results);
    setShowPagination(false);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + pageSize);
  };

  const handleBack = () => {
    setSkip((prevSkip) => prevSkip - pageSize);
  };

  const reFetch = async () => {
    await dispatch(fetchCustomer(pageSize, skip));
    setShowPagination(true)
  };

  return (
    <>
      <div className="d-flex">
        <NavLink to={"/addCustomer"}>
          <button className="btn btn-info m-2">Add Customer</button>
        </NavLink>
        <div className="input-group justify-content-end m-2">
          <div className="form-outline">
            <input type="search" placeholder="search" id="form1" className="form-control" style={{ height: 40 }} value={searchTerm} onChange={handleChange} />
          </div>
          <button type="button" className="btn btn-primary" style={{ height: 40 }} onClick={handleSearch}>
            <IonIcon name="search-outline" />
          </button>
        </div>
      </div>
      <div style={{ width: "70rem", marginLeft: "auto", marginRight: "auto", height: "200px" }}>
        <CustomerTable dataUser={dataToDisplay} />
        {dataToDisplay.users?.length > 0 && (
          <div className="d-flex gap-2">
            {dataToDisplay.users[0].id === 1 || !showPagination ? (
              ""
            ) : (
              <button type="button" className="btn btn-primary" style={{ marginTop: "1rem", minWidth: "100px", minHeight: "40px", justifyContent: "center" }} onClick={handleBack}>
                Prev
              </button>
            )}

            {dataToDisplay.users[0]?.id === 21 || !showPagination ? (
              ""
            ) : (
              <button type="button" className="btn btn-primary" style={{ marginTop: "1rem", minWidth: "100px", minHeight: "40px", justifyContent: "center" }} onClick={handleLoadMore}>
                Next
              </button>
            )}

            {showPagination ? (
              ""
            ) : (
              <button type="button" className="btn btn-primary" style={{ marginTop: "1rem", minWidth: "100px", minHeight: "40px", justifyContent: "center" }} onClick={reFetch}>
                See All
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
