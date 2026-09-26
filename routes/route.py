from fastapi.routing import APIRouter
from fastapi import Request,Form
from fastapi.responses import HTMLResponse,FileResponse
from models.model import Video
from yt_dlp import YoutubeDL
import os
from fastapi.templating import Jinja2Templates
youtubeurl = APIRouter()
templates = Jinja2Templates(directory="templates")


ydl_opts = {
        "outtmpl": "downloads/%(title)s.%(ext)s",
        "postprocessors": [{
            "key": "FFmpegVideoConvertor",
            "preferedformat": "mp4"
        }
    ]
}
youtube = YoutubeDL(ydl_opts)  # type: ignore
# youtube = YoutubeDL(ydl_opts) #error:ignore

@youtubeurl.get("/",response_class=HTMLResponse)
def page_show(request:Request):
    return templates.TemplateResponse("index.html",{"request":request})

@youtubeurl.post("/convert")
def video_Convert(request:Request,data:Video):
    print(data)
    video_download = youtube.extract_info(data.url,download=False)
    return {"video_id":video_download["id"]}# type: ignore
    

@youtubeurl.get("/download/{video_id}")
def download_filename(video_id):
    video_url = f"https://www.youtube.com/watch?v={video_id}"
    video_download = youtube.extract_info(video_url,download=True)
    video_filepath = video_download["requested_downloads"][0]["filepath"] #type:ignore
    filename = os.path.basename(video_filepath)
    return FileResponse(path=video_filepath,filename=filename,media_type="video/mp4")