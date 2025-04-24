export function getDuration(startDate, endDate = new Date()) {
    const start = new Date(startDate);
    const end = new Date(endDate); 
  
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

  export function showLoader(opt) { 
    switch (opt) {
        case true:
            document.body.classList.add("no-scroll");
            const spinnerDiv = document.createElement('div');
            spinnerDiv.id = 'spinner';
            // spinnerDiv.classList.add('spinner');
          
            // Create image element
            const spinnerImg = document.createElement('img');
            spinnerImg.src = '/assets/images/grids-loader.gif'; // Replace with actual path
            spinnerImg.alt = 'Loading...';
            spinnerImg.width = '11px';
          
            // Append image to spinner div
            spinnerDiv.appendChild(spinnerImg);
          
            // Append spinner div to body or a specific container
            document.body.appendChild(spinnerDiv);
            break;
    
        case false:
            document.body.classList.remove("no-scroll");
            document.body.removeChild(document.getElementById("spinner"));
            break;
    }
  }