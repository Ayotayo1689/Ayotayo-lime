
export const convertToDate = (dateString)=> {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${month} ${day}, ${year}`;
  }

  export const convertToTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours()+1;
    const minutes = date.getMinutes();
    return `${ hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }