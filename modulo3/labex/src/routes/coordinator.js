// Volta uma página
export const goToBack = (navigate) => {
  navigate(-1);
};

// Página inicial
export const goToHomePage = (navigate) => {
  navigate('/');
};

// Lista de Viagens
export const goToListTripsPage = (navigate) => {
  navigate('/listTripsPage');
};

// Página para se inscrever numa viagem
export const goToApplicationFormPage = (navigate) => {
  navigate('/applicationFormPage');
};

// Página de login
export const goToLoginPage = (navigate) => {
  navigate('/loginPage');
};

// Página inicial do adm
export const goToAdminHomePage = (navigate) => {
  navigate('/adminHomePage');
};

// Página de criação de viagens
export const goToCreateTrip = (navigate) => {
  navigate('/createTripPage');
};

// Página de detalhes da viagem
export const goToTripDetails = (navigate) => {
  navigate('/tripDetailsPage');
};
