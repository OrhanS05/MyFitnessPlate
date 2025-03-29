const getFormattedDate = () => {
    return new Date().toLocaleDateString("nl-NL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  
  export default getFormattedDate;
  