from pydantic import BaseSettings


class Settings(BaseSettings):
    SECRET_KEY: str
    MONGO_URI: str
    JWT_SECRET_KEY: str
    OPENAI_API_KEY: str

    class Config:
        env_file = './.env'


settings = Settings()