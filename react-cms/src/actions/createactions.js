const BASE_URL = "https://dummyjson.com";

export function fetchDasboard() {
  return async function (dispatch) {
    try {
    } catch (err) {}
  };
}

export function fetchCustomer(limit , skip) {
  return async function (dispatch) {
    try {
      const dataUser = await fetch(`${BASE_URL}/users?limit=${limit}&skip=${skip}`)
      if (!dataUser.ok) {
        throw await dataUser.json();
      }

      dispatch({
        type: "FETCH_USERS",
        payload: await dataUser.json(),
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function addCustomer(dataCustomer) {
  return async function () {
    try {
      if (dataCustomer.firstName === "" || dataCustomer.lastName === "" || dataCustomer.phone === "" || dataCustomer.bank.cardType === "" || dataCustomer.bank.cardNumber === "") {
        throw {
          message: "Form cannot be emty",
        };
      }

      const res = await fetch(`${BASE_URL}/users/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataCustomer),
      });

      if (!res.ok) {
        throw await res.json();
      }

      console.log(await res.json())
    } catch (err) {
      console.log(err.message);
      throw err;
    }
  };
}

export function deleteUser(id) {
  return async function () {
    try {
      const resDel = await fetch(`${BASE_URL}/users/${id}`, {
        method: "DELETE",
      });

      if (!resDel.ok) {
        throw await resDel.json();
      }

      console.log(await resDel.json())
    } catch (err) {
      throw err;
    }
  };
}

export function fetchDetailId(id) {
  return async function (dispatch) {
    try {
      if (typeof id === "object") {
        id = +id.id;
      }

      const res = await fetch(`${BASE_URL}/users/${id}`);

      if (!res.ok) {
        throw await res.json();
      }

      dispatch({
        type: "FETCH_USERS_ID",
        payload: await res.json(),
      });
    } catch (err) {
      throw err;
    }
  };
}

export function editCustomer({ id, dataCustomer }) {
  return async function () {
    try {
      if (dataCustomer.firstName === "" || dataCustomer.lastName === "" || dataCustomer.phone === "" || dataCustomer.bank.cardType === "" || dataCustomer.bank.cardNumber === "") {
        throw {
          message: "Form cannot be emty",
        };
      }

      const res = await fetch(`${BASE_URL}/users/${id.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataCustomer),
      });

      if (!res.ok) {
        throw await res.json();
      }

      console.log(await res.json(), "Success Update Data");
    } catch (err) {
      throw err;
    }
  };
}

export function searchCustomer(dataSearch){
    return async function (dispatch) {
        try {
            const res = await fetch(`${BASE_URL}/users/search?q=${dataSearch}`)
            if(!res.ok){
                throw await res.json()
            }

            dispatch({
                type: "FETCH_USERS_SEARCH",
                payload: await res.json(),
            });
            
        } catch (err) {
            throw err
        }
    }
}
