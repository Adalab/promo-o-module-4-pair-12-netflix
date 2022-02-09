// login

const sendLoginToApi = (data) => {
  console.log("Se están enviando datos al login:", data);
  return fetch(
    "//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json"
  )
    .then((response) => response.json())
    .then(() => {
      if (data.email.includes("gmail")) {
        return {
          success: true,
          userId: "123",
        };
      } else {
        return {
          success: false,
          errorMessage: "Usuario no encontrado",
        };
      }
    });
};

// signup

const sendSingUpToApi = (data) => {
  console.log("Se están enviando datos al signup:", data);
  return fetch("http://localhost:4000/sign-up", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

// profile

const sendProfileToApi = (userId, data) => {
  console.log("Se están enviando datos al profile:", userId, data);
  return fetch(
    "//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json"
  );
};

const getProfileFromApi = (userId) => {
  console.log("Se están pidiendo datos del profile del usuario:", userId);
  return fetch(
    "//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json"
  )
    .then((response) => response.json())
    .then(() => {
      return {
        success: true,
        name: "Maricarmen",
        email: "mari@mail.com",
        password: "1234567",
      };
    });
};

// user movies

const getUserMoviesFromApi = (userId) => {
  console.log(
    "Se están pidiendo datos de las películas de la usuaria:",
    userId
  );
  return fetch("http://localhost:4000/user/movies", {
    method: "GET",
    headers: {
      "user-id": userId,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

const objToExport = {
  sendLoginToApi: sendLoginToApi,
  sendSingUpToApi: sendSingUpToApi,
  sendProfileToApi: sendProfileToApi,
  getProfileFromApi: getProfileFromApi,
  getUserMoviesFromApi: getUserMoviesFromApi,
};

export default objToExport;
