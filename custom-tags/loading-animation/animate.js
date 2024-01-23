let loader = document.querySelector(".loader");
var metaTag = document.querySelector('meta[name="theme-color"]');
let minimumTimePassed = false;
let videoLoaded = false;
let imagesLoaded = false;

document.addEventListener("DOMContentLoaded", function () {
  // Open or create the IndexedDB database
  const dbName = "myDatabase";
  const request = indexedDB.open(dbName, 1);

  request.onerror = function (event) {
    console.error("Error opening database:", event.target.error);
  };

  request.onupgradeneeded = function (event) {
    // Create an object store to store ArrayBuffer data
    const db = event.target.result;
    const objectStore = db.createObjectStore("myObjectStore", {
      keyPath: "id",
      autoIncrement: true,
    });
    console.log("Objectstore opened successfully:", objectStore);
  };

  request.onsuccess = function (event) {
    const db = event.target.result;
    console.log("Database opened successfully:", db);
  };
});

function storeArrayBuffer(arrayBuffer) {
  const dbName = "myDatabase";
  const objectStoreName = "myObjectStore";

  const request = indexedDB.open(dbName, 1);

  request.onerror = function (event) {
    console.error("Error opening database:", event.target.error);
  };

  request.onsuccess = function (event) {
    const db = event.target.result;
    try {
      const transaction = db.transaction([objectStoreName], "readwrite");
      const objectStore = transaction.objectStore(objectStoreName);

      // Get the first record
      const getRequest = objectStore.get(1);

      getRequest.onerror = function (event) {
        console.error("Error getting record:", event.target.error);
      };

      getRequest.onsuccess = function (event) {
        const firstRecord = event.target.result;

        if (firstRecord) {
          // Update the data property of the first record
          firstRecord.data = arrayBuffer;

          // Use put to update the record
          const putRequest = objectStore.put(firstRecord);

          putRequest.onerror = function (event) {
            console.error("Error updating record:", event.target.error);
          };

          putRequest.onsuccess = function (event) {
            console.log("Record updated successfully:", firstRecord);
          };
        } else {
          console.log("No record found with ID 1.");
          // Add the ArrayBuffer to the object store
          const request = objectStore.add({ data: arrayBuffer });

          request.onerror = function (event) {
            console.error("Error storing data:", event.target.error);
          };

          request.onsuccess = function (event) {
            console.log("Data stored successfully:", event.target.result);
          };
        }
      };
    } catch (err) {
      return;
    }
  };
}

function fetchAndStoreData() {
  console.log("fetching and storing...");
  loader.classList.remove("hidden");
  let percentLoadedText = document.querySelector(".loading-percentage");
  percentLoadedText.style.display = "block";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/assets/videos/teaser-1-compressed.mp4", true); // Replace 'example.bin' with the actual URL of your binary data.
  xhr.responseType = "arraybuffer";

  xhr.onload = function () {
    if (xhr.status === 200) {
      const arrayBuffer = xhr.response;
      storeArrayBuffer(arrayBuffer);
      var blob = new Blob([arrayBuffer], { type: "video/mp4" });
      mobileVideo.src = URL.createObjectURL(blob);
      videoLoaded = true;
      if (imagesLoaded) {
        setTimeout(() => {
          mobileVideo.play();
          loader.classList.add("hidden");
        }, 1500);
      }
    } else {
      console.error("Error fetching data:", xhr.statusText);
    }
  };
  xhr.onprogress = function (oEvent) {
    if (oEvent.lengthComputable) {
      var percentComplete = oEvent.loaded / oEvent.total;
      console.log(percentComplete);
      percentLoadedText.innerHTML = `${Math.round(percentComplete * 100)}%`;
    }
  };

  xhr.send();
}

function fetchStoredData() {
  console.log("fetching stored data...");
  const dbName = "myDatabase";
  const objectStoreName = "myObjectStore";

  const request = indexedDB.open(dbName, 1);

  request.onerror = function (event) {
    console.error("Error opening database:", event.target.error);
  };

  request.onsuccess = function (event) {
    const db = event.target.result;
    try {
      const transaction = db.transaction([objectStoreName], "readonly");
      const objectStore = transaction.objectStore(objectStoreName);

      // Get all stored data
      const getDataRequest = objectStore.getAll();

      getDataRequest.onerror = function (event) {
        console.error("Error fetching stored data:", event.target.error);
      };

      getDataRequest.onsuccess = function (event) {
        const storedData = event.target.result;

        if (storedData.length > 0) {
          // Access the ArrayBuffer from the first stored item
          const retrievedArrayBuffer = storedData[0].data;
          console.log("Data retrieved successfully:", retrievedArrayBuffer);
          var blob = new Blob([retrievedArrayBuffer], { type: "video/mp4" });
          mobileVideo.src = URL.createObjectURL(blob);
          videoLoaded = true;
          if (imagesLoaded) {
            setTimeout(() => {
              mobileVideo.play();
              loader.classList.add("hidden");
            }, 1500);
          }
        } else {
          console.log("No data found in the object store.");
          fetchAndStoreData();
        }
      };
    } catch (err) {
      fetchAndStoreData();
      return;
    }
  };
}

setTimeout(() => {
  minimumTimePassed = true;
}, 3000);

if (
  localStorage.getItem("playTransitionAnimation") &&
  window.location.pathname != "/"
) {
  console.log("not showing inital loading animation...");
} else {
  loader.classList.remove("hidden");
}

if (
  !(window.innerWidth > 850) &&
  (window.location.pathname == "/" || window.location.pathname == "/index.html")
) {
  fetchStoredData();
}
window.addEventListener("load", () => {
  if (!localStorage.getItem("fontsCached")) {
    localStorage.setItem("fontsCached", true);
    // metaTag.setAttribute('content', '#000000');
  }

  if (
    !(window.innerWidth > 850) &&
    (window.location.pathname == "/" ||
      window.location.pathname == "/index.html")
  ) {
    imagesLoaded = true;
    if (videoLoaded) {
      setTimeout(() => {
        mobileVideo.play();
        loader.classList.add("hidden");
      }, 1500);
    }
  } else {
    console.log("else", window.innerWidth);
    setTimeout(
      () => {
        loader.classList.add("hidden");
      },
      minimumTimePassed ? 100 : 3000
    );
  }
  // loader.classList.add("hidden");
  console.log("loaded...");
  setTimeout(() => {
    // metaTag.setAttribute('content', '#ffffff');
  }, 200);
});
