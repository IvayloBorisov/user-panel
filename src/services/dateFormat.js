
const formatDate = (date) => {
    
  const formatDate = new Date(date);
  const [day, month, year] = [
    formatDate.getDate(),
    formatDate.toLocaleString("default", { month: "short" }),
    formatDate.getFullYear(),
  ];
  return `${day} ${month} ${year}`;
};

export default formatDate;
