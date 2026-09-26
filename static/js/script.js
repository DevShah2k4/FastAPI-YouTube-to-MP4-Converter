console.log("SCRIPT JS LOADED");

const input = document.getElementById("youtubeUrl");
const convertBtn = document.getElementById("convertBtn");
const status = document.getElementById("status");
const downloadBtn = document.getElementById("downloadBtn");
const homeBtn = document.getElementById("homeBtn");


function isYouTubeUrl(url) {

    try {

        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname.toLowerCase();

        return (
            hostname === "youtube.com" ||
            hostname === "www.youtube.com" ||
            hostname === "youtu.be"
        );

    } catch {

        return false;
    }
}


function disableDownload() {

    downloadBtn.classList.add("disabled");
    downloadBtn.setAttribute("aria-disabled", "true");
    downloadBtn.removeAttribute("href");
    downloadBtn.style.display = "none";
}


function enableDownload(videoId) {

    downloadBtn.href = `/download/${videoId}`;
    downloadBtn.classList.remove("disabled");
    downloadBtn.setAttribute("aria-disabled", "false");
    downloadBtn.style.display = "block";
}


function disableHome() {

    homeBtn.classList.add("disabled");
    homeBtn.setAttribute("aria-disabled", "true");
    homeBtn.style.display = "none";
}


function enableHome() {

    homeBtn.classList.remove("disabled");
    homeBtn.setAttribute("aria-disabled", "false");
    homeBtn.style.display = "block";
}


function showError(message) {

    status.style.display = "block";
    status.textContent = message;

    // Hide error message after 4 seconds
    setTimeout(() => {
        status.style.display = "none";
    }, 1000);
}


convertBtn.addEventListener("click", async function() {

    const youtubeUrl = input.value.trim();


    // Empty URL
    if (!youtubeUrl) {

        showError("Please enter a YouTube URL.");

        convertBtn.disabled = false;
        convertBtn.textContent = "Convert to MP4";

        return;
    }


    // Invalid YouTube URL
    if (!isYouTubeUrl(youtubeUrl)) {

        showError("Please enter a valid YouTube URL.");

        input.value = "";

        convertBtn.disabled = false;
        convertBtn.textContent = "Convert to MP4";

        disableDownload();
        disableHome();

        return;
    }


    // Start conversion
    convertBtn.disabled = true;
    convertBtn.textContent = "Converting...";

    status.style.display = "block";
    status.textContent = "Processing your video. Please wait...";

    disableDownload();
    disableHome();


    try {

        const response = await fetch("/convert", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                url: youtubeUrl
            })

        });


        const data = await response.json();


        if (!response.ok) {

            const errorMessage =
                data.detail || "Unable to process this YouTube URL.";

            throw new Error(errorMessage);
        }


        if (!data.video_id) {

            throw new Error("Video could not be processed.");
        }


        console.log("Response:", data);


        // Successful conversion
        status.style.display = "none";

        // Hide input and Convert button
        input.style.display = "none";
        convertBtn.style.display = "none";


        // Show Download button
        enableDownload(data.video_id);

    } catch (error) {

        console.error("Conversion error:", error);

        showError(
            error.message || "Something went wrong. Please try again."
        );

        // Keep input and Convert button visible
        input.style.display = "block";
        convertBtn.style.display = "block";

        convertBtn.disabled = false;
        convertBtn.textContent = "Convert to MP4";

        disableDownload();
        disableHome();
    }

});


// Download button
downloadBtn.addEventListener("click", function() {

    if (downloadBtn.classList.contains("disabled")) {
        return;
    }


    status.style.display = "block";

    status.textContent =
        "Download started. Please save the MP4 file, then return to Home.";


    enableHome();

});


// Back to Home button
homeBtn.addEventListener("click", function(event) {

    if (homeBtn.classList.contains("disabled")) {

        event.preventDefault();
        return;
    }

});