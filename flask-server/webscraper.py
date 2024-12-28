from bs4 import BeautifulSoup
import requests
import server

def getURL(job, location):
    # page_to_scrape = requests.get(f"https://ca.indeed.com/jobs?q={job}&l={location}&from=searchOnDesktopSerp&vjk=1e98bc5a83ef3d73")
    job = job.lower().replace(' ', '+')
    return f"https://ca.indeed.com/jobs?q={job}&l={location}&from=searchOnDesktopSerp&vjk=1e98bc5a83ef3d73"


# job = input('Enter a job title: ').lower().replace(' ', '+')
# location = input('Enter your location: ').lower().replace(' ', '+')

# page_to_scrape = requests.get(f"https://ca.indeed.com/jobs?q={job}&l={location}&from=searchOnDesktopSerp&vjk=1e98bc5a83ef3d73")
# print(f"https://ca.indeed.com/jobs?q={job}&l={location}&from=searchOnDesktopSerp&vjk=1e98bc5a83ef3d73")