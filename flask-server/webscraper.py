from bs4 import BeautifulSoup
from selenium import webdriver
import requests
import server

def getURL(job, location):
    job = job.lower().replace(' ', '+')
    return f"https://ca.indeed.com/jobs?q={job}&l={location}&lang=en&vjk=6d5da51715f620dc"

def scrapePage(url):
    driver = webdriver.Chrome()
    driver.get(url)

    soup = BeautifulSoup(driver.page_source, "html.parser")

    job_titles = [job.text.strip() for job in soup.find_all('a', class_='jcs-JobTitle')]
    companies = [company.text.strip() for company in soup.find_all('span', class_='css-1h7lukg')]
    driver.quit()

    return job_titles, companies
