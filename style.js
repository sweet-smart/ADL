const image_input = document.querySelector("#image_input");
const image_gallery = document.querySelector("#image_gallery");
const submit_button = document.querySelector("#submit_button");
const image_description = document.querySelector("#image_description");

image_input.addEventListener("change", function () {
  image_gallery.innerHTML = ""; // Clear the gallery on each new upload

  const files = Array.from(this.files); // Convert FileList to an array
  files.forEach((file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");

      const imgElement = document.createElement("img");
      imgElement.src = reader.result;
      imgElement.alt = "Uploaded Image";

      imageContainer.appendChild(imgElement);
      image_gallery.appendChild(imageContainer);
    });
    reader.readAsDataURL(file);
  });
});

submit_button.addEventListener("click", function () {
  const description = image_description.value;

  if (description === "") {
    alert("Please add a description for the images.");
    return;
  }

  // Gather all image sources and description
  const images = Array.from(image_gallery.querySelectorAll("img")).map(
    (img) => img.src
  );

  // Handle submission (e.g., send to server or log data)
  console.log("Images:", images);
  console.log("Description:", description);

  alert("Images and description submitted!");
});
