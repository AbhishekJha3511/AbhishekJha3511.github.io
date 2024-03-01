// document.addEventListener('DOMContentLoaded', function () {
//   // Number of cards to repeat
//   const numberOfCards = 5;

//   // Container to hold the cards
//   const container = document.getElementsByClassName('skills-sec');

//   // Loop to creat and append the cards
//   for (let i = 0; i < numberOfCards; i++) {
//     // Create a card element
//     const card = document.createElement('div')
//     card.className = 'skill-card'
//     // card.textContent = `Card ${i +1}`    

//     container.appendChild(card)
//   }
  
// })

function gotoGhub(){
    window.location='https://abhishekjha3511.github.io/';
}
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element by its ID
    const downloadCV = document.getElementById('downloadCV');

    // Add a click event listener to the button
    downloadCV.addEventListener('click', function () {
        // Replace 'your_pdf_file.pdf' with the actual path to your PDF file
        const pdfFilePath = 'Images/MyTResume.pdf';

        // Create an anchor element
        const link = document.createElement('a');

        // Set the href attribute to the PDF file path
        link.href = pdfFilePath;

        // Set the download attribute with the desired file name
        link.download = 'Abhishek_JhaCV.pdf';

        // Append the anchor to the document body
        document.body.appendChild(link);

        // Trigger a click event on the anchor element
        link.click();

        // Remove the anchor element from the document body
        document.body.removeChild(link);
    });
});