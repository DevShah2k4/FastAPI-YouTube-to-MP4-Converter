# 🎥 FastAPI YouTube to MP4 Converter

A web application built with **FastAPI** that allows users to provide a YouTube video URL and download the video in **MP4 format**.

The application uses **yt-dlp** for video extraction and downloading, **FFmpeg** for media processing, and **Jinja2 templates** with HTML, CSS, and JavaScript for the frontend.

## 🚀 Features

* 🎬 Convert YouTube videos to MP4
* 🔗 Accept YouTube video URLs through a web interface
* ⚡ FastAPI-based backend
* 📥 Download processed videos
* 🎨 Clean and user-friendly web interface
* 🧩 Modular routing using FastAPI `APIRouter`
* 📄 Jinja2-based frontend templates
* 🛠️ FFmpeg-based media processing

## 🛠️ Tech Stack

### Backend

* **Python**
* **FastAPI**
* **Uvicorn**
* **yt-dlp**
* **FFmpeg**

### Frontend

* **HTML5**
* **CSS3**
* **JavaScript**
* **Jinja2**

## 📂 Project Structure

```text
FastAPI Project/
│
├── index.py
├── requirements.txt
├── .gitignore
│
├── models/
│   └── model.py
│
├── routes/
│   └── route.py
│
├── templates/
│   └── index.html
│
└── static/
    ├── css/
    │   └── style.css
    │
    └── js/
        └── script.js
```

## 🔄 Application Workflow

```text
User enters YouTube URL
          ↓
       FastAPI
          ↓
      API Route
          ↓
        yt-dlp
          ↓
       FFmpeg
          ↓
     MP4 Processing
          ↓
    Video Download
```

1. The user enters a YouTube video URL through the web interface.
2. The request is sent to the FastAPI backend.
3. FastAPI processes the request through the appropriate API route.
4. `yt-dlp` extracts and downloads the required video.
5. FFmpeg performs the required media processing.
6. The processed video is made available for download.

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/DevShah2k4/FastAPI-YouTube-to-MP4-Converter.git
```

### 2. Navigate to the Project Directory

```bash
cd FastAPI-YouTube-to-MP4-Converter
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

### 4. Activate the Virtual Environment

**Windows:**

```bash
venv\Scripts\activate
```

### 5. Install Dependencies

```bash
pip install -r requirements.txt
```

## 🎞️ FFmpeg Setup

This project requires **FFmpeg** for video processing.

Make sure FFmpeg is installed and added to your system's `PATH`.

Verify the installation with:

```bash
ffmpeg -version
```

If the FFmpeg version is displayed, it is configured correctly.

## ▶️ Run the Application

Start the FastAPI application using Uvicorn:

```bash
uvicorn index:app --reload
```

Then open the application in your browser:

```text
http://127.0.0.1:8000
```

## 📌 Usage

1. Open the application in your browser.
2. Enter a valid YouTube video URL.
3. Submit the URL.
4. Wait for the video processing to complete.
5. Download the resulting MP4 file.

## 📚 What I Learned

Through this project, I gained practical experience in:

* Building web applications and APIs using **FastAPI**
* Using **APIRouter** for modular application structure
* Handling HTTP requests and form data
* Working with **Jinja2 templates**
* Connecting a frontend built with HTML, CSS, and JavaScript to a FastAPI backend
* Using **yt-dlp** for video extraction and downloading
* Using **FFmpeg** for media processing
* Structuring a Python-based web application

## 👨‍💻 Author

**Dev Shah**

GitHub: [DevShah2k4](https://github.com/DevShah2k4)
