const data = {
    mainTitle: "My Favourite Cars",
    cardContents: [
      {
        name: "Chevrolet",
        imageLink:
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        name: "AUDI",
        imageLink:
          "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        name: "BMW",
        imageLink:
          "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        name: "Lamborghini",
        imageLink:
          "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    ],
    userData: { name: "Ratnavalli", tagLine: "LearnByDoing" },
  };
  
  
  // Plug in title data to HTML
  let mainTitleElement = document.getElementById("main-title");
  mainTitleElement.innerHTML += data.mainTitle;
  
  
  // Create template for card content
  let getCardStructure = (name, imageLink) => {
    return `<div class="col-12 col-sm-6 mb-4">
    <div class="tile">
      <div class="tile-text text-center">
        <h5>${name}</h5>
      </div>
      <img 
        src="${imageLink}" />
    </div>
  </div>`;
  };
  
  let cardRow = document.getElementById("card-row");
  
  // Plug in card data to HTML
  data.cardContents.forEach((cardContent) => {
    let { name, imageLink } = cardContent;
    cardRow.innerHTML += getCardStructure(name, imageLink);
  });
  
  // Create template for footer content
  let getFooterStructure = (name, tagLine) => {
    return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
      <p>${tagLine}</p>`;
  };
  
  let footerContent = document.getElementById("footer");
  let { name, tagLine } = data.userData;
  
  // Plug in footer data to HTML
  footerContent.innerHTML += getFooterStructure(name, tagLine);
  