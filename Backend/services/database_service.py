from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, Product, Supplier

load_dotenv()

DATABASE_URL = os.getenv("DBURL")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    Base.metadata.create_all(bind=engine)