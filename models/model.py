from pydantic import BaseModel, field_validator
from urllib.parse import urlparse

class Video(BaseModel):
    url:str

    @field_validator("url")
    @classmethod
    def validate_youtube_url(cls, value):
        parsed = urlparse(value)

        if parsed.netloc not in ["youtube.com", "www.youtube.com", "youtu.be"]:
            raise ValueError("Please enter a valid YouTube URL")

        return value