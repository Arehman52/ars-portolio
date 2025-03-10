export function getDuration(startDate, endDate = new Date()) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    debugger
  
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
  
    if (months < 0) {
        years--; 
        months += 12;
    }
  
    let yearText = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
    let monthText = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';
  
    return [yearText, monthText].filter(Boolean).join(' ');
  }